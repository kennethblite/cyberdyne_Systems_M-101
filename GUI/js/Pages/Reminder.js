/*
 * ReminderPopup type declaration
 */
// inherite from Base Page
extend(ReminderPopup, BasePage);

function ReminderPopup() {
    ReminderPopup.superclass.constructor.apply(this, arguments);
    this.name = 'ReminderPopup';    
}

ReminderPopup.prototype.bindUI = function() {
    ReminderPopup.superclass.bindUI.apply(this, arguments);

    $('#remindArea').click(function(e) {
        if (e.button == 0) {
            executeCommand('', 'RepeatReminder', '');
        }
    });

    // dragging        
    $('[dragElement]').mousedown(function(e) {
        if (e.target == this) {
            executeCommand('', 'DragInitiated', '');
        }
        e.stopPropagation();
    });
}

ReminderPopup.prototype.loadData = function(dataObj) {
    if (dataObj.NumberOfPendingReminders < 1) {
        $('#cancelButton').hide();
    }
    else {
        $('#cancelButton').show();
    }

    $('#remindText').html(dataObj.Description);
    $('#remindImage').css({ backgroundImage: "url('images/ReminderPage/100x100/" + dataObj.ImageId + ".png')" });

    // set Date
    var dateTime = new Date(timeFromUTC(dataObj.ExactDateTime));
    var formatedDate = $.datepicker.formatDate('DD-MM-yy', dateTime);
    var dateStrings = formatedDate.split('-');

    $('#dayString').html(dateStrings[0] + ', ' + dateTime.getHours() + ':' + (dateTime.getMinutes() > 9 ? dateTime.getMinutes() : '0' + dateTime.getMinutes()));
    $('#yearString').html(dateStrings[1] + ' ' + getDayString(dateTime.getDate()) + ' ' + dateStrings[2]);
    dataObj.IsDay = dateTime.getHours() >= 12 ? false : true;
    $('#timeOfDayImage')[0].src = 'images/' + (dataObj.IsDay ? 'sun.png' : 'moon.png');

    this.centerDescriptionVertically();
}

ReminderPopup.prototype.setPosition = function(position) {

}

ReminderPopup.prototype.centerDescriptionVertically = function() {
    // center text vertically
    var remindText = $('#remindText');
    remindText.css({
        top: remindText.parent().height() / 2 - remindText.height() / 2
    });
}

var Page = new ReminderPopup();    
