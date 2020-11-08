/*
* ChitChatInfo page type declaration
*/
// inherite from Base Control
extend(PersonalitiesPage, BasePage);

function PersonalitiesPage(){
    PersonalitiesPage.superclass.constructor.apply(this, arguments);

    this.name = 'Personalities';
}
PersonalitiesPage.prototype.createControls = function() {
    // personality area controls
    var personalityList = 'personalityList';
    this.controls[personalityList] = new AutoScrollingList('#personalityListControl', personalityList);   
  
    // smarts area contols
    var chatmanBrainpower = 'chatmanBrainpower';
    this.controls.chatmanBrainpower = new ChatmanBrainpower('#chatmanBrainpowerControl', chatmanBrainpower);
    
    // tab area controls
    var actionListControl = 'actionListControl';
    this.controls.actionListControl = new ActionList('#actionListControl', actionListControl);
    var  personalityCountText = 'personalityCountText';
    this.controls.personalityCountText = new SimpleText('#personalityCountText', personalityCountText);
    
    // action Cloud initalization
    ActionCloud.init();
    InfoMenu.init();
} 
    
PersonalitiesPage.prototype.setActionBrowserHeadingText = function(text) {
    $('#actionBrowserHeadingText').html(text);
}

var Page = new PersonalitiesPage();
