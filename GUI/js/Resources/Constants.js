var Constants = {
    PageFrameWidth: 974,
    PopupFrameWidth: 374,
    
    // get width of current window
    getPageFrameWidth: function(){
        if (getUrlVars().mode == 'PageMode') {
            return this.PopupFrameWidth;
        } else {
            return this.PageFrameWidth;
        }
    },

    // get height of current window
    PageFrameHeight: 590,
    PopupFrameHeight: 263,
    
    // TODO: check if this is used
    getPageFrameHeight: function(){
        if (getUrlVars().mode == 'PageMode') {
            return this.PopupFrameHeight;
        } else {
            return this.PageFrameHeight;
        }
    },
        
    ActionListMaxAnimationTime: 500, // in miliseconds
    ActionListMinAnimationTime: 50 // in miliseconds
}
