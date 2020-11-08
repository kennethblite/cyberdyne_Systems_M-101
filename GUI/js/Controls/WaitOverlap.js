// inherite from Base Control
extend(WaitOverlap, BaseControl);
WaitOverlap.templateId = "#waitOverlapTemplate";

/* Function-constructor for simlpe text objects */
function WaitOverlap(container){
    this.container = 'body';    
    WaitOverlap.superclass.constructor.apply(this, arguments);
    this.eventNames = ['show', 'hide'];
}

WaitOverlap.prototype.bind = function(dataObj) {
    WaitOverlap.superclass.bind.call(this, dataObj, BindType.Append);
}

WaitOverlap.prototype.show = function(showMask) {
    this.control.show();

    if (typeof (showMask) == "undefined") {
        showMask = true;
    }

    if (!showMask) {
        this.control.find('.backgroundOverlap').css('display', 'none');
    } else {
        this.control.find('.backgroundOverlap').css('display', 'block');
    }


    this.invokeCallbacks('show');
}

WaitOverlap.prototype.hide = function() {
    var waitControl = this;

    this.control.hide();
    waitControl.invokeCallbacks('hide');    
}
