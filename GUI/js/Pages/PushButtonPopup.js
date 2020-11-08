/*
* PushButton page type declaration
*/
// inherite from Base Popup
extend(PushButtonPopup, BasePopup);

function PushButtonPopup() {
    PushButtonPopup.superclass.constructor.apply(this, arguments);
    this.name = 'PushButton';
}   
       
PushButtonPopup.prototype.loadData = function(dataObj) {
    $('.checked').removeClass('checked');
    
    if (dataObj.Mute) {
        $('#muteCheckMark').addClass('checked');
    } 
    if (dataObj.SurpriseMe) {
        $('#surpriseCheckMark').addClass('checked');
    }
}


PushButtonPopup.prototype.bindUI = function() {
    PushButtonPopup.superclass.bindUI.apply(this, arguments);

    $('.pushButtonRed').click(function(e) {
        if (e.button == 0) {
            $('.checked').removeClass('checked');

            $(this).siblings('.checkMark').addClass('checked');
        }
    });
}

PushButtonPopup.prototype.getUserInputJSON = function() {
    var dataObj = {};
    
    if ($('#muteCheckMark').hasClass('checked')) {
        dataObj.Mute = true;
        dataObj.SurpriseMe = false;
    } else {
        dataObj.Mute = false;
        dataObj.SurpriseMe = true;
    }
    
    return JSON.stringify(dataObj);
}

var Page = new PushButtonPopup();
