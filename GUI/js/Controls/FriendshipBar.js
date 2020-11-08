// inherite from Base Control
extend(FriendShipBar, BaseControl);
FriendShipBar.templateId = "#friendshipBarTemplate";

function FriendShipBar(container, name){
    FriendShipBar.superclass.constructor.apply(this, arguments);
    
    this.friendshipBarLevel = null; // this is a Node
    this.maxHeight = 0;
    this.level = 0;
    this.levelCount = 0;
    
    this.wasTooltipSetted = false;
}

FriendShipBar.prototype.init = function(dataObj) {
    this.friendshipBarLevel = this.control.children('.friendshipBarLevel');

    this.levelCount = dataObj.LevelCount;
    this.maxHeight = parseInt(this.friendshipBarLevel.css('max-height'));

    this.setLevel(dataObj.Level);
    if (dataObj.TooltipText) {
        this.setTooltipText(dataObj.TooltipText);
    }

    // set triangles (up or down) on the top of level bar
    if (dataObj.LevelChangeDirection) {
        this.control.find('.triangle' + (dataObj.LevelChangeDirection > 0 ? ".up" : ".down")).show();
    } else {
        this.control.find('.triangle').hide();
    }

    if (dataObj.Level == dataObj.LevelCount || dataObj.Level == 0)
        this.control.find('.triangle').hide();
}

FriendShipBar.prototype.bindUI = function() {
    // passing event to its container for dragging
    this.friendshipBarLevel.parent().mousedown(function(e) {
          var event = jQuery.Event('mousedown');
          event.button = 0;
          
          $(this).parent().trigger(event);
                    
          e.stopPropagation();
    });

    this.friendshipBarLevel.parent().click(function() {
          executeCommand('friendshipBar', 'Clicked', '');
    });
    
    this.friendshipBarLevel.parent().tipTip({
        defaultPosition: 'right',
        exitDelay: 2000 ,
        click: function(){
            executeCommand('friendshipBar', 'Clicked', '');
        }        
    });
}

FriendShipBar.prototype.setLevel = function(level){
    this.level = level;
    
    this.friendshipBarLevel.css({
        height: (level / this.levelCount) * this.maxHeight + 'px',
        backgroundColor: LevelColor.getColor(level, this.levelCount)
    });
}

FriendShipBar.prototype.setTooltipText = function(text) {
    this.friendshipBarLevel.parent().attr('title', text);

    var friendShipBarControl = this;
    var timer = null;

    this.friendshipBarLevel.parent().tipTip({        
        defaultPosition: 'right',
        enter: function() {
            timer = setTimeout(function() {
                executeCommand(friendShipBarControl.name, 'TooltipIsShown', '');
            }, 400); // 400 - default delay of tip tip plugin
        },
        exit: function() {
            clearTimeout(timer);
        },
        exitDelay: 2000,
        click: function() {
            executeCommand('friendshipBar', 'Clicked', '');
        } 
    });
}
