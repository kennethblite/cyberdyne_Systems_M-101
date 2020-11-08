function ActionPopup(container, name){
    this.container = container;
    this.name = name;
    
    this.actionPopupList = null;
}

ActionPopup.prototype.bind = function(dataObj){
    this.actionPopupList = $('#actionPopupTemplate').tmpl(dataObj);
    
    $(this.container).empty()
                     .append(this.actionPopupList);
}
