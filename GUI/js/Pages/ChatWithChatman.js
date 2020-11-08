/*
* ChitWithChatmanInfo page type declaration
*/
// inherite from Base Control
extend(ChatWithChatmanPage, BasePage);

function ChatWithChatmanPage(){
    ChatWithChatmanPage.superclass.constructor.apply(this, arguments);
    
    this.name = 'ChatWithChatman';
}
    
ChatWithChatmanPage.prototype.createControls = function() {
    // personality area controls
    var singlePersonalitySelector = 'singlePersonalitySelector';
    this.controls[singlePersonalitySelector] = new AutoScrollingList('#singlePersonalitySelectorControl', singlePersonalitySelector);

    // chat area controls
    var chatmanConversation = 'chatmanConversation';
    this.controls[chatmanConversation] = new ChatmanConversation('#chatArea', chatmanConversation);

    // smarts area contols
    var chatmanBrainpower = 'chatmanBrainpower';
    this.controls[chatmanBrainpower] = new ChatmanBrainpower('#chatmanBrainpowerControl', chatmanBrainpower);

    /*
    * tab area controls
    */
    var playAround = 'playAround';
    this.controls[playAround] = new PlayAround('#playAroundControl', playAround);

    var myChitChatsActionList = 'myChitChatsActionList';
    this.controls[myChitChatsActionList] = new ActionList('#myChitChatsActionListControl', myChitChatsActionList);

    var downloadedActionList = 'downloadedActionList';
    this.controls[downloadedActionList] = new ActionList('#downloadedActionListControl', downloadedActionList);

    var sharedActionList = 'sharedActionList';
    this.controls[sharedActionList] = new ActionList('#sharedActionListControl', sharedActionList);

    // action Cloud initalization
    ActionCloud.init();
    InfoMenu.init();
    this.bindUI();
}

ChatWithChatmanPage.prototype.bindUI = function() {
    ChatWithChatmanPage.superclass.bindUI.apply(this, arguments);

    /*
    * For text area, not to loose focus
    */
    document.body.onclick = function() {
        // resore focus to conversation
        Page.controls.chatmanConversation.focus();
    }

    /*
    * Tab Area events
    */
    var tabAreaElement = document.getElementById('tabArea');

    $('.tabButton', tabAreaElement).click(function(e) {
        if (e.button == 0) {
            // deselect selected button and select current
            $('.selectedTabButton', tabAreaElement).removeClass('selectedTabButton');
            $(this).addClass('selectedTabButton');

            // select tab content revative to selected button
            $('.selectedTabContent', tabAreaElement).removeClass('selectedTabContent');
            $('.tabContent:eq(' + $(this).attr('index') + ')').addClass('selectedTabContent');
        }
    });

    $('#myChitChatShareButton').click(function(e) {
        if (e.button == 0) {
            var popupPage = 'SharingWithFriendsPopup.html';

            //<!--END REMOVE-->

            var position = {
                offsetX: 520,
                offsetY: 400,
                dock: { top: true, left: true }
            };
            window.top.Navigation.showPopup(popupPage, position);
        }
    })
}
        
ChatWithChatmanPage.prototype.focus = function() {        
    document.body.onclick();        
}

var Page = new ChatWithChatmanPage();
