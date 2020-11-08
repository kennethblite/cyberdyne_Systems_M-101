/*
* User Callout type definition
*/

// inherite from Base Control
extend(UserCallout, BaseControl);
UserCallout.templateId = "#userCallOutTemplate";

function UserCallout(container) {
    UserCallout.superclass.constructor.apply(this, arguments);
    this.messageContainer = null;
}

UserCallout.prototype.bind = function(dataObj) {
    UserCallout.superclass.bind.call(this, dataObj, BindType.Append);
}

UserCallout.prototype.init = function(dataObj) {
    // setting the user callout   
    this.messageContainer = this.control.children('.messageContainer');
    this.messageContainer.html(dataObj.Message);
}

UserCallout.prototype.destroy = function(){
    this.messageContainer.parent().remove();
}

/*
 * Chatman Callout type definition
 */

// inherite from Base Control
extend(ChatmanCallout, BaseControl);
ChatmanCallout.templateId = "#chatmanCallOutTemplate";

function ChatmanCallout(container){
    ChatmanCallout.superclass.constructor.apply(this, arguments);    
    this.calloutContainer = null;
    this.actionButton = null;
    this.id = null;
    this.returnedData = '';    
}

ChatmanCallout.prototype.bind = function(dataObj) {
    ChatmanCallout.superclass._bind.call(this, dataObj, BindType.Append);
    this.calloutContainer = this.control;

    /*
    * constructing different types of chatmanCallout
    */
    if (dataObj.Type == 'ActionCallout') {
        this.actionButton = new ActionButton(this.calloutContainer.find('.messageContainer'));
        this.actionButton.bind(dataObj.ActionButton);
        this.actionButton.setMoodShow(true);
        this.actionButton.setPosition('', 2);
    }
    else if (dataObj.Type == 'AddWordCallout') {
        this.returnedData = dataObj.UserText;
        //this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">'  + ControlsResourceStrings[dataObj.Type + '1'] + '</span><div cmd="ShowAddWordToMoodPopup" class="pushButtonBlue calloutCmd addWordButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div>');
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;"><span style="opacity:0;">s</span><br />' + ControlsResourceStrings[dataObj.Type + '1'] + '<br /><span style="opacity:0;">s</span></span> <div class="calloutsButtonsContainer"><div cmd="ShowAddWordToMoodPopup" class="pushButtonBlue calloutCmd upButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div><div cmd="ShowTeachQuestionPopup" class="pushButtonBlue calloutCmd downButton">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div></div>')
    }
    else if (dataObj.Type == 'AddChitChatCallout') {
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">' + ControlsResourceStrings[dataObj.Type + '1'] + '</span><div cmd="ShowAddChitChat" class="pushButtonBlue calloutCmd addChitChatButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div>');
        this.returnedData = JSON.stringify({ MoodId: dataObj.MoodId });
    }
    else if (dataObj.Type == 'AnsweredQuestionCallout') {
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">' + dataObj.Answer + '</span><div cmd="EditAnswer" class="calloutCmd editAnswerButton"></div><div cmd="DeleteAnswer" class="calloutCmd deleteAnswerButton"></div>');
        this.returnedData = JSON.stringify({ ScenarioId: dataObj.ScenarioId });
    }
    else if (dataObj.Type == 'TextCallout') {
        var msgContainer = this.calloutContainer.children('.messageContainer');
        msgContainer.html(dataObj.ChatmanText);
        msgContainer.css('padding-right', '10px');

        if (dataObj.Color) {
            msgContainer.css('color', dataObj.Color);
        }
    }
    else if (dataObj.Type == 'GoCallout') {
        var buttonText = (dataObj.ButtonText == "" || dataObj.ButtonText == undefined) ? ControlsResourceStrings[dataObj.Type] : dataObj.ButtonText;
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">' + dataObj.GoText + '</span><div cmd="CalloutGoButtonClicked" class="pushButtonBlue calloutCmd goButton">' + buttonText + '</div>')

        var returnedDataObj = {
            Type: dataObj.Type,
            Activity: dataObj.Activity,
            Data: dataObj.Data,
            Data1: dataObj.Data1
        };

        this.returnedData = JSON.stringify(returnedDataObj);
    }
    else if (dataObj.Type == 'SearchOrTeachCallout') {
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;"><span style="opacity:0;">s</span><br />' + ControlsResourceStrings[dataObj.Type + '1'] + '<br /><span style="opacity:0;">s</span></span> <div class="calloutsButtonsContainer"><div cmd="SearchWeb" class="pushButtonBlue calloutCmd upButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div><div cmd="TeachAnswer" class="pushButtonBlue calloutCmd downButton">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div></div>');

        this.returnedData = JSON.stringify(dataObj);
    }
    else if (dataObj.Type == 'UserProfileOrTeachCallout') {
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;"><span style="opacity:0;">s</span><br />' + ControlsResourceStrings[dataObj.Type + '1'] + '<br /><span style="opacity:0;">s</span></span> <div class="calloutsButtonsContainer"><div cmd="UserProfile" class="pushButtonBlue calloutCmd upButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div><div cmd="TeachAnswer" class="pushButtonBlue calloutCmd downButton">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div></div>');

        this.returnedData = JSON.stringify(dataObj);
    }
    else if (dataObj.Type == 'TeachCallout') {
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">' + ControlsResourceStrings[dataObj.Type + '1'] + '</span><div class="calloutsButtonsContainer"><div cmd="TeachAnswer" class="pushButtonBlue calloutCmd upButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div></div>');

        this.returnedData = JSON.stringify(dataObj);
    }
    else if (dataObj.Type == 'YesNoQuestionCallout') {
        //todo: implement commands for buttons
        this.calloutContainer.children('.messageContainer').html('<span style="color: #0200ff;">' + ControlsResourceStrings[dataObj.Type + ''] + '</span><div class="calloutsButtonsContainer"><div cmd="" class="pushButtonBlue calloutCmd noButton">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div><div cmd="" class="pushButtonBlue calloutCmd yesButton">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div></div>');
    }
    else if (dataObj.Type == 'CinemaAndGamesCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateVideosWeb" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '1'] + '</div><div cmd="NavigateChatmanGamesWeb" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div></div>');
    }
    else if (dataObj.Type == 'RegistrationCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateRegistration" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type] + '</div></div>');
    }
    else if (dataObj.Type == 'PersonalitiesCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateNewPerosnalities" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type] + '</div></div>');
    }
    else if (dataObj.Type == 'DownloadChitChatCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateDownloadChitChatsWeb" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type] + '</div></div>');
    }
    else if (dataObj.Type == 'ShowAllTeachCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateChitChatInfo" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '1'] + '</div><div cmd="NavigateMoodWords" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div><div cmd="ShowTeachQuestionPopup" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div></div>');
    }
    else if (dataObj.Type == 'HomeworkOrGamesOrCinemaCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateHomeworkHelp" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '1'] + '</div><div cmd="NavigateChatmanGamesWeb" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '2'] + '</div><div cmd="NavigateVideosWeb" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '3'] + '</div></div>');
    }
    else if (dataObj.Type == 'GoToHomeworkCallout') {
        this.calloutContainer.children('.messageContainer').html('<div class="proactiveCalloutText">' + dataObj.Text + '</div><div class="proactiveCalloutsButtonsContainer"><div cmd="NavigateHomeworkHelp" class="pushButtonBlue calloutCmd">' + ControlsResourceStrings[dataObj.Type + '1'] + '</div></div>');
    }

    this.animateButtons();

    this.bindUI();
}

