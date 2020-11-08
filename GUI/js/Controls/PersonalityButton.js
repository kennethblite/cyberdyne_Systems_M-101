// inherite from Base Control
extend(PersonalityButton, BaseControl);
PersonalityButton.templateId = "#personalityButtonTemplate";

function PersonalityButton(container){
    PersonalityButton.superclass.constructor.apply(this, arguments);
    
    this.personalityButton = null;
    this.id = null;
    this.infoMenuDataObj = {};
    
    //  infomenu offsets from top container
    this.infoTopOffset = +65;
    this.infoLeftOffset = -20;
    
    this.isSelected = false;
    this.imagesManager = null; 
}

/* Static fields */
PersonalityButton.width = 115;

// bind PersonalityButton object to HTML and dataObject
PersonalityButton.prototype.bind = function(dataObject) {
    var bindType;
    if (dataObject.indexInContainer < $(this.container).children().length) {
        bindType = BindType.Insert;
    } else {
        bindType = BindType.Append;
    }

    PersonalityButton.superclass.bind.call (this, dataObject, bindType, dataObject.indexInContainer);
}

PersonalityButton.prototype.init = function(dataObject) {
    // save personality button in varialble
    this.personalityButton = this.control.children('.personalityButton');
    // save id, given from C#
    this.id = dataObject.Id;
    
    // save data for info menu
    this.infoMenuDataObj.Description = dataObject.Description;
    this.infoMenuDataObj.Designer = dataObject.Designer;
    this.infoMenuDataObj.IsPrivate = dataObject.IsPrivate;
    
    try{
        this.imagesManager = new ImageManager(this.personalityButton.find('.frontImages')[0], 
                                                   this.personalityButton.find('.backImages')[0]);
        
        this.imagesManager.add(dataObject.Images);                           
    } catch(e) {
        console.log('Errror: ' + e);
    }
    
    this.setColorScheme(dataObject.ColorSchemeIndex);
}

// binds UI events...
PersonalityButton.prototype.bindUI = function(){
    /*
     * Commands events
     */ 
    var eventDataObject = {
            controlName: 'PersonalityButton', // virtual singleton
            controlId: this.id
    };
    
    this.personalityButton.siblings('.cloud')
                          .find('span[command]')
                          .click(eventDataObject, function(e){
                                if (e.button == 0) {
                                     executeCommand(e.data.controlName, $(this).attr('command'), e.data.controlId);
                                }
                          });
                          
    /*
     * Info menu showing
     */
    var personalityButton = this;
    
    this.personalityButton.find('.personalityInfoButton')
        .mouseenter(function(e){
            if (!$.contains($('.infoMenuContainer')[0] ,e.fromElement)) {
                InfoMenu.show(personalityButton);
            }
        })
        .mouseleave(function(e){
            if (!$.contains($('.infoMenuContainer')[0] ,e.toElement)) {
                InfoMenu.hide();
            }
        });
}

/*
 * Implementation of listItemInterface
 */
PersonalityButton.prototype.select = function() {
    // animate button growing
    this.personalityButton.addClass('personalityButtonGrow');
    
    // animate info button opening
    this.personalityButton.children('.personalityInfoButton')
                          .addClass('personalityInfoButtonShow');
    
    // animate name growing
    this.personalityButton.children('.personalityName')
                          .addClass('personalityNameGrow');
                          
    // animate cloud opening
    var cloud = this.personalityButton.siblings('.cloud');
    cloud.css({
        webkitAnimationName: 'cloudOpening',
        webkitAnimationDuration: '0.8s',
        opacity: '1',
        zIndex: 2
    });
    
    // animate cloud buttons opening
    var fadeFunc = function(){
         cloud.children()
            .stop(true, true)
			.fadeInSequence(150);
	}
	setTimeout(fadeFunc, 500);
}

PersonalityButton.prototype.unselect = function() {
    // animate button reducing
    this.personalityButton.removeClass('personalityButtonGrow');
    
    // animate info button opening
    this.personalityButton.children('.personalityInfoButton')
                          .removeClass('personalityInfoButtonShow');
    
    // animate name reducing
    this.personalityButton.children('.personalityName')
                          .removeClass('personalityNameGrow');
                          
    // animate button closing
    var cloud = this.personalityButton.siblings('.cloud');
    cloud.css({
        webkitAnimationName: 'cloudClosing',
        webkitAnimationDuration: '0.6s',
        opacity: '0',
        zIndex: ''
    });
    
    // animate cloud buttons closing
    cloud.children()
        .stop(true, true)
		.fadeOutSequence(150);	
}

PersonalityButton.prototype.getElement = function(){
    return this.personalityButton;
}

// returns width dynamically, must be the same as in static var
PersonalityButton.prototype.getScrollWidth = function(){
    var personalityButtonContainer = this.personalityButton.parent();
    return ( parseInt(personalityButtonContainer.css('width')) + parseInt(personalityButtonContainer.css('margin-left'))
            + parseInt(personalityButtonContainer.css('margin-right')) );  
}


// Sets callback from outside on click event of personalityButton
PersonalityButton.prototype.setClickCallback = function(callback){
    var personalityButton = this;

    this.personalityButton.click(function(e){
        if (e.button == 0) {
            callback(personalityButton);
        }
    });
}

PersonalityButton.prototype.destroy = function(){
    this.personalityButton.parent().remove();
}

/*
 * functions required for infomenu showing
 */
PersonalityButton.prototype.getAbsPosition = function(){
    return this.personalityButton.parent().offset();
}

PersonalityButton.prototype.canInfoMenuUnselect = function(){
    return false;
}

// Adds image to the list of images (back or front)
PersonalityButton.prototype.addImage = function(imageData) {
    this.imagesManager.add(imageData);
}

// removes image from the list of images
PersonalityButton.prototype.removeImage = function(imageData) {
    this.imagesManager.remove(imageData);
}

// removes all images from both list of images
PersonalityButton.prototype.removeAllImages = function(){
    this.imagesManager.removeAll();
}

// returnes image names for back or front list
PersonalityButton.prototype.getImageIndexies = function(order){
    return this.imagesManager.getIndexies(order);
}

// Set Color Scheme(light and bark background color)
PersonalityButton.prototype.setColorScheme = function(schemeIndex){
    var scheme = ColorSchemes[ schemeIndex ];
    
    this.personalityButton.css('background-color', scheme.LightColor);
    this.personalityButton.find('.roundBackground').css('background',  '-webkit-gradient(radial, 50% 71, 50, 50% 71, 51, from(' + scheme.DarkColor + '), to(' + scheme.LightColor + '))');    
}

// Set personality icon
PersonalityButton.prototype.setPersonalityImage = function(baseIconID) {
    this.personalityButton.find('.personalityIcon')[0].src = 'images/Personalities/' + baseIconID + '.png';
}

PersonalityButton.prototype.update = function(dataObj){
    this.removeAllImages();
    
    this.init(dataObj);
    this.setPersonalityImage(dataObj.BaseIconID);
    
    this.personalityButton.find('.personalityName').html(dataObj.Name);
}
