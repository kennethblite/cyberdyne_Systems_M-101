/*
* About page type declaration
*/
// inherite from Base Control
extend(ActionSharePricePopup, BasePopup);

function ActionSharePricePopup() {
    ActionSharePricePopup.superclass.constructor.apply(this, arguments);
    this.name = 'ActionSharePricePopup';
}   
    
ActionSharePricePopup.prototype.bindUI = function(){        
    ActionSharePricePopup.superclass.bindUI.apply(this, arguments);
    $('#actionSharePriceTextBox').focus();
},
 
// retuns data gathered from page in JSON
ActionSharePricePopup.prototype.getUserInput = function() {       
    return $('#actionSharePriceTextBox').val();
}

var Page = new ActionSharePricePopup();
