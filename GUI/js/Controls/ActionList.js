// inherite from Base Control
extend(ActionList, BaseControl);

// Action List type declaration
function ActionList(container, name){    
    ActionList.superclass.constructor.apply(this, arguments);

    this.controls = {};
    
    this.listHeight = 0; // height of list, calcualted as height of conatainer
    
    this.items = [];
    this.itemsDataList = null;    
    this.itemsContainer = null;
    
    this.itemsPerColumn = 0;
    this.currentColumn = 0;
        
    this.itemHeight = 0;    
       
    // for scrolling the same distance always
    this.itemsContainerLeft = 0; 
        
    // between items and container
    this.horizontalPadding = 20;
    this.verticalPadding = 12;
    // between items
    this.horizontalSpace = 17;
    this.verticalSpace = 7;

    this.visibleColumnsCount = 0;
    this.bufferedColumnsCount = 2;
    
    // count of multiple click made on left or right scroller, that should be preformed
    this.scrollNextCount = 0;
    this.scrollPrevCount = 0;
}

// rtl support: positioning propertie (static)
ActionList.positionPropertie = null;
ActionList.templateId = "#actionListTemplate";

ActionList.prototype._bind = function(dataObj){
    ActionList.superclass._bind.call(this, dataObj, BindType.UseRebind);  
}

/*
 * Initializes fields
 */
