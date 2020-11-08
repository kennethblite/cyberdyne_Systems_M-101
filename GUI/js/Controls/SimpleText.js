// inherite from Base Control
extend(SimpleText, BaseControl);
SimpleText.templateId = "#simpleTextTemplate";

/* Function-constructor for simlpe text objects */
function SimpleText(container, settings){
    SimpleText.superclass.constructor.apply(this, arguments);
        
    this.settings = null;
    if (settings) {
        this.settings = settings; // addional css rules for container
    }
}

SimpleText.prototype.init = function(dataObj){
    // apply addional settings to container passed to constructor
    this.control.css(this.settings);
    this.settings = null;
    
    this.setText(dataObj.Text);
}

SimpleText.prototype.setText = function(text){
    this.control.html(text);
}
