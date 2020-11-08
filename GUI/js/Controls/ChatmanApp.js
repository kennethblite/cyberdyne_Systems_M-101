// inherite from Base Control
extend(ChatmanApp, BaseControl);
ChatmanApp.templateId = "#chatmanAppTemplate";

function ChatmanApp(container){
    ChatmanApp.superclass.constructor.apply(this, arguments);
    this.id = null;
}

ChatmanApp.prototype.bind = function(dataObj, addMode) {    
    var bindType = BindType.Append;
    if (addMode == 'rebind') {
        bindType = BindType.UseRebind;
    }

    ChatmanApp.superclass.bind.call(this, dataObj, bindType);
}

ChatmanApp.prototype.init = function(dataObj) {    
    if (dataObj.AppIsLoaded != true) {
        this.control.addClass('disabled');
    }

    this.id = dataObj.Id;
}

ChatmanApp.prototype.bindUI = function(){
    var chatmanApp = this;

    this.control.mouseenter(function(){
        $(this).find('.closeButton').fadeIn(100);
    })
    .mouseleave(function(){
        $(this).find('.closeButton').fadeOut(100);
    })
    .click(function(e){
        if (e.button == 0) {
            executeCommand('ChatmanApp', 'AppRun', chatmanApp.id);
        }
    });

    this.control.find('.closeButton').click(function(e) { 
        if (e.button == 0) {
            executeCommand('ChatmanApp', 'DeleteApp', chatmanApp.id);
            e.stopPropagation();
        }
    })
}

ChatmanApp.prototype.destroy = function(){
    this.control.remove();
}
