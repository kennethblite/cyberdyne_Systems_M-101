// inherite from Base Control
extend(ReminderControl, BaseControl);
ReminderControl.templateId = "#reminderControlTemplate";

/* Function-constructor for simlpe text objects */
function ReminderControl(container, name){
    ReminderControl.superclass.constructor.apply(this, arguments);
            
    this.id = null;
}

ReminderControl.prototype.bind = function(dataObj, shortVersion){
    // formate Date    
    var date = new Date( timeFromUTC(dataObj.ExactDateTime) );
    dataObj.Date = date.toLocaleDateString();
    dataObj.Time = date.getHours() + ':' + (date.getMinutes() <= 9 ? '0' + date.getMinutes() : date.getMinutes());
    dataObj.IsDay = (date.getHours() - 12) > 0 ? false: true;
    dataObj.RecurranceType = ControlsResourceStrings[ ReminderRecurranceTypes[dataObj.RecurranceType] ];

    // bind
    ReminderControl.superclass.bind.call(this, dataObj, BindType.Append);
    
    if (shortVersion) {
        this.control.find('.remindDate').hide();
    }
}

ReminderControl.prototype.init = function(dataObj) {
    this.id = dataObj.Id;
}

ReminderControl.prototype.bindUI = function(){
    var reminderControl = this;
    
    this.control.find('.remindDescription')
        .mouseenter(function(e){
            if ( e.fromElement != $(this).siblings('reminderCloud')[0] ) {
                $(this).siblings('.reminderCloud').addClass('reminderCloudShow');
            }
        })
        .mouseleave(function(e){
            if ( e.toElement !=  $(this).siblings('.reminderCloud')[0] ) {
                $(this).siblings('.reminderCloud').removeClass('reminderCloudShow');
            }
        });
     
    this.control.find('.reminderCloud')
        .mouseleave(function(e) {
            if ( e.toElement != $(this).siblings('.remindDescription')[0] ) {
                $(this).removeClass('reminderCloudShow');
            }
        });
    
    this.control.find('.remindEdit')
        .click(function(e){
            if (e.button == 0) {
                executeCommand('ReminderControl' ,'ReminderEditClicked', reminderControl.id);
            }
        });
        
    this.control.find('.remindDelete')
        .click(function(e){
            if (e.button == 0) {
                executeCommand('ReminderControl' ,'ReminderDeleteClicked', reminderControl.id);
            }
        });
}


var ReminderRecurranceTypes = [
    "RemindersOneTimeOnly",
    "RemindersDays",
    "RemindersWeeks",
    "RemindersMonths",
    "RemindersYears"
]
