// inherite from Base Control
extend(PlayAround, BaseControl);
PlayAround.templateId = "#playAroundTemplate";

function PlayAround (container, name) {
    PlayAround.superclass.constructor.apply(this, arguments);
}
/* Static Variables */
PlayAround.itemsWidth = 80;
PlayAround.itemsHeight = 80;

PlayAround.prototype.init = function(dataObj) {
    var playAroundContainer = this.control;

    var playAroundContainerWidth = playAroundContainer.width();
    var playAroundContainerHeight = playAroundContainer.height();

    var topOffset = 0, leftOffset = 0, angle = 0;
    var top = -10, left = 0;
    var newItem;

    for (var i = 0; i < dataObj.ListElements.length; i++) {
        /*leftOffset = Math.round( (Math.random() - 0.5) * 25 );
        topOffset = Math.round( (Math.random() - 0.5) * 20 );
        angle = Math.round( (Math.random() - 0.5) * 80 );
        
        if (left + PlayAround.itemsWidth  * 5 / 8  > playAroundContainerWidth) {
        left = 0;
        top += PlayAround.itemsHeight * 7 / 8;
        }*/
        leftOffset = playAroundItemsAppearance[i].left;
        topOffset = playAroundItemsAppearance[i].top;
        angle = playAroundItemsAppearance[i].angle;

        var toolTip = dataObj.ListElements[i].ToolTip != null ? dataObj.ListElements[i].ToolTip : dataObj.ListElements[i].MoodName;
        var moodName = dataObj.ListElements[i].MoodName;
        newItem = $('<img class="playAroundMoodIcon" src="images/Moods/' +
                    moodName + '.png" style="left:' + (left + leftOffset) + 'px; top:' + (top + topOffset) + 'px;-webkit-transform:rotate(' + angle + 'deg);" width="' +
                    PlayAround.itemsWidth + '" height="' + PlayAround.itemsHeight + '" title="' + toolTip + '"/>');

        $(newItem).data('id', dataObj.ListElements[i].Id);
        playAroundContainer.append(newItem);

        /*left += PlayAround.itemsWidth * 7 / 8;*/
    }
}

PlayAround.prototype.bindUI = function() {
    $(this.container).find('.playAroundMoodIcon').click({
        playAroundName: this.name
    }, function(e){
            if (e.button == 0) {                
                
                $(this).addClass('playAroundItemClicked');
                
                var item = this;
                // remove spning animations
                var clearAnimations = function(){
                    $(item).removeClass('playAroundItemClicked');
                };
                setTimeout(clearAnimations, 1000);
                
                // call command when fly animation finishes
                var playAroundName = e.data.playAroundName;
                var moodIcon = this;
                
                setTimeout(function(){ 
                    executeCommand( playAroundName, 'MoodIconClicked', $(moodIcon).data('id') );
                }, 500);
            }
        });
     
    $(this.container).find("[title]").tipTip({
        defaultPosition: "top",
        stylingClass: 'tooltip',
        hasArrow: false
    });
    
} 

// array of positions for images in playAround control
var playAroundItemsAppearance = [
    {top: 10, left: 0, angle: 8},
    {top: 0, left: 65, angle: -10},
    {top: 10, left: 130, angle: 8},
    {top: 0, left: 195, angle: -10},
    {top: 10, left: 260, angle: 8},
    {top: 0, left: 325, angle: -10},
    {top: 10, left: 395, angle: 8},
    
    {top: 75, left: 0, angle: 8},
    {top: 65, left: 65, angle: -10},
    {top: 75, left: 130, angle: 8},
    {top: 65, left: 195, angle: -10},
    {top: 75, left: 260, angle: 8},
    {top: 65, left: 325, angle: -10},
    {top: 75, left: 395, angle: 8},
    
    {top: 135, left: 0, angle: 8},
    {top: 145, left: 65, angle: -10},
    {top: 135, left: 130, angle: 8},
    {top: 145, left: 195, angle: -10},
    {top: 135, left: 260, angle: 8},
    {top: 145, left: 325, angle: -10},    
    {top: 145, left: 395, angle: -10}     
];
