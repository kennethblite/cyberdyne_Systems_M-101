/*
 * Chatman conversation type declaration
 */
// inherite from Base Control
extend(ChatmanConversation, BaseControl);
ChatmanConversation.templateId = "#chatmanConversationTemplate";

function ChatmanConversation(container, name){
    ChatmanConversation.superclass.constructor.apply(this, arguments);
    
    this.calloutsContainer = null;
    this.callOuts = [];
    this.enabled = true; // incicates whether user can input something
    
    this.textBox = null;
    this.scrollBar = null;  
    this.menu = null;
    this.questionsMenuWidth = 0;
}

ChatmanConversation.prototype.init = function(dataObj) {
    this.calloutsContainer = this.control.find('.calloutsContainer');
    this.textBox = this.control.find('.textBox');


    if (dataObj && dataObj.Menu && dataObj.Menu.length != 0) {
        this.control.find('.autoQuestions').show();
        this.createMenu(dataObj.Menu);
    }  
}

// create questions menu from dataObject
ChatmanConversation.prototype.createMenu = function(menuData) {
    // evaluate string data to have an object
    var menuDataObj;
    try {
        menuDataObj = eval(menuData);
    } catch (e) {
        return;
    }

    var menu = this.control.find('ul.sf-menu');
    this.menu = menu;

    var loadMenu = function(menuNode, menuData) {

        for (var i = 0; i < menuData.length; i++) {
            // create and add to menu text in <a> tag
            var li = $('<li><a class="menuItem" href="#"><span class="menuItemText">' + menuData[i].Text + '</span</a></li>');
            menuNode.append(li);

            // add subItems if there are some
            if (menuData[i].SubItems && menuData[i].SubItems.length != 0) {
                var subItemsContainer = $('<ul></ul>');
                li.append(subItemsContainer);
                loadMenu(subItemsContainer, menuData[i].SubItems);
            }
        }
    };

    loadMenu(menu, menuDataObj);

    // uses superfish jquery plugin
    menu.supersubs({       
        extraWidth: 1.2
    }).superfish();

    // save menu width to avoid futher bugs
    var width = 0;
    menu.children().each(function(e) {
        width += $(this).width();
    });
    // add some space to be look better
    width += 5;
    // set menu container width to calculated
    menu.parent().css('width', width);
    this.questionsMenuWidth = width;
}


ChatmanConversation.prototype.bindUI = function() {
    /*
    * "Say" button click handler - adds callout: user and chatmanresponse
    */
    this.control.find('.pushButtonRed')
        .click({ conversation: this },
                function(e) {
                    var conversation = e.data.conversation;

                    if (e.button == 0 && conversation.enabled) {
                        conversation.processUserInput();
                    }
                });
    this.control.find('.textBox')
        .keyup({ conversation: this },
                function(e) {
                    var conversation = e.data.conversation;

                    if (e.keyCode == 13 && conversation.enabled) {
                        conversation.processUserInput();

                        conversation.textBox.val('');
                        e.stopPropagation();
                        return false;
                    }

                    if (e.keyCode == 13) {
                        return false;
                    }
                })
    // limiting max length in textarea
        .keypress(function() {
            if ($(this).val().length >= 100) {
                return false;
            }
        });

    // automatic questions scrolling
    var scrollLength = 40;
    var menuContainer = this.control.find('.menuContainer');
    // max left position of container with questions
    var maxLeft = menuContainer.parent().width() - this.questionsMenuWidth;
    var autoQuestions = this.control.find('.autoQuestions');
    // saves scroller positions - for easy back navigation
    var scrollHistory = [15];
    currentScroll = 0;

    this.control.find('.leftScrollerQuestions')
        .click(function(e) {
            if (e.button == 0) {
                if (currentScroll != 0) {
                    // navigates back in scroll history
                    menuContainer.css('left', scrollHistory[--currentScroll]);
                }
            }
        });

    this.control.find('.rightScrollerQuestions')
        .click(function(e) {
            if (e.button == 0) {
                // get the element, which is near right scroller        
                var point = autoQuestions.offset();
                var scrollElement = $(document.elementFromPoint(point.left + autoQuestions.width() - 35, point.top + 5)).closest('li');

                if (scrollElement.length != 0) {
                    // get the left of elements preceding current
                    scrollElement = scrollElement.prev();
                    var left = 0;
                    while (scrollElement.length != 0) {
                        left += scrollElement.width();
                        scrollElement = scrollElement.prev();
                    }

                    left = -left + 13;
                    menuContainer.css('left', left);

                    // add position to history
                    if (left != scrollHistory[currentScroll]) {
                        // adds to history if it is not formed yet
                        if (typeof (scrollHistory[currentScroll + 1]) == 'undefined') {
                            scrollHistory.push(left);
                        }

                        ++currentScroll;
                    }
                }
            }
        });

    // add automatic question to textBox
    menuContainer.find('.sf-menu>li>ul .menuItem').not(':has(.sf-sub-indicator)').click(
        { conversation: this },
        function(e) {
            if (e.button == 0) {
                var currentItem = $(this);
                var closestUL;
                var questionText = "";

                do {
                    questionText = currentItem.find('.menuItemText').text() + ' ' + questionText;
                    closestUL = currentItem.closest('ul');
                    currentItem = closestUL.siblings('a');
                } while (!closestUL.hasClass('sf-menu'));

                var conversationControl = e.data.conversation;

                // remove ... from text
                var isAutoReply = true;
                if (questionText.indexOf('...') != -1) {
                    questionText = $.trim(questionText).replace('...', '');
                    isAutoReply = false;
                }

                // only 1st word is uppercase
                questionText = questionText.toLowerCase();
                questionText = questionText[0].toUpperCase() + questionText.substring(1);

                conversationControl.control.find('.textBox').val(questionText);
                conversationControl.focus();
                // move cursor to the end to text
                conversationControl.textBox[0].setSelectionRange(questionText.length, questionText.length);
                // hides menu
                conversationControl.menu.hideSuperfishUl();

                // emulate enter press
                /*if (isAutoReply) {
                    conversationControl.processUserInput();
                }*/
            }
        });

    // focus to control
    this.focus();
}

