/*
 * MiniPersonalityButton type declaration
 */
// inherite from Base Control
extend(MiniPersonalityButton, BaseControl);
MiniPersonalityButton.templateId = "#miniPersonalityButtonTemplate";

function MiniPersonalityButton(container){
    MiniPersonalityButton.superclass.constructor.apply(this, arguments);
    
    this.miniPersonalityButton = null;
    this.id = null;    
    
    this.isSelected = false;
    this.imagesManager = null;   
}

/* Static variables */
MiniPersonalityButton.width = 97;
MiniPersonalityButton.height = 102;

MiniPersonalityButton.prototype.bind = function(dataObject){
    // TOSO: try to make more general or better solution
    if (!this.miniPersonalityButton) {
        this.miniPersonalityButton = $( $("#miniPersonalityButtonTemplate").tmpl(dataObject) );
        this.miniPersonalityButton.appendTo(this.container);
    } else {
        this.miniPersonalityButton.html( $("#miniPersonalityButtonTemplate").tmpl(dataObject).html() );
    }
    
    this.init(dataObject); 
}

MiniPersonalityButton.prototype.init = function(dataObject){
    try {
        this.id = dataObject.Id;
        
        this.imagesManager = new ImageManager(this.miniPersonalityButton.find('.frontImages')[0], 
                                              this.miniPersonalityButton.find('.backImages')[0]);
        this.imagesManager.add(dataObject.Images);
        this.setColorScheme(dataObject.ColorSchemeIndex);
    } catch (ex) {
        console.log('Error: ' + ex);
    }
}

/*
 * Implementation of listItemInterface
 */
MiniPersonalityButton.prototype.select = function(){
    this.miniPersonalityButton.css({
        webkitTransform: 'scale(1.23)', 
        borderColor: '#dc5153'
    });
    
    this.isSelected = true;
}

MiniPersonalityButton.prototype.unselect = function(){
    this.miniPersonalityButton.css({
        webkitTransform: '',
        borderColor: ''
    });
    
    this.isSelected = false;
}

MiniPersonalityButton.prototype.getScrollWidth = function(){
    
    return ( parseInt(this.miniPersonalityButton.css('width')) + parseInt(this.miniPersonalityButton.css('margin-left'))
            + parseInt(this.miniPersonalityButton.css('margin-right')) );  
}

MiniPersonalityButton.prototype.setClickCallback = function(callback){
    var miniPersonalityButton = this;

    this.miniPersonalityButton.click(function(e){
        if (e.button == 0) {
            callback(miniPersonalityButton);
        }
    });
}

// Adds image to the list of images (back or front)
MiniPersonalityButton.prototype.addImage = function(imageDataObj) {
    this.imagesManager.add(imageDataObj);
}

// removes image from the list of images
MiniPersonalityButton.prototype.removeImage = function(imageDataObj) {
    this.imagesManager.remove(imageDataObj);
}

// removes all images from both list of images
MiniPersonalityButton.prototype.removeAllImages = function(){
    this.imagesManager.removeAll();
}

// returnes image names for back or front list
MiniPersonalityButton.prototype.getImageIndexies = function(order){
    return this.imagesManager.getIndexies(order);
}

// Set Color Scheme(light and bark background color)
MiniPersonalityButton.prototype.setColorScheme = function(schemeIndex){
    var scheme = ColorSchemes[ schemeIndex ];

    this.miniPersonalityButton.css('background-color', scheme.LightColor);
    this.miniPersonalityButton.find('.roundBackground').css('background',  '-webkit-gradient(radial, 50% 71, 50, 50% 71, 51, from(' + scheme.DarkColor + '), to(' + scheme.LightColor + '))');    
}

// Set personality icon
MiniPersonalityButton.prototype.setPersonalityImage = function(imageName) {
    this.miniPersonalityButton.find('.miniPersonalityIcon')[0].src = 'images/Personalities/' + imageName + '.png';
}

MiniPersonalityButton.prototype.update = function(dataObj) {
    this.bind(dataObj);
}
