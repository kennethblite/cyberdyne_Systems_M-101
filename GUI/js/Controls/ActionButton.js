// inherite from Base Control
extend(ActionButton, BaseControl);

// Action button type declaration
function ActionButton(container) {
    ActionButton.superclass.constructor.apply(this, arguments);    
    
    this.actionButton = null;    
    // name of button's mood
    this.moodName = null;
    
    this.id = null;
    // data for info card to show
    this.infoMenuDataObj = {};    
    // callback that datermines whether to show a cloud
    this.getViewportPositionCallback = null;    
    //  infomenu offsets from top container
    this.infoTopOffset = 0;
    this.infoLeftOffset = -15;
}

/* Static variables */
ActionButton.width = 124;
ActionButton.height = 29;
ActionButton.templateId = '#actionButtonTemplate';

// rtl support: positioning propertie (static)
ActionButton.positionPropertie = null;

/* methods */
ActionButton.prototype._bind = function(dataObj, index) {
    if (!dataObj.IsLong) {
        dataObj.IsLong = false;
    }

    var bindType = BindType.Insert;

    if (typeof(index) == "undefined" || index == null) {
        bindType = BindType.Append;
    }

    ActionButton.superclass._bind.call(this, dataObj, bindType, index);
}

ActionButton.prototype.init = function(dataObj) {
    this.actionButton = this.control.find('.actionButton');
    
    // init ltr/rtl
    if (!ActionButton.positionPropertie) {
        ActionButton.positionPropertie = $('body').hasClass('RTL') ? 'left' : 'right';        
    }
    
    this.id = dataObj.Id;
    this.moodName = dataObj.MoodName;
    
    // save data for info menu
    this.infoMenuDataObj.Description = dataObj.Description;
    this.infoMenuDataObj.Designer = dataObj.Designer;
    this.infoMenuDataObj.IsPrivate = dataObj.IsPrivate;
}

ActionButton.prototype.bindUI = function(){
    /*
     * Visual appearance events
     */
    this.actionButton
        .mouseenter({actionButton: this}, actionButtonMouseEnter)
        .mouseleave({actionButton: this},actionButtonMouseLeave);
        
    this.actionButton.children('.btnActionInfo')
        .mouseenter({actionButton: this}, infoMouseEnter)
        .mouseleave(infoMouseLeave);
        
    /*
     * Command executing event
     */    
    var eventDataObject = {
            controlName: 'ActionButton', // virtual singleton
            controlId: this.id
    };
    
    this.actionButton.click(eventDataObject, 
       function(e){
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'PlayActionClicked', e.data.controlId);
            }
        });
    
    this.actionButton.find('.linkButton').click(eventDataObject, 
        function(e){
            if (e.button == 0) {
               executeCommand(e.data.controlName, 'ShowActionInfo', e.data.controlId);
               e.stopPropagation();
            } 
        });
        
    // bind tooltips
    this.actionButton.find('[title]').tipTip({
        defaultPosition: "top",
        delay: 1500,
        stylingClass: 'tooltip',
        hasArrow: false
    });
}

ActionButton.prototype.unselect = function() {
    this.actionButton.parent().removeClass('actionButtonContainerHover');
    //ActionCloud.hide();
    InfoMenu.hide();
    
    var buttonShowsMood = this.isMoodShown;
    if (buttonShowsMood) {
        var settings = {opacity: 1};
        settings[ActionButton.positionPropertie] = "-11px";
        this.actionButton.parent().find('.moodIconContainer').css(settings);
    }
}

// retuns position relatively to container
ActionButton.prototype.getPosition = function (){
     var position = this.actionButton.parent().position();
     var container = $(this.container);
     var containerWidth = container.width() + parseInt(container.css('padding-left')) +  parseInt(container.css('padding-right'));
     
     return {
                top : position.top,
                left : position.left,
                right : containerWidth - position.left - this.getWidth()
     };
}

// retuns position related to document
ActionButton.prototype.getAbsPosition = function(){
    return this.actionButton.parent().offset();
}

// setPosition related to container
ActionButton.prototype.setPosition = function (left, top){
    this.actionButton.parent().css({
        left: left,
        top: top
    });
}

// dynamically get the width (but really should be the same as in static vars)
ActionButton.prototype.getWidth = function(){
    return parseInt(this.actionButton.parent().css('width'));
}

// dynamically get the height (but really should be the same as in static vars)
ActionButton.prototype.getHeight = function(){
    return parseInt(this.actionButton.parent().css('height'));
}

ActionButton.prototype.destroy = function(){
    this.actionButton.parent().remove();
}

// sets whether to show moodIcon and moodName
ActionButton.prototype.setMoodShow = function(show){
    if (show) {
        this.actionButton.parent().find('.moodIconContainer').css('display', 'block');
        this.isMoodShown = true;
    } else {
        this.actionButton.parent().find('.moodIconContainer').css('display', 'none');
        this.isMoodShown = false;
    }
}

ActionButton.prototype.getMoodShow = function(){
    return this.isMoodShown;
}

ActionButton.prototype.getViewportPosition = function() {
    if (this.getViewportPositionCallback) {
        return this.getViewportPositionCallback(this);
    } else {
        return null;
    }   
}

ActionButton.prototype.reload = function() {
    var actionButton = this.actionButton.parent().hide();
    setTimeout(function() {
        actionButton.show();
    }, 1);
}

/*
 * Event handlers
 */
function actionButtonMouseEnter(e){
    if ( e.fromElement.className != 'cloud' || (e.fromElement.className == 'cloud' && !$(this).hasClass('actionButtonOpened')) ){        
        ActionCloud.show(e.data.actionButton);
        
        var buttonShowsMood = e.data.actionButton.isMoodShown;
        if (buttonShowsMood) {
            var moodIcon = $(this).parent().find('.moodIconContainer');
            moodIcon.css(ActionButton.positionPropertie, "-22px");
        }
    }
}

function actionButtonMouseLeave(e){
    if (e.toElement.id != 'cloud'){        
        ActionCloud.hide();        
        $(this).parent().removeClass('actionButtonContainerHover');
        
        var buttonShowsMood = e.data.actionButton.isMoodShown;
        var settings = {opacity: 1};
        settings[ActionButton.positionPropertie] = "-11px";
        $(this).parent().find('.moodIconContainer').css(settings);
        
    } else { // in case cursor moves to a cloud
        $(this).parent().addClass('actionButtonContainerHover');        
    }
}

/*
 * Info MENU
 */
function infoMouseEnter(e){
    /*$('.btnActionInfoMenu', $(this).parent()).fadeIn(300);*/
    InfoMenu.show(e.data.actionButton);
}

function infoMouseLeave(e){
    if (!$.contains($('.infoMenuContainer')[0] ,e.toElement)) {
	   InfoMenu.hide();
	   $(this).parent().parent().addClass('actionButtonContainerHover');            
	}
}

ActionButton.prototype.canInfoMenuUnselect = function(){
    return true;
}
