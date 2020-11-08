// inherite from Base Control
extend(ChatmanName, BaseControl);
ChatmanName.templateId = "#chatmanNameTemplate";

function ChatmanName(container) {
    ChatmanName.superclass.constructor.apply(this, arguments);
    
    this.chatmanName = null;
}

ChatmanName.prototype.init = function(dataObj){
    this.chatmanName = this.control.children('.chatmanName');
}

ChatmanName.prototype.setName =  function(name){
    this.chatmanName.text(name);
}
