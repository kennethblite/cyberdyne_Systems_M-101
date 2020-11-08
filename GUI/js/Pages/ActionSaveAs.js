/*
* About page type declaration
*/
// inherite from Base Control
extend(ActionSaveAsPopup, BasePopup);

function ActionSaveAsPopup() {
    ActionSaveAsPopup.superclass.constructor.apply(this, arguments);
    this.name = 'ActionSaveAsPopup';
}
    
ActionSaveAsPopup.prototype.createControls = function() {
    ActionSaveAsPopup.superclass.createControls.apply(this, arguments);
    
    controlName = 'singlePersonalitySelector';
    this.controls[controlName] = new AutoScrollingList('#singlePersonalitySelector', controlName);  
}
          
ActionSaveAsPopup.prototype.bindUI = function(){ 
    ActionSaveAsPopup.superclass.bindUI.apply(this, arguments);
    $('#newNameTextBox').focus();
}
    
// retuns data gathered from page in JSON
ActionSaveAsPopup.prototype.getUserInputJSON = function() {
    var chitChatData = {
        Name: $('#newNameTextBox').val()            
    }
    
    return JSON.stringify(chitChatData);
}

var Page = new ActionSaveAsPopup();
