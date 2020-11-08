// inherite from Base Control
extend(PopupBox, BaseControl);

function PopupBox(container, name){
    PopupBox.superclass.constructor.apply(this, arguments);
        
    this.popupFrame = null;
    this.closeCallback = null;

    // popup position    
    this.positionX = 0;
    this.positionY = 0;
    this.popupHeadingOffsetX = 0;
    this.popupHeadingOffsetY = 0;
    this.draggable = true;
}

PopupBox.prototype._bind = function(dataObj, isDraggable) {
    this.popupFrame = $(this.container);

    // init popup position                   
    if (dataObj && dataObj.Position) {
        this.setPosition(dataObj.Position.OffsetX, dataObj.Position.OffsetY, dataObj.Position.Dock);
    } else {
        this.setPosition(0, 0, { center: true });
    }

    if (typeof(isDraggable) != "undefined") {
        this.draggable = isDraggable;
    }

    // find offset of popupHeading - dragging element of popup
    var element = this.popupFrame.find('#popupHeading')[0];
    var posElement = this.popupFrame[0];
    var pos;

    while (element != posElement) {
        pos = $(element).position();

        this.popupHeadingOffsetX += pos.left;
        this.popupHeadingOffsetY += pos.top;

        element = element.parentNode;
    }
}

PopupBox.prototype.bindUI = function() {
    var popup = this;
    // register close commands
    this.popupFrame.find('#cross').click(
        function(e) {
            if (e.button == 0) {
                popup.closePopupHandler();
            }

            e.stopPropagation();
        })
    .mousedown(function(e) {
        e.stopPropagation();
    });

    $(document).keydown(function(e) {
        if (e.which == 27) {
            popup.closePopupHandler();
        }
    });

    if (this.draggable) {

        /*
        * make popup draggable
        */
        var isDraggable = false;
        var posX, posY; // position relative to header
        var popupBox = this;

        // function that handles draging of popup
        var draggingHandler = function(e) {

            if (isDraggable && (e.pageX > 0 && e.pageY > 0) /*&& (e.pageX < document.width && e.pageY < document.height)*/) {

                var positionX = e.pageX - posX - popupBox.popupHeadingOffsetX, positionY = e.pageY - posY - popupBox.popupHeadingOffsetY;
                popupBox.move(positionX, positionY);
            }
        };

        // saves position of cursor in heading
        this.popupFrame.find('#popupHeading').mousedown(function(e) {
            if (e.button == 0) {
                isDraggable = true;

                posX = e.offsetX;
                posY = e.offsetY;

                // if event raises on child elements - calculate mouse position, relatively to parent
                if (e.target != this) {
                    var element = e.target;
                    var pos;

                    while (element != this) {
                        pos = $(element).position();

                        posX += pos.left;
                        posY += pos.top;

                        element = element.parentNode;
                    }
                }

                // start mouse moving
                $(document).mousemove(draggingHandler);

                e.stopPropagation();
            }
        });

        $(window).mouseup(function(e) {
            if (e.button == 0) {
                isDraggable = false;
                $(document).unbind('mousemove', draggingHandler);
            }
        });
    }

}

PopupBox.prototype.closePopupHandler = function(){    
    if (this.closeCallback ) {
        this.closeCallback();
    } else {
        executeCommand('', 'ClosePopup', '');
    }    
}

// move popup to position
PopupBox.prototype.move = function(positionX, positionY) {
    this.positionX = positionX;
    this.positionY = positionY;
    
    this.popupFrame.css({
        left: this.positionX,
        top: this.positionY
    });
}

// positiones element useing dock. Example: {bottom: true, right: true}
PopupBox.prototype.setPosition = function(offsetX, offsetY, dock) {
    // object that would manage all positioning properties
    var posObj = {};
    var popupWidth = this.popupFrame.width(), popupHeight = this.popupFrame.height();
    
    // determines how to position popup using dock
    if (dock.center) {
        posObj.left = (Constants.getPageFrameWidth() - popupWidth) / 2 + offsetX; // hardcoded popup width
        posObj.top = (Constants.getPageFrameHeight() - popupHeight) / 2 + offsetY; // hardcoded popup height
    }
    
    if (dock.top) {
        posObj.top = offsetY;
    }    
    if (dock.bottom) {
        posObj.top = document.height - offsetY - popupHeight;
    }    
    if (dock.left) {
        posObj.left = offsetX;
    }    
    if (dock.right) {
        posObj.left = document.width - offsetX - popupWidth;
    }
    
    this.popupFrame.css(posObj);
}
