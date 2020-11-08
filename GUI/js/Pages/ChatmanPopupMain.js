/*
* Singleton for ChatmanMain page
*/
var Page = {
    container: null,

    name: 'ChatmanPopupMain',

    controls: {},

    bind: function(container) {        
        this.bindUI();
    },
    
    bindUI: function() {        
        
    }, 

    pageHiddingHandler: function() {
        executeCommand('', 'PageHidding', '');
    }
}
