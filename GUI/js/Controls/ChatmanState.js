// inherite from Base Control
extend(ChatmanState, BaseControl);
ChatmanState.templateId = "#chatmanStateTemplate";

function ChatmanState(container){
    ChatmanState.superclass.constructor.apply(this, arguments);
    
    this.blinkTimer = null;
    this.isVisible = true;    
    this.blickFunc = null;
}

ChatmanState.prototype.init = function(dataObj) {
    var chatmanState = this;

    this.blickFunc = function() {
        return chatmanState.blink();
    }

    this.setState(dataObj.IsOn);
}

ChatmanState.prototype.bindUI = function(){
    // passing event for dragging
    this.control.mousedown(function(e) {
          var event = jQuery.Event('mousedown');
          event.button = 0;
          
          $(this).parents('#topPanel').trigger(event);
                    
          e.stopPropagation();
    });
}

ChatmanState.prototype.setState = function(isOn){
    if (this.blinkTimer){
        clearInterval(this.blinkTimer);
    }
    
    if (isOn) {
        this.control.css('background', 'url("images/chatmanStateGreenDot.png")');
        this.control.css('visibility', 'visible');        
    } else {
        this.control.css('background', 'url("images/chatmanStateRedDot.png")');
        this.blinkTimer = setInterval(this.blickFunc, 500);
    }
}

ChatmanState.prototype.blink = function(){
    if (this.isVisible) {
        this.control.css('visibility', 'hidden');
        this.isVisible = false;
    } else {
        this.control.css('visibility', 'visible');
        this.isVisible = true;
    }
}
