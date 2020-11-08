/*
 * AutoSrollingList class
 */

// inherite from Base Control
extend(MultySelectionList, BaseControl);
MultySelectionList.templateId = "#multySelectionListTemplate";

function MultySelectionList(container, name){
    MultySelectionList.superclass.constructor.apply(this, arguments);
        
    this.itemConstructor = null; // function constuctor of items
    this.items = [];
        
    this.currentPosition = 0;
    this.selectTimer = null;
    this.selectedItems = [];
    
    this.itemWidth = null;
    this.itemsContainerMinLeft = 0;
    this.itemsContainerMaxLeft = 0;    
    this.itemsContainer = null;   
     
    this.enabled = true;
    this.enableListFunction = null;
    
    // array of callbacks to the event of selection/deselection of the item - public
    this.itemStateChanged = [];    
}

// rtl support: positioning propertie (static)
MultySelectionList.positionPropertie = null;

MultySelectionList.prototype.init = function(dataObject) {
    // init ltr/rtl
    if (!MultySelectionList.positionPropertie) {
        MultySelectionList.positionPropertie = $('body').hasClass('RTL') ? 'right' : 'left';
    }

    var autoScrollingContainer = this.control;

    this.itemsContainer = autoScrollingContainer.children('.itemsContainer');
    this.itemConstructor = eval(dataObject.ItemConstructor);
    this.itemWidth = this.itemConstructor.width;

    // Creates the callback for item's click
    var list = this;
    var FUNC = function(item) {

        if (item.isSelected) {
            list.selectedItems.splice(list.items.indexOf(item), 1);
            item.unselect();
        } else {
            list.selectedItems.push(list.items.indexOf(item));
            item.select();
        }

        // execute all callbacks related to the select list item event
        for (var i = 0; i < list.itemStateChanged.length; i++) {
            list.itemStateChanged[i](item);
        }
    };

    this.itemClickCallback = FUNC;

    this.items = [];
    // create items and bind them to a list
    for (var i = 0; i < dataObject.ListElements.length; i++) {
        this.insert(dataObject.ListElements[i], i);
    }

    this.selectItems(dataObject.SelectedIndecies);
}

MultySelectionList.prototype.bindUI = function(){                  
    /*
     * scroll events
     */ 
    var list = this;
    this.itemsContainer.siblings('.leftScroller')
        .click({list: this, scroller: MultySelectionList.positionPropertie}, this.scrollerClick);    
    this.itemsContainer.siblings('.rightScroller')
        .click({list: this, scroller: MultySelectionList.positionPropertie == 'left' ? 'right': 'left'}, this.scrollerClick);
}

/*
 * Resizes itemsContainer of MultySelectionList to wrap all the contained items
 */
MultySelectionList.prototype.resizeItemsContainer = function(){
     var itemContainerWidth = this.itemWidth * this.items.length;
     this.itemsContainer.css('width', itemContainerWidth);
     
     // set min and max position of items container(div that is moved)
     this.itemsContainerMinLeft = -itemContainerWidth + this.itemsContainer.parent().width();
     this.itemsContainerMaxLeft = 0;
}

/*
 * Initalizes the primary list selected item
 */
MultySelectionList.prototype.selectItems = function( selectedItems ) {
    
    for(var i = 0; i < this.items.length; i++) {
        this.items[i].unselect();
    }    
    
    this.selectedItems = selectedItems;

    for(var i = 0; i < this.selectedItems.length; i++) {
        this.items[ this.selectedItems[i] ].select();
    }
}

/*
 * Performs list scrolling
 * @useAnimation - not obligatory param
 */ 
MultySelectionList.prototype.scroll = function(count, useAnimation){
    var newItemsContainerPosition = this.currentPosition + count * this.itemWidth;
    var itemsContainerLeft = newItemsContainerPosition;
    var wasPositionChanged = true;
    
    // calculate scroll position relatively to its bounds
    if (itemsContainerLeft < this.itemsContainerMinLeft) {
        itemsContainerLeft = this.itemsContainerMinLeft;
        
        if (this.currentPosition <= this.itemsContainerMinLeft){
            wasPositionChanged = false;
        }
    }
    
    if (itemsContainerLeft > this.itemsContainerMaxLeft) {
        itemsContainerLeft = this.itemsContainerMaxLeft;    
        
        if (this.currentPosition >= this.itemsContainerMaxLeft){
            wasPositionChanged = false;      
        }
    }
    
    // save current list position
    if (wasPositionChanged) {
        this.currentPosition = newItemsContainerPosition;
    }
     
    // Scroll container       
    if (typeof(useAnimation) == 'undefined') {
        useAnimation = true;
    }  
    
    var settings = { webkitTransition: (useAnimation ? MultySelectionList.positionPropertie + ' 0.5s ease-out': '') };
    settings[MultySelectionList.positionPropertie] = itemsContainerLeft + 'px';
    this.itemsContainer.css(settings);
}

/*
 * Inserting new item into the list in specified index, creating it from dataObj
 */
MultySelectionList.prototype.insert = function(data, index){
    // creating new item
    var item = new this.itemConstructor(this.itemsContainer);
    data.indexInContainer = index;
    item.bind(data);    
    item.setClickCallback(this.itemClickCallback);
    
    // inserting in the array of items
    this.items.splice(index, 0, item);
        
    this.resizeItemsContainer();   
}

/*
 * Scroll event
 */ 
MultySelectionList.prototype.scrollerClick = function(e){
    if (e.button == 0){           
       e.data.list.scroll(e.data.scroller == "left" ? 1 : -1);
    }
}
