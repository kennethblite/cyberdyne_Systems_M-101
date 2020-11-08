/*
* About page type declaration
*/
// inherite from Base Control
extend(OptionsPopup, BasePopup);

function OptionsPopup() {
    OptionsPopup.superclass.constructor.apply(this, arguments);
    this.name = 'OptionsPopup';
}    
        
OptionsPopup.prototype.createControls = function(){
    OptionsPopup.superclass.createControls.apply(this, arguments);
    
    this.controls.timeSelector1 = new TimeSelector('#timeSelectorControl1', 'timeSelector1');
    this.controls.timeSelector2 = new TimeSelector('#timeSelectorControl2', 'timeSelector2');
}
    
// bind controls that don't need dataObj for it
OptionsPopup.prototype.bindInternalControls = function(){
    OptionsPopup.superclass.bindInternalControls.apply(this, arguments);
    
    this.controls.timeSelector1.bind();
    this.controls.timeSelector2.bind();
}
    
OptionsPopup.prototype.bindUI = function(){
    OptionsPopup.superclass.bindUI.apply(this, arguments);
    
    $('#runOnButton, #speakButton').click(function(e) {
        if (e.button == 0) {           
            $(this).siblings('.checkMark').toggleClass('checked');
        }
    });
}


OptionsPopup.prototype.loadData = function(dataObj) {

    $('#runOnCheckMark').addClass(dataObj.RunChatmanOnStartUp ? 'checked' : '');
    $('#speakCheckMark').addClass(dataObj.DontSpeakOnYourOwn ? 'checked' : '');

    this.controls.timeSelector1.setTime24({
        Hour: dataObj.DontProduceActionsStartHour,
        Minute: dataObj.DontProduceActionsStartMinute
    });

    this.controls.timeSelector2.setTime24({
        Hour: dataObj.DontProduceActionsEndHour,
        Minute: dataObj.DontProduceActionsEndMinute
    });
}

OptionsPopup.prototype.getUserInputJSON = function() {
    var dataObj = {};
    
    dataObj.DontSpeakOnYourOwn = $('#speakCheckMark').hasClass('checked');
    dataObj.RunChatmanOnStartUp = $('#runOnCheckMark').hasClass('checked');
    dataObj.DontProduceActionsStartHour = this.controls.timeSelector1.getTime().Hour;
    dataObj.DontProduceActionsStartMinute = this.controls.timeSelector1.getTime().Minute;
    dataObj.DontProduceActionsEndHour = this.controls.timeSelector2.getTime().Hour;;
    dataObj.DontProduceActionsEndMinute = this.controls.timeSelector2.getTime().Minute;
    
    
    return JSON.stringify(dataObj);
}

var Page = new OptionsPopup();