ChatmanConversation.prototype.processUserInput = function(){
    var userInput = jQuery.trim( this.textBox.val() ).replace('\n', '');
                        
    if (userInput != ''){
    
        var userCalloutDataObj = {Message: userInput};// to remove
        this.addUserCallout(userCalloutDataObj);        
        
        /* 
        var ChatmanCallout =  { 
            //Type: 'AnsweredQuestionCallout', MoodId: "sd"
            Type: 'ActionCallout', ActionButton: {Name: "Test", Description: "ahhha", MoodIcon: "images/Happy.png", MoodName: "Happy", Id:"3434"}
            //Type: "YesNoQuestionCallout",  ChatmanText: "SDFSDF", Answer: "DfD"
            //type: 'GoCallout', GoText: "go check it out", data: "#$", data1: "$%^Y$YT"
        };                          
        
        this.addChatmanCallout(ChatmanCallout); // to remove
        
        this.addUserCallout(userCalloutDataObj);
        ChatmanCallout =  {

        Type: 'TextCallout', ChatmanText: "sd dfsdffsd sdfsdfsfdfsdfs sdfd", Color: "red"
        };
        this.addChatmanCallout(ChatmanCallout); // to remove
        /* 
        <!--END REMOVE-->
        */
    }
    
    // clear message text area
    this.textBox.val('');
}

// Adds new userCallout to callouts container
ChatmanConversation.prototype.addUserCallout = function(calloutData){
    
    // creating new user callout
    var newCallout = new UserCallout(this.calloutsContainer);
    this.callOuts.push(newCallout);
    newCallout.bind(calloutData);
    
    // handle changes in content
    this.contentChangedHandler();
    
    // C# command
    executeCommand(this.name, 'UserSaid', calloutData.Message);
}

// Adds new chatmanCallout to callouts container
ChatmanConversation.prototype.addChatmanCallout = function(calloutData){
    
    // make action button long
    if (calloutData.Type == "ActionCallout"){
        calloutData.ActionButton.IsLong = true;
    }
    
    // creates new chatman callout using data
    var newCallout = new ChatmanCallout(this.calloutsContainer);
    this.callOuts.push(newCallout);
    newCallout.bind(calloutData);
    
    // set more distance from previous chamatn callout or if there are the chatman callout if first
    if ( (this.callOuts[this.callOuts.length - 2] instanceof ChatmanCallout) ) {
        newCallout.setMarginTop(18);
    }
    if ((this.callOuts.length == 1) && (calloutData.Type == "ActionCallout")) {
        newCallout.setMarginTop(18);
    }
    
    // handle changes in content
    this.contentChangedHandler();
}

// handler for callouts container content changins (adding elements to it)
ChatmanConversation.prototype.contentChangedHandler = function(){
    // overhang of calloutsContainer due to its parent == height of not visible part of container
    
    this.calloutsContainer[0].scrollTop = this.calloutsContainer[0].scrollHeight;
    if (this.callOuts.length > 30) {
        this.callOuts[0].destroy();
        this.callOuts[1].destroy();
        
        this.callOuts.splice(0, 2);
    }
}

// enables or disables user input
ChatmanConversation.prototype.setEnabled = function(isEnabled){
    this.enabled = isEnabled;
}

ChatmanConversation.prototype.focus = function() {
    this.control.find('.textBox')[0].focus();    //document.getElementById('ta1').focus();
}
