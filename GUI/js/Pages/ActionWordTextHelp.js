/*
* ActionWordTextHelpPopup page type declaration
*/
// inherite from Base Control
extend(ActionWordTextHelpPopup, BasePopup);

function ActionWordTextHelpPopup() {
    ActionWordTextHelpPopup.superclass.constructor.apply(this, arguments);
    this.name = 'ActionWordTextHelpPopup';
}
 
// bind controls that don't need dataObj for it
ActionWordTextHelpPopup.prototype.bindInternalControls = function(){
    ActionWordTextHelpPopup.superclass.bindInternalControls.apply(this, arguments);
    
    this.controls.popupBox.closeCallback = function() {
        window.top.Navigation.hidePopup();
    }
}  
   
    
ActionWordTextHelpPopup.prototype.setPosition = function(position) {
    this.controls.popupBox.setPosition(position.offsetX, position.offsetY, position.dock);
}

var Page = new ActionWordTextHelpPopup();
