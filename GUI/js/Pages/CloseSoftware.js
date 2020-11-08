/*
* About page type declaration
*/
// inherite from Base Control
extend(CloseSoftwarePopup, BasePopup);

function CloseSoftwarePopup() {
    CloseSoftwarePopup.superclass.constructor.apply(this, arguments);
    this.name = 'CloseSoftwarePopup';
}

var Page = new CloseSoftwarePopup();
