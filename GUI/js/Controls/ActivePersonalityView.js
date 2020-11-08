// inherite from Base Control
extend(ActivePersonalityView, BaseControl);

/*
 * MiniPersonalityButton type declaration
 */
function ActivePersonalityView(container){
    ActivePersonalityView.superclass.constructor.apply(this, arguments);
    
    this.activePersonalityView = null;
    this.indexInList = null;    
    this.imagesManager = null;
    this.wasTooltipSetted = false;
}

ActivePersonalityView.templateId = '#activePersonalityViewTemplate';

ActivePersonalityView.prototype.init = function(dataObject) {
    this.activePersonalityView = this.control;
    try {
        this.imagesManager = new ImageManager(this.activePersonalityView.find('.frontImages')[0], this.activePersonalityView.find('.backImages')[0]);
        this.imagesManager.add(dataObject.Images);
        this.setColorScheme(dataObject.ColorSchemeIndex);
    } catch (ex) {
        console.log("Error: " + ex);
    }
}


/*
 * Implementation of listItemInterface
 */
ActivePersonalityView.prototype.select = function(){
    this.activePersonalityView.css({
        webkitTransform: 'scale(1.23)', 
        borderColor: '#dc5153'
    });
}

ActivePersonalityView.prototype.unselect = function(){
    this.activePersonalityView.css({
        webkitTransform: '',
        borderColor: ''
    });
}

ActivePersonalityView.prototype.getScrollWidth = function(){
    
    return ( parseInt(this.activePersonalityView.css('width')) + parseInt(this.activePersonalityView.css('margin-left'))
            + parseInt(this.activePersonalityView.css('margin-right')) );  
}

ActivePersonalityView.prototype.setClickCallback = function(callback){
    var activePersonalityViewIndex = this.indexInList;

    this.activePersonalityView.click(function(e){
        if (e.button == 0) {
            callback(activePersonalityViewIndex);
        }
    });
}

// Adds image to the list of images (back or front)
ActivePersonalityView.prototype.addImage = function(imageDataObj) {
    this.imagesManager.add(imageDataObj);
}

// removes image from the list of images
ActivePersonalityView.prototype.removeImage = function(imageDataObj) {
    this.imagesManager.remove(imageDataObj);
}

// removes all images from both list of images
ActivePersonalityView.prototype.removeAllImages = function(){
    this.imagesManager.removeAll();
}

// returnes image names for back or front list
ActivePersonalityView.prototype.getImageIndexies = function(order){
    return this.imagesManager.getIndexies(order);
}

// Set Color Scheme(light and bark background color)
ActivePersonalityView.prototype.setColorScheme = function(schemeIndex){
    var scheme = ColorSchemes[ schemeIndex ];
    
    this.activePersonalityView.css('background-color', scheme.LightColor);
    this.activePersonalityView.find('.roundBackground').css('background',  '-webkit-gradient(radial, 50% 71, 50, 50% 71, 51, from(' + scheme.DarkColor + '), to(' + scheme.LightColor + '))');    
}

// Set personality icon
ActivePersonalityView.prototype.setPersonalityImage = function(imageName) {
    this.activePersonalityView.find('.activePersonalityIcon')[0].src = 'images/Personalities/' + imageName + '.png';
}

ActivePersonalityView.prototype.setTooltipText = function(text){
    this.activePersonalityView.attr('title', text);    
    this.activePersonalityView.tipTip({
        defaultPosition: 'right',
        hasArrow: true
    });
}
