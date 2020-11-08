$(document).ready(function(){          
    var loadParams = {
        WindowName: window.name,
        WindowParams: location.search.slice(1)
    };
    Page.appId = loadParams.WindowParams;
    
    // event for C#
    Chatman.executeCommand('PageLoaded', JSON.stringify(loadParams));    
    
    // disable context menu
    document.oncontextmenu = function(){return false;}
    //<!--END REMOVE-->        
});

$(window).unload(function(){
    Chatman.executeCommand('PageUnloaded', '');
});

$(window).load(function(){
    Chatman.executeCommand('PageCompletelyLoaded', '');   
});


var Chatman = {
    bind: function(){
        
    },
    
    executeCommand: function(commandName, params){
        window.top.ChatmanController.executeControlCommand(Page.appId, commandName, params);       
    },
    
    registerMainApplicationControl: function(mainApplicationControl) {
        Page.mainAppControl = mainApplicationControl;
    }    
}

var Page = {       
    appId: "",

    controls: {},
    
    mainAppControl: null,

    bind: function(container) {
        
    },
    
    getAppMainControl: function(appId) {
        if (this.mainAppControl && appId == this.appId) {
            return Page.mainAppControl;
        }
    }
}