ChatmanCallout.prototype.bindUI = function(){
    var callout = this;

    this.calloutContainer    
        .find('.calloutCmd').click(function(e){
            if (e.button == 0) {
                executeCommand('', $(this).attr('cmd'), callout.returnedData);
            }
        });
}

ChatmanCallout.prototype.setMarginTop = function(marginTop){
    this.calloutContainer.css('margin-top', marginTop);
}

ChatmanCallout.prototype.destroy = function(){
    this.calloutContainer.remove();
}

// animate buttons like in intro
ChatmanCallout.prototype.animateButtons = function() {
    var buttons = this.calloutContainer.find('.pushButtonBlue');
    var delay = 100;
    var k = 0;

    var animFunc = function(delay1) {
        for (var i = 0; i < buttons.length; i++) {
            setTimeout(function() {
                buttons.eq(k).css({
                    webkitAnimation: 'buttonScaling 0.4s linear'
                });
                ++k;
            }, delay1);

            delay1 += 200;
        }

        setTimeout(function() {
            buttons.css('webkitAnimation', 'none');
            k = 0;
        }, delay1);

        delay1 += 100;
        var blinkInterval;
        setTimeout(function() {
            blinkInterval = setInterval(function() {
                buttons.toggleClass('hidden');
            }, 200);
        }, delay1);

        delay1 += 1800;
        setTimeout(function() {
            clearInterval(blinkInterval);
            buttons.removeClass('hidden');
        }, delay1);

        return delay1;
    }

    delay = animFunc(delay);
    animFunc(delay + 500);
}
