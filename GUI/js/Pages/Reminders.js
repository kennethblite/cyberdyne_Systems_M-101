/*
* Reminders page type declaration
*/
// inherite from Base Control
extend(RemindersPage, BasePage);

function RemindersPage() {
    RemindersPage.superclass.constructor.apply(this, arguments);
    this.name = 'Reminders';
}
 
RemindersPage.prototype.bindUI = function(){
    RemindersPage.superclass.bindUI.apply(this, arguments);
    
    var laterHeading = $('#laterHeading');
    
    document.getElementById('laterAreaWrapper').onscroll = function(){
        if (this.scrollTop - 31 >= laterHeading.position().top) {
            $('#laterHeadingAbsPos').show();
            laterHeading.css('z-index', 2);
            
        } else {
            $('#laterHeadingAbsPos').hide();
            laterHeading.css('z-index', 10);
        }
    }
}
    
RemindersPage.prototype.loadData = function(dataObj){
    var reminder;
    
    // bind Today list
    if (dataObj.TodayReminders) {
        $('#todayRemindersContainer').empty();
        
        for(var i = 0; i < dataObj.TodayReminders.length; i++) {
            
            reminder = new ReminderControl('#todayRemindersContainer');
            reminder.bind(dataObj.TodayReminders[i], true);
        }
    }
    
    // bind Tomorow list        
    if (dataObj.TomorowReminders) {
        $('#tomorowRemindersContainer').empty();
    
        for(var i = 0; i < dataObj.TomorowReminders.length; i++) {
            reminder = new ReminderControl('#tomorowRemindersContainer');
            reminder.bind(dataObj.TomorowReminders[i], true);
        }
    }
    
    // bind this week list   
    if (dataObj.ThisWeekReminders) {
        $('#thisWeekRemindersContainer').empty();
    
        for(var i = 0; i < dataObj.ThisWeekReminders.length; i++) {
            reminder = new ReminderControl('#thisWeekRemindersContainer');
            reminder.bind(dataObj.ThisWeekReminders[i], false);
        }
    }
    
    // bind later list     
    if (dataObj.LaterReminders) {
        $('#laterRemindersContainer').empty();
        
        for(var i = 0; i < dataObj.LaterReminders.length; i++) {
            reminder = new ReminderControl('#laterRemindersContainer');
            reminder.bind(dataObj.LaterReminders[i], false);
        }
    }
    
    $('#laterHeading').show();
    if (dataObj.LaterReminders.length == 0) {
        $('#laterHeading').hide();
    }
    
    // reset height of areas
    $('#todayArea, #tomorowArea').css({
        height: 'auto'
    });
    this.resize();
}
    
RemindersPage.prototype.resize = function(){
    var todayArea =  $('#todayArea');
    var tomorrowArea = $('#tomorowArea');
    
    // set area to heights not less then 173px
    var spaceAtBottom = 7;
    var topMaxHeight = Math.max( todayArea.height(), tomorrowArea.height() );
    if (topMaxHeight < 173) {
        topMaxHeight = 173;
    }
    
    tomorrowArea.height( topMaxHeight + spaceAtBottom );
    todayArea.height( topMaxHeight + spaceAtBottom );
    
    // set todayArea and tomorrowArea container height to max height of them        
    $('#topPartWrap').height(topMaxHeight + parseInt( todayArea.css('padding-top')) + parseInt( todayArea.css('padding-bottom')) + spaceAtBottom );          
    
    // set height to laterArea
    var laterArea = $('#laterArea');
    laterArea.height(laterArea.height() + ($('#remindersMain').height() - laterArea.height() - laterArea.position().top - 14)); // constant just to fit good, depends on paddings
}

var Page = new RemindersPage();
