/*
* Welcome page type declaration
*/
// inherite from Base Page
extend(WelcomePage, BasePage);

function WelcomePage() {
    WelcomePage.superclass.constructor.apply(this, arguments);
    this.name = 'Welcome';

    this.myChatmanLinkAnim = null;
    this.textChangeInterval = null;
    this.exclImageAnim = null;
    this.isRegistered = true;
}

WelcomePage.prototype.bindUI = function() {
    WelcomePage.superclass.bindUI.call(this);
}

WelcomePage.prototype.createControls = function() {
    this.controls.registerMessageControl = new RegisterMessage('#registerMessageControl', 'registerMessageControl');
}

WelcomePage.prototype.bindInternalControls = function() {        
}

WelcomePage.prototype.loadData = function(dataObj) {
    if (!dataObj.IsRegistered) {
        this.showRegisterWarning();
    } else {
        this.hideRegisterWarning();
    }

    this.isRegistered = dataObj.IsRegistered;

    this.controls.registerMessageControl.setNotNowButtonClickCallback(function() {
        Page.hideRegisterWarning();
    });
}

WelcomePage.prototype.showRegisterWarning = function() {
    this.controls.registerMessageControl.show();
    $('#registrationPanel').show();
}

WelcomePage.prototype.hideRegisterWarning = function() {
    this.controls.registerMessageControl.hide();
    $('#registrationPanel').hide();
}

WelcomePage.prototype.reload = function() {
    if (!this.isRegistered) {
        this.showRegisterWarning();
    }
}

var Page = new WelcomePage();
