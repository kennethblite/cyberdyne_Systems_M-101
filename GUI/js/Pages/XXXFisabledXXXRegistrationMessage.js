// inherite from Base Control
extend(RegistrationMessage, BasePopup);

function RegistrationMessage() {
    RegistrationMessage.superclass.constructor.apply(this, arguments);
    this.name = 'RegistrationMessage';
}

RegistrationMessage.prototype.createControls = function() {
    RegistrationMessage.superclass.createControls.apply(this, arguments);

    this.controls.registerMessageControl = new RegisterMessage('#registerMessageControl', 'registerMessageControl');
}

// bind controls that don't need dataObj for it
RegistrationMessage.prototype.bindInternalControls = function() {
    RegistrationMessage.superclass.bindInternalControls.apply(this, arguments);    
    
    Page.controls.registerMessageControl.bind();
}

RegistrationMessage.prototype.loadData = function() {
    Page.controls.registerMessageControl.show();
    
    this.controls.registerMessageControl.setNotNowButtonClickCallback(function() {
        Page.controls.popupBox.closePopupHandler();
    });

    this.controls.registerMessageControl.setRegisterButtonClickCallback(function() {
        Page.controls.popupBox.closePopupHandler();
    });
}

var Page = new RegistrationMessage();
