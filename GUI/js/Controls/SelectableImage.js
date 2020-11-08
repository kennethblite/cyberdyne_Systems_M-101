/*
 * Selectable Image
 */
// inherite from Base Control
extend(SelectableImage, BaseControl);
SelectableImage.templateId = "#selectableImageTemplate";

function SelectableImage(container){
    SelectableImage.superclass.constructor.apply(this, arguments);

    this.imageName = null;
    this.id = null;
    
    this.isSelected = false;
}

/* Static variables */
SelectableImage.width = 97;
SelectableImage.height = 102;

SelectableImage.prototype.bind = function(dataObject){
    var bindType;
    if (dataObject.indexInContainer < $(this.container).children().length) {
        bindType = BindType.Insert;
    } else {
        bindType = BindType.Append;
    }

    SelectableImage.superclass.bind.call(this, dataObject, bindType, dataObject.indexInContainer);    
}

SelectableImage.prototype.init = function(dataObject) {
    this.imageName = dataObject.ImageName;

    // save id, given from C#
    this.id = dataObject.Id;
}

/*
 * Implementation of listItemInterface
 */
SelectableImage.prototype.select = function(){
    this.control.addClass('selectableImageSelected');
    
    this.isSelected = true;
}

SelectableImage.prototype.unselect = function(){
    this.control.removeClass('selectableImageSelected');
    
    this.isSelected = false;
}

SelectableImage.prototype.getScrollWidth = function(){
    
    return ( parseInt(this.control.css('width')) + parseInt(this.control.css('margin-left'))
            + parseInt(this.control.css('margin-right')) );  
}

SelectableImage.prototype.setClickCallback = function(callback){
    var selectableImage = this;

    this.control.click(function(e){
        if (e.button == 0) {
            callback(selectableImage);
        }
    });
}
