// inherite from Base Control
extend(TextScroller, BaseControl);
TextScroller.templateId = "#textScrollerTemplate";

function TextScroller(container, name) {
    TextScroller.superclass.constructor.apply(this, arguments);
    
    this.control = null;
    this.scrollLength = 0;
    this.timePerPixel = 20;    
}

TextScroller.prototype.init = function(dataObj) {
    this.scrollLength = this.control.find('.textContainer').height();
    
    // move text container down, to be not visible
    var textTop = this.control.height();
    this.control.find('.textContainer').css('top', textTop);
}

TextScroller.prototype.start = function(time) {    
    
    var textContainer = this.control.find('.textContainer');
    var textScrollerHeight = this.control.height();
    
    // calculate animation time
    var animationSeconds = textScrollerHeight > this.scrollLength ? 0 : (time - 300) / 1000;
    
    // calculate final text position        
    var textTop = Math.min(textScrollerHeight - this.scrollLength, 0) // constant to look good;
    var lineHeight = parseInt( textContainer.css('line-height') );
    
    if (textTop != 0) {
        textTop = textTop - textTop % lineHeight - lineHeight;
    }
    
    // set position and time
    textContainer.css({
            webkitTransition: 'top ' + animationSeconds + 's linear',
            top: textTop
    });
}

TextScroller.prototype.destroy = function() {
    this.control.remove();
}
