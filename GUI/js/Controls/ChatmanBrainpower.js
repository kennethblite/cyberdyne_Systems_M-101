// inherite from Base Control
extend(ChatmanBrainpower, BaseControl);
ChatmanBrainpower.templateId = "#chatmanBrainpowerTemplate";

function ChatmanBrainpower(container, name) {
    ChatmanBrainpower.superclass.constructor.apply(this, arguments);
    
    this.container = container;
    this.name = name;
    
    this.control = null;
    this.controls = {};
}

/*
 * Creates and bind controls that are inluded in ChatmanBrainpower control
 */
ChatmanBrainpower.prototype.createChildControls = function(dataObj) {
    this.controls.chatmanBrainpowerView = new ChatmanBrainpowerView(this.control.find('.chatmanBrainpowerImageControl'));
    var chatmanBrainpowerViewControl = this.controls.chatmanBrainpowerView;

    // animate imageChanging
    if (dataObj.ChatmanBrainpowerViewOld) {
        chatmanBrainpowerViewControl.bind(dataObj.ChatmanBrainpowerViewOld);
        var delay = 0;
        var imageHolder = this.control.find('.chatmanBrainpowerImageControl');

        setTimeout(function() {
            imageHolder.css({
                opacity: '0'
            });
        }, delay);

        delay += 1000;
        setTimeout(function() {
            chatmanBrainpowerViewControl.bind(dataObj.ChatmanBrainpowerView);
            imageHolder.css({
                opacity: '1'
            });
        }, delay);
    } else {
        this.controls.chatmanBrainpowerView.bind(dataObj.ChatmanBrainpowerView);
    }

    this.controls.scoreTextControl = new SimpleText(this.control.find('.scoreTextControl'), { padding: 0, fontSize: 'inherit' });

    // animate score change
    if (dataObj.OldScore) {
        this.controls.scoreTextControl.bind(dataObj.OldScore);

        var score = parseInt(dataObj.OldScore.Text);
        var scoreControl = this.controls.scoreTextControl;
        var $scoreTextControl = this.control.find('.scoreTextControl');
        var delay = 0;

        $scoreTextControl.addClass('scoreStyle2');

        // score blinking
        var blinkTimer;
        setTimeout(function() {
            blinkTimer = setInterval(function() {
                $scoreTextControl.toggleClass('hidden');
            }, 300);
        }, delay);

        // remove score blinking
        delay += 2000;
        setTimeout(function() {
            clearTimeout(blinkTimer);
            $scoreTextControl.removeClass('hidden');
        }, delay);

        var scoreDiff = parseInt(dataObj.ScoreText.Text) - score;
        // score change animation                
        executeCommand(this.name, 'ScoreAnimationStarting', scoreDiff.toString());

        delay += 100;
        setTimeout(function() {
            var k = 0;
            var isIncreasing = scoreDiff >= 0 ? true : false;

            for (var i = 0; i <= Math.abs(scoreDiff); i++) {
                setTimeout(function() {
                    scoreControl.setText(score + (isIncreasing ? k : -k));
                    ++k;
                }, 3 * i);
            }
        }, delay);

        // remove additional style for score change
        delay += scoreDiff * 3 + 1000;
        setTimeout(function() {
            $scoreTextControl.removeClass('scoreStyle2');
            scoreControl.setText(dataObj.ScoreText.Text);
        }, delay);

    } else {
        this.controls.scoreTextControl.bind(dataObj.ScoreText);
    }

    this.controls.newChitChatsHorizontalBar = new HorizontalBar(this.control.find('.newChitChatsHorizontalBarControl'));
    this.controls.newChitChatsHorizontalBar.bind(dataObj.NewChitChatsBar);

    this.controls.newWordsHorizontalBar = new HorizontalBar(this.control.find('.newWordsHorizontalBarControl'));
    this.controls.newWordsHorizontalBar.bind(dataObj.NewWordsBar);

    this.controls.newChitChatsText = new SimpleText(this.control.find('.newChitChatsText'));
    this.controls.newChitChatsText.bind(dataObj.ChitChatText);

    this.controls.newWordsText = new SimpleText(this.control.find('.newWordsText'));
    this.controls.newWordsText.bind(dataObj.NewWordsText);

    if (dataObj.OldLevel) {
        var chatmanBrainpowerLevel = this.control.find('.levelStatus');

        var interval = setInterval(function() {
            chatmanBrainpowerLevel.toggleClass('hidden');
        }, 300);

        setTimeout(function() {
            clearInterval(interval);
            chatmanBrainpowerLevel.removeClass('hidden').html(dataObj.Level);
        }, 2400);
    }
}

ChatmanBrainpower.prototype.bindUI = function() {
    // TODO: make commands execution general!!!
    this.control.find('.newChitChatButton')
                               .click({
                                   controlName: this.name
                               },
                               function(e) {
                                   if (e.button == 0) {
                                       executeCommand(e.data.controlName, 'NavigateChitChatInfo', '')
                                   }
                               });

    this.control.find('.newWordButton')
                           .click({
                               controlName: this.name
                           },
                           function(e) {
                               if (e.button == 0) {
                                   executeCommand(e.data.controlName, 'NavigateMoodWords', '')
                               }
                           });

    this.control.find('.shareButton')
                       .click({
                           controlName: this.name
                       },
                       function(e) {
                           if (e.button == 0) {
                               var popupPage = 'SharingWithFriendsPopup.html';

                               //<!--END REMOVE-->

                               var position = {
                                   offsetX: 520,
                                   offsetY: 238,
                                   dock: { top: true, left: true }
                               };
                               window.top.Navigation.showPopup(popupPage, position);
                           }
                       });

    this.control.find('.newQuestionsButton')
                   .click({
                       controlName: this.name
                   },
                   function(e) {
                       if (e.button == 0) {
                           executeCommand(e.data.controlName, 'NavigateQuestion', '')
                       }
                   });

    /*  Image, both lines of text and on the bars + texts click commmand */
    this.control.find('.brainpowerImageContainer, .levelText, .scoreText, .scoreTextInstructions, .horizontalBar, .chatmanBrainpowerBottom .simpleTextContainer')
        .click({
            controlName: this.name
        }, function(e) {
            executeCommand(e.data.controlName, 'BrainPowerClicked', '')
        });
}
