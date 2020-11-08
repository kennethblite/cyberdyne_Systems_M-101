/*
* Selectable Image
*/
// inherite from Base Control
extend(ColorRect, BaseControl);
ColorRect.templateId = "#colorRectTemplate";

function ColorRect(container){
    ColorRect.superclass.constructor.apply(this, arguments);
    
    this.colorShemeIndex = null;
}

ColorRect.prototype.init = function(dataObject){
    // save color sheme
    this.colorShemeIndex = dataObject.SchemeIndex;
}
ColorRect.prototype.getSchemeIndex = function(){
    return this.colorShemeIndex;
}

ColorRect.prototype.setClickCallback = function(callback){
    var colorRect = this;

    this.control.click(function(e){
        if (e.button == 0) {
            callback(colorRect);
        }
    });
}
