/*
 * Manager of front and back images for controls
 * manages 2 container for images
 */

function ImageManager(frontContainer, backContainer) {
    this.frontContainer = frontContainer;
    this.backContainer = backContainer;
    
    this.frontImages = [];
    this.backImages = [];   
}

/*
 * Adds image to the list of images (back or front)
 */
ImageManager.prototype.add = function(imageIndex) {
    if ( typeof(imageIndex) == 'number') {
        imageIndex = [imageIndex];
    }
       
    // append images to container
    var imageDataObj, image;
    var list, container;
    
    for (var i = 0; i < imageIndex.length; i++) {
        imageDataObj = AccesorizeImages[ imageIndex[i] ];  
        
        image = document.createElement('img');
        image.src = 'images/Personalities/accesorize/' + imageDataObj.ImageName + '.png';
        
        if (imageDataObj.Order == 'F') {
            list = this.frontImages;
            container = $(this.frontContainer);      
        }
        
        if (imageDataObj.Order == 'B') {
            list = this.backImages;
            container = $(this.backContainer);
        }
        
        // add images to list and container
        list.push({ ImageName: imageDataObj.ImageName, ImageElement:  image });
        container.append(image);
    }
}

/*
 * removes image from the list of images
 */
ImageManager.prototype.remove = function(imageIndex) {
    var list;
    var imageDataObj = AccesorizeImages[imageIndex];
    
    if (imageDataObj.Order == 'F') {
        list = this.frontImages;
    }
    
    if (imageDataObj.Order == 'B') {
        list = this.backImages;        
    }
    
    for(var i = 0; i < list.length; i++) {
        if (list[i].ImageName == imageDataObj.ImageName) {
            $(list[i].ImageElement).remove();
            
            list.splice(i, 1);
        }
    }
}

/*
 * removes all images from both list of images
 */
ImageManager.prototype.removeAll = function(){
    
    for(var i = 0; i < this.frontImages.length; i++) {        
         $(this.frontImages[i].ImageElement).remove();                
    }
    
    this.frontImages = [];
        
    for(var i = 0; i < this.backImages.length; i++) {        
         $(this.backImages[i].ImageElement).remove();               
    }
    
    this.backImages = [];
}

/*
 * returnes image names for back or front list
 */
ImageManager.prototype.getIndexies = function(order){
    var list;
    order = order;
    
    if (order == 'F') {
        list = this.frontImages;
    }   
    else if (order == 'B') {
        list = this.backImages;        
    }
    else {
        list = this.frontImages.concat(this.backImages);
    }
        
    
    var names = [];
    
    for(var i = 0; i < list.length; i++) {
        names.push( parseInt(list[i].ImageName) );
    }
    
    return names;
}