ActionList.prototype.init = function(dataObj) {
    var actionList = this.control.children('.actionList');

    // init ltr/rtl
    if (!ActionList.positionPropertie) {
        ActionList.positionPropertie = $('body').hasClass('RTL') ? 'right' : 'left';
    }

    this.itemsContainer = actionList.children('.actionListItemsContainer');
    this.itemHeight = ActionButton.height;
    this.listHeight = actionList.height(); // set Height of list for futher calculations
    this.calculateItemsPerColumn(); // calculates ans sets this.itemsPerColumn
    this.calculateVisibleColumnsCount();

    /*
    * Callback that calculates buttons coordinates relavely to viewport
    */
    var list = this;
    this.getButtonViewportPosition = function(actionButton) {
        // do not return data while animation, because items have variable position
        if (list.itemsContainer.hasClass('animated')) {
            return 1;
        }
        
        // getting the actionList(class = actionList) HTML element in jquery object
        var actionListElement = list.itemsContainer.parent().eq(0);
        // offset of itemsContainer relativaly to actionList
        var itemContainerOffset = Math.abs(list.itemsContainer.position().left);

        var buttonViewPortLeft = actionButton.getPosition().left - itemContainerOffset;               
        
        var isInLastColumn = Math.ceil((actionButton.index + 1) / list.itemsPerColumn) == list.getTotalColumnsCount();
        if (list.getTotalColumnsCount() < list.visibleColumnsCount) {
            isInLastColumn = false;
        }
        
        return {
            left: buttonViewPortLeft,
            right: actionListElement.width() - buttonViewPortLeft - actionButton.getWidth(),
            isInLastColumn: isInLastColumn,
            listPadding: list.horizontalPadding // list padding for action cloud offset to account
        }
    }

    // inserts items virtually(only in dataObject)
    this.itemsDataList = [];
    for (i = 0; i < dataObj.ListElements.length; i++) {
        this.insertInModel(dataObj.ListElements[i], i);
    }

    // populates list with real(shown) items
    this.items = [];
    for (i = 0; i < (this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn; i++) { // TODO: CHANGE SECOND BOUND
        this.insertInView(i);
    }

    this.resizeItemsContainer();
}

/*
 * Creates and bind controls that are used in ActionList control 
 */
ActionList.prototype.createChildControls = function(dataObj) {
    var listContainer = $(this.container);
    this.controls.chitChatCountText = new SimpleText(listContainer.find('.chitChatCountText'));
    this.controls.chitChatCountText.bind(dataObj.ChitChatCountText);
}

ActionList.prototype.bindUI = function(){
    var container = $(this.container);
    
    /*
     * Srollers events
     */
    container.find('.actionListRightScroller').click({list: this}, function(e){
        if (e.button == 0){
            e.data.list.loadNextItems();
        }
    });
    
    container.find('.actionListLeftScroller').click({list: this}, function(e){
        if (e.button == 0){
            e.data.list.loadPrevItems();
        }
    });
    
    /*
     * Search buttons events
     */
    container.find('.searchButton').click(
        {listName: this.name},
        function(e){
            if (e.button == 0) {
                
                if ($(this).attr('role') == 'search'){
                    executeCommand(e.data.listName, 'SearchClicked', '');
                } else {
                    executeCommand(e.data.listName, 'CancelSearchClicked', '');   
                }
            }
        })  
}

/*
 * Sets visibility of search button
 */
ActionList.prototype.setSearchButton = function(searchActive){
    if (searchActive) {
        $(this.container).find('.searchButton').eq(0).css('display', 'inline')
                         .end().eq(1).css('display', 'none');       
        
    } else {
        $(this.container).find('.searchButton').eq(1).css('display', 'inline')
                         .end().eq(0).css('display', 'none');
    }
}

/*
 * returnes current total column count
 */
ActionList.prototype.getTotalColumnsCount = function() {
    return Math.ceil(this.itemsDataList.length / this.itemsPerColumn);
}

/*
 * returnes the width of column (sapce occupied by button and horizontal distance to next button)
 */
ActionList.prototype.getColumnWidth = function() {
    if (!this.columnWidth) {
        if (this.items[0] && this.items[0].getWidth()) {
            this.columnWidth = this.items[0].getWidth();
        } else {
            this.columnWidth = ActionButton.width;
        }

        this.columnWidth += this.horizontalSpace;
    }

    return this.columnWidth;
}

/*
 * Scrolls list to the right, loading and unloading items
 */
ActionList.prototype.loadNextItems = function(animDuration) {
    if (this.currentColumn + this.visibleColumnsCount >= this.getTotalColumnsCount()) {
        return;
    }

    if (this.itemsContainer.hasClass('animated')) {
        this.scrollPrevCount = 0;
        ++this.scrollNextCount;
        return;
    }

    var currPosition, newPosition;

    // In case of last column - scroll to the end of last button
    if (this.currentColumn + this.visibleColumnsCount == this.getTotalColumnsCount() - 1) {
        var visibleItemsWidth = ((Math.ceil(this.items.length / this.itemsPerColumn) - 1) * this.getColumnWidth() + 2 * this.horizontalPadding);

        currPosition = this.itemsContainer.parent().width() - visibleItemsWidth;
        newPosition = currPosition - this.getColumnWidth();
    } else {
        currPosition = this.itemsContainerLeft;
        newPosition = currPosition - this.getColumnWidth();
    }

    // animate list scrolling
    var animCSS;
    if (!animDuration) {
        animDuration = Constants.ActionListMaxAnimationTime;
    }

    animCSS = ActionList.positionPropertie + ' ' + animDuration / 1000 + 's ease-out';

    this.itemsContainer.addClass('animated')
                       .css('-webkit-transition', animCSS)
                       .css(ActionList.positionPropertie, newPosition);


    // move list back, without animation and delete non visible elements    
    var list = this;

    setTimeout(function() {
        list.itemsContainer.removeClass('animated')
                           .css('-webkit-transition', '')
                           .css(ActionList.positionPropertie, currPosition)
                           .children(':lt(' + list.itemsPerColumn + ')').remove();

        list.items.splice(0, list.itemsPerColumn);                

        list.repositionItems(0);

        /*setTimeout(function() {
        list.itemsContainer.children().css('margin-left', '0px');
        //list.itemsContainer.children(':last-child').css('margin-left', '0px');
        }, 0);*/


        list.animationStopCallback("next");
    }, animDuration);

    // add new items
    var itemsStartIndex = (this.currentColumn + this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn;
    var itemsEndIndex = Math.min(itemsStartIndex + this.itemsPerColumn, this.itemsDataList.length);

    for (var i = itemsStartIndex; i < itemsEndIndex; i++) {
        this.insertInView(i);
    }

    ++this.currentColumn;
}

/*
 * Scrolls list to the left, loading and unloading items
 */
ActionList.prototype.loadPrevItems = function(animDuration) {
    if (this.currentColumn <= 0) {
        return;
    }

    if (this.itemsContainer.hasClass('animated')) {
        this.scrollNextCount = 0;
        ++this.scrollPrevCount;
        return;
    }


    var currPosition = this.itemsContainerLeft;
    this.itemsContainer.removeClass('animated')
                       .css(ActionList.positionPropertie, currPosition - this.getColumnWidth());

    // add new items    
    var itemsEndIndex = this.currentColumn * this.itemsPerColumn;
    var itemsStartIndex = Math.max(itemsEndIndex - this.itemsPerColumn, 0);
    --this.currentColumn;

    for (var i = itemsStartIndex; i < itemsEndIndex; i++) {
        this.insertInView(i);
    }

    // animate list scrolling

    var animCSS;
    if (!animDuration) {
        animDuration = Constants.ActionListMaxAnimationTime;
    }

    animCSS = ActionList.positionPropertie + ' ' + animDuration / 1000 + 's ease-out';
    var list = this;
    list.itemsContainer.addClass('animated')
                       .css('-webkit-transition', animCSS)
                       .css(ActionList.positionPropertie, currPosition);
    

    setTimeout(function() {
        list.itemsContainer.removeClass('animated').css('-webkit-transition', '');
        list.animationStopCallback("prev");
    }, animDuration);

    // delete not visible items
    // in case of this.bufferedColumnsCount last columns - no need to delete them
    if (this.currentColumn + 1 <= this.getTotalColumnsCount() - this.visibleColumnsCount - this.bufferedColumnsCount) {
        var itemsToDelete = list.items.length % list.itemsPerColumn;
        if (itemsToDelete == 0) {
            itemsToDelete = list.itemsPerColumn;
        }

        list.itemsContainer.children().slice(-itemsToDelete).remove();
        list.items.splice(-itemsToDelete);
        list.repositionItems(0);
    }
}

/*
 * Determines whether to scroll list more, depending on clicks received during animation
 */
ActionList.prototype.animationStopCallback = function(dir) {
    if (dir == "next" && this.scrollNextCount > 0) {                
        --this.scrollNextCount;
        this.loadNextItems( this.getAnimDuration(this.scrollNextCount + 1) );
    }

    if (dir == "prev" && this.scrollPrevCount > 0) {
        --this.scrollPrevCount;
        this.loadPrevItems( this.getAnimDuration(this.scrollPrevCount + 1) );
    }
}

ActionList.prototype.getAnimDuration = function(scrollCount) {
    return Math.max((Constants.ActionListMaxAnimationTime - scrollCount * 100), Constants.ActionListMinAnimationTime);
}

/*
 * Inserts new item's data in list items data and sets the mood icon showing or not
 */
ActionList.prototype.insertInModel = function(dataObj, index) {
    this.itemsDataList.splice(index, 0, dataObj);

    this.setMoodIcon(index);
}

/*
 * Set item's mood icon visibility in data
 */
ActionList.prototype.setMoodIcon = function(index) {
    if (index >= this.itemsDataList.length || index < 0) {
        return;
    }

    if ((index && this.itemsDataList[index].MoodName != this.itemsDataList[index - 1].MoodName) || (index == 0)) {
        this.itemsDataList[index].HasMoodIcon = true;
    } else {
        this.itemsDataList[index].HasMoodIcon = false;
    }

    if (this.itemsDataList[index + 1]) {
        if (this.itemsDataList[index].MoodName == this.itemsDataList[index + 1].MoodName) {
            this.itemsDataList[index + 1].HasMoodIcon = false;
        } else {
            this.itemsDataList[index + 1].HasMoodIcon = true;
        }
    }
}

/*
 * inserts item into itemsContaner - creates its object and binds it.
 * @index - index of item in itemsDataList
 */
ActionList.prototype.insertInView = function(index) {
    if (!this.itemsDataList[index]) {
        return;
    }

    // real index for item to be inserted in
    var realIndex = index - this.currentColumn * this.itemsPerColumn;

    if (realIndex < 0) {
        realIndex = 0;
    }

    //Create and binds new item
    var item = new ActionButton(this.itemsContainer);

    if (realIndex >= this.items.length) { // append
        item.bind(this.itemsDataList[index]);
    } else { // insert
        item.bind(this.itemsDataList[index], realIndex);
    }

    // setting callckback where to show cloud
    item.getViewportPositionCallback = this.getButtonViewportPosition;

    this.items.splice(realIndex, 0, item);
    
    // update indexies
    for (var i = realIndex; i < this.items.length; i++) {
        this.items[i].index = index + (i - realIndex);
    }

    // set visibility of mood icon on ActionButton
    item.setMoodShow(this.itemsDataList[index].HasMoodIcon);

    if (this.items[realIndex + 1]) {
        this.items[realIndex + 1].setMoodShow(this.itemsDataList[index + 1].HasMoodIcon);
    }

    this.repositionItems(realIndex, index);
}

/*
 * Insert new item
 */
ActionList.prototype.insert = function(dataObj, index) {
    this.insertInModel(dataObj, index);
    this.itemsContainer.hide();
    
    var visibleAreaStart = this.currentColumn * this.itemsPerColumn, visibleAreaEnd = (this.currentColumn + this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn;
    // Perform insert in loaded area
    if (index >= visibleAreaStart && index <= visibleAreaEnd) {
        this.insertInView(index);

        // remove last item if it doen't fit in last column
        if (this.items.length > this.getMaxLoadedItemsCount()) {
            this.items[this.items.length - 1].destroy();
            this.items.splice(this.items.length - 1, 1);
        }
    }

    // insertion before loaded area
    if (index >= 0 && index < visibleAreaStart) {
        // show last invisible element before visible area
        this.insertInView(visibleAreaStart);

        // remove last item if it doen't fit in last column
        if (this.items.length > this.getMaxLoadedItemsCount()) {
            this.items[this.items.length - 1].destroy();
            this.items.splice(this.items.length - 1, 1);
        }
    }

    this.itemsContainer.show();
    this.resizeItemsContainer();
}

ActionList.prototype.getMaxLoadedItemsCount = function(){
    return this.itemsPerColumn * (this.visibleColumnsCount + this.bufferedColumnsCount);
}

/*
 * deletes items with specified index
 */
ActionList.prototype.remove = function(index) {
    // delete item    
    this.itemsDataList.splice(index, 1);
    // reset mood icon
    this.setMoodIcon(index);

    var visibleAreaStart = this.currentColumn * this.itemsPerColumn, visibleAreaEnd = (this.currentColumn + this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn;

    // Perform delete in loaded area
    if (index >= visibleAreaStart && index <= visibleAreaEnd) {
        var realIndex = index - this.currentColumn * this.itemsPerColumn;
        
        if (realIndex >= this.items.length) {
            return;
        }

        // delete item
        this.items[realIndex].destroy();
        this.items.splice(realIndex, 1);

        this.items[realIndex].setMoodShow(this.itemsDataList[index].HasMoodIcon);

        // show last item - because items had beed shifted after deleting        
        this.insertInView(visibleAreaEnd);
        this.repositionItems(realIndex);
    }

    // delete before loaded area
    if (index >= 0 && index < visibleAreaStart) {
        // delete first visible element
        this.items[0].destroy();
        this.items.splice(0, 1);

        // show last invisible element before visible area
        this.insertInView(visibleAreaEnd);
        this.repositionItems(0);
    }
}

/*
 * updates item with specified index
 */
ActionList.prototype.update = function(dataObj, index) {
    if (index >= this.itemsDataList.length || index < 0) {
        return;
    }

    this.itemsDataList[index] = dataObj;
    this.setMoodIcon(index);

    // update in loaded area
    var visibleAreaStart = this.currentColumn * this.itemsPerColumn, visibleAreaEnd = (this.currentColumn + this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn;
    if (index >= visibleAreaStart && index <= visibleAreaEnd) {
        var realIndex = index - this.currentColumn * this.itemsPerColumn;
        // delete old item
        this.items[realIndex].destroy();
        this.items.splice(realIndex, 1);
        // insert new item
        this.insertInView(index);
    }
}

/*
 * resized itemsContainer to wrap all of its containment
 */
ActionList.prototype.resizeItemsContainer = function(){
    var index = this.items.length - 1;
    var colCount = Math.floor(index / this.itemsPerColumn) + 1; 
    //this.itemsContainer.css('width', colCount * (this.items[index].getWidth()  + this.horizontalSpace) + 2 * this.horizontalPadding);
    this.itemsContainer.css('width', colCount * this.getColumnWidth() + this.horizontalPadding * 2);
}

/*
* changes items location according to their index, starting from 'startIndex'
*/
ActionList.prototype.repositionItems = function(startIndex) {
    var row, col;
    var item = this.items[0];

    this.itemsContainer.children().css('width', ActionButton.width - 1);
    var lastButton = this.itemsContainer.children(':last-child').hide();

    for (var i = 0; i < this.items.length; i++) {
        col = Math.floor(i / this.itemsPerColumn);
        row = i % this.itemsPerColumn;

        this.items[i].setPosition(col * (item.getWidth() + this.horizontalSpace) + this.horizontalPadding,
                                  row * (item.getHeight() + this.verticalSpace) + this.verticalPadding);
    }

    this.itemsContainer.children().css('width', ActionButton.width);
    lastButton.show();
}

/*
 * set itemsPerColumn according to list height
 */
ActionList.prototype.calculateItemsPerColumn = function(){
    this.itemsPerColumn = Math.floor( (this.listHeight) / (this.itemHeight + this.verticalSpace) );
}

/*
* set itemsPerColumn according to list height
*/
ActionList.prototype.calculateVisibleColumnsCount = function() {
    this.visibleColumnsCount = Math.round((this.itemsContainer.parent().width() - this.horizontalPadding) / (this.getColumnWidth()));    
}

/*
 * scrolls list to right or left
 */
ActionList.prototype.scrollToIndex = function(index) {
    if (index >= this.itemsDataList.length) {
        return;
    }

    var columnIndex = Math.min(Math.floor(index / this.itemsPerColumn), this.getTotalColumnsCount() - this.visibleColumnsCount);
    this.currentColumn = columnIndex;

    this.itemsContainer.empty();
    this.items.length = 0;
    this.currentColumn = columnIndex;

    // add new items
    var itemsStartIndex = this.currentColumn * this.itemsPerColumn;
    var itemsEndIndex = Math.min(itemsStartIndex + (this.visibleColumnsCount + this.bufferedColumnsCount) * this.itemsPerColumn, this.itemsDataList.length);

    for (var i = itemsStartIndex; i < itemsEndIndex; i++) {
        this.insertInView(i);
    }
}

/*
 * sets Text for chitChatCountText control
 */
ActionList.prototype.setText = function (text){
    this.controls.chitChatCountText.setText(text);
}
