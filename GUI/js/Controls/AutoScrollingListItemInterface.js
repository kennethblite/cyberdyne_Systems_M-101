var listItemInterface  = {
    // index of item in the containing list, if indexInList == null then item is stand alone
    indexInList: null,

    // change item to selected state
    select: function(){
    },
    
    // change item to normal state
    unselect: function(){
    },
    
    // returns jQuery object, maybe will be changed or removed, currently not used
    getElement: function(){
    },
    
    // width for proper list scrolling == own item width + distance to surrounding items
    getScrollWidth: function(){
    },
    
    setClickCallback: function(){
    }
}

/*
 * Also AutoSrollingList item must have set its width and left and right margins (both and equal), display: inline-block
 */
