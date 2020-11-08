/*
 * Base popup type declaration
 * It si base for all popups in the system
 */
extend(BasePopup, BasePage);

function BasePopup() {
    BasePopup.superclass.constructor.apply(this, arguments);
}

BasePopup.prototype.bindUI = function() {
    BasePopup.superclass.bindUI.apply(this, arguments);

    // enter keypress events for save or ok buttons in popup
    if ($('#saveButton').length != 0 || $('#okButton').length != 0) {
      
        $(document.body).keypress(function(e) {
            if (e.keyCode == 13) {
                // sent click event for this button
                var event = jQuery.Event("click");
                event.button = 0;

                $('#saveButton').trigger(event);
                $('#okButton').trigger(event);
            }
        });
    }
}

/*
 * Each popup has popupBox control
 */ 
BasePopup.prototype.createControls = function() {
    BasePopup.superclass.createControls.apply(this, arguments);
    
    this.controls.popupBox = new PopupBox('#popupContainer', 'popupBox');
}

BasePopup.prototype.bindInternalControls = function() {
    BasePopup.superclass.createControls.apply(this, arguments);
    
    this.controls.popupBox.bind();
}
