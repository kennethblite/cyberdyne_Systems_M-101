// inherite from Base Control
extend(AutoScrollingList, BaseControl);

/*
* AutoSrollingList class
*/
function AutoScrollingList(container, name) {
    // creating variables with thier defaults
    this.container = container;
    this.name = name;

    this.itemConstructor = null; // function constuctor of items
    this.items = [];

    this.currentSelected = -1;
    this.currentPosition = 0;
    this.selectTimer = null;

    this.itemWidth = null;
    this.itemsContainer = null;
    this.raiseExecuteCommand = true;

    // array of callbacks to the event - public
    this.selectedItemChanged = [];
}

AutoScrollingList.templateId = '#autoScrollingListTemplate';
// rtl support: positioning propertie (static)
AutoScrollingList.isRTL = false;

// bind list with its HTML and dataObject
AutoScrollingList.prototype.bind = function(dataObject) {
    AutoScrollingList.superclass.bind.call(this, dataObject);    
    this.initSelected();
}

AutoScrollingList.prototype.init = function(dataObject) {
    var autoScrollingContainer = this.control;

    this.currentSelected = dataObject.SelectedIndex;
    this.itemsContainer = autoScrollingContainer.children('.itemsContainer');
    this.itemConstructor = eval(dataObject.ItemConstructor);
    this.itemWidth = this.itemConstructor.width;

    // Creates the callback for item's click
    var list = this;
    var FUNC = function(item) {
        list.scroll(list.currentSelected - list.items.indexOf(item));
    };
    this.itemClickCallback = FUNC;

    // create items and bind them to a list
    this.items = [];    
    for (var i = 0; i < dataObject.ListElements.length; i++) {
        this.insert(dataObject.ListElements[i], i);
    }

    if (dataObject.RaiseExecuteCommand === false) {
        this.raiseExecuteCommand = false;
    }
}

AutoScrollingList.prototype.bindUI = function(hasSlider) {
    /*
    * scroll events
    */
    var list = this;
    this.itemsContainer.siblings('.leftScroller')
        .click({ list: this, scroller: 'left' }, this.scrollerClick);
    this.itemsContainer.siblings('.rightScroller')
        .click({ list: this, scroller: 'right' }, this.scrollerClick);
}

/*
* Resizes itemsContainer of AutoScrollingList to wrap all the contained items
*/
AutoScrollingList.prototype.resizeItemsContainer = function() {
    this.itemsContainer.css('width', this.itemWidth * this.items.length);
}

/*
* Initalizes the primary list selected item
*/
AutoScrollingList.prototype.initSelected = function() {

    this.currentPosition = jQuery(this.container).width() / 2 - this.itemWidth / 2;
    this.itemsContainer.css({
        left: this.currentPosition,
        webkitTransition: 'left 0s'
    });

    var currSelect = this.currentSelected;
    this.currentSelected = 0;
    this.scroll(this.currentSelected - currSelect, false);
}


/*
* Performs list scrolling
*/
AutoScrollingList.prototype.scroll = function(count, useAnimation, execCallbacks) {

    if ((this.currentSelected - count) >= 0 && (this.currentSelected - count) < this.items.length) {

        if (typeof (useAnimation) == 'undefined') {
            useAnimation = true;
        }

        if (typeof (execCallbacks) == 'undefined') {
            execCallbacks = true;
        }

        // Scroll container
        this.currentPosition += count * this.itemWidth;

        this.itemsContainer.css({
            left: this.currentPosition + 'px',
            webkitTransition: useAnimation ? 'left 0.5s ease-out' : ''
        });

        /*
        * Select proper button
        */
        this.items[this.currentSelected].unselect();

        var prevSelected = this.currentSelected;
        this.currentSelected -= count;

        // notify C# that selected item has been changed, sending the item's id
        var currentlySelectedItem = this.items[this.currentSelected];

        if (prevSelected != this.currentSelected && this.raiseExecuteCommand) {
            executeCommand(this.name, 'SeletedItemChanged', currentlySelectedItem.id);
        }

        // execute all callbacks related to the scroll event
        if (execCallbacks) {
            for (var i = 0; i < this.selectedItemChanged.length; i++) {
                this.selectedItemChanged[i](currentlySelectedItem, this.currentSelected);
            }
        }
        // make selection of button only after animation stops
        var list = this;
        clearTimeout(this.selectTimer);
        this.selectTimer = setTimeout(function() {
            list.items[list.currentSelected].select();
        }, 500);
    }
}

AutoScrollingList.prototype.scrollToIndex = function(index, execCallbacks) {

    if (index >= 0 && index < this.items.length) {
        var itemsCount = this.currentSelected - index;

        this.scroll(itemsCount, false, execCallbacks);
    }
}

/*
* Inserting new item into the list in specified index, creating it from dataObj
*/
AutoScrollingList.prototype.insert = function(data, index) {
    // creating new item
    var item = new this.itemConstructor(this.itemsContainer);
    data.indexInContainer = index;
    item.bind(data);
    item.setClickCallback(this.itemClickCallback);

    // inserting in the array of items
    this.items.splice(index, 0, item);

    this.resizeItemsContainer();

    if (index <= this.currentSelected) {
        this.scroll(-1, false);
    }
}

/*
* Delete item in the list in specified index
*/
AutoScrollingList.prototype.remove = function(index) {
    this.items[index].destroy();
    this.items.splice(index, 1);

    this.resizeItemsContainer();

    if (index <= this.currentSelected) {
        this.scroll(1);
    }
}

/*
* Updates item in the list in specified index
*/
AutoScrollingList.prototype.update = function(dataObj, index) {
    this.items[index].update(dataObj);
}

/*
* Scroll event
* This func is called in scroller html object context
*/
AutoScrollingList.prototype.scrollerClick = function(e) {
    if (e.button == 0) {
        e.data.list.scroll(e.data.scroller == "left" ? 1 : -1);
    }
}
