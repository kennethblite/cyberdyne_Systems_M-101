// inherite from Base Control
extend(MoodItem, BaseControl);
MoodItem.templateId = "#moodItemTemplate";

function MoodItem(container){
    MoodItem.superclass.constructor.apply(this, arguments);

   this.control = null;
    this.id = null;
}

/* Static variables */
MoodItem.width = 132;
MoodItem.height = 132;

MoodItem.prototype.bind = function(dataObj) {
    MoodItem.superclass.bind.call(this, dataObj, BindType.Append);
}

MoodItem.prototype.init = function(dataObj) {
    this.id = dataObj.Id;
}

/*
 * implementation of AutoScrollingList item interface
 */
MoodItem.prototype.select = function(){
   this.control.children('.moodImage').css({
        webkitAnimationName: 'moodIconSelect',
        webkitAnimationDuration: '0.8s',
        webkitTransform: 'scale(1.2)'
    });
}

MoodItem.prototype.unselect = function(){
   this.control.children('.moodImage').css({
        webkitAnimationName: '',
        webkitAnimationDuration: '',
        webkitTransform: 'scale(1)'
    });
}

MoodItem.prototype.getScrollWidth = function(){
    return ( parseInt(this.moodIconContainer.css('width')) + parseInt(this.moodIconContainer.css('margin-left'))
           + parseInt(this.moodIconContainer.css('margin-right')) );  
}

MoodItem.prototype.getName = function(){
    return this.control.find('.moodName').html();
}

MoodItem.prototype.setClickCallback = function(callback){
    var moodIcon = this;

   this.control.click(function(e){
        if (e.button == 0) {
            callback(moodIcon);
        }
    });
}
