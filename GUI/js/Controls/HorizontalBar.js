// inherite from Base Control
extend(HorizontalBar, BaseControl);
HorizontalBar.templateId = "#horizontalBarTemplate";

function HorizontalBar(container){
    HorizontalBar.superclass.constructor.apply(this, arguments);
    
    this.barLevel = null;
    this.maxHeight = 0;
    this.level = 0;
    this.levelCount = 0;
}

HorizontalBar.prototype.init = function(dataObj){       
    this.barLevel = this.control.children('.barLevel');    
    this.levelCount = dataObj.LevelCount;
    this.maxHeight = parseInt(this.barLevel.css('max-width'));
    this.setLevel(dataObj.Level);
}
    
HorizontalBar.prototype.setLevel = function(barLevel){
    this.barLevel.css({
        width: (barLevel / this.levelCount) * this.maxHeight,
        backgroundColor: LevelColor.getColor(barLevel, this.levelCount)
   });
}
