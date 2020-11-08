$(document).ready(function() {
    // make right to left
    //document.body.className = 'RTL';

    focus();

    // bind Page   
    Page.bind(getUrlVars());

    // Event only for js - when page is loaded
    var pageLoaded = jQuery.Event('PageLoaded');
    pageLoaded.frameId = window.name;
    window.top.$(window.top.document.body).trigger(pageLoaded);

    var loadParams = {
        WindowName: window.name,
        WindowParams: location.search.slice(1)
    };
    // event for C#
    executeCommand('', 'PageLoaded', JSON.stringify(loadParams));

    // disable context menu
    document.oncontextmenu = function() { return false; }
    //<!--END REMOVE-->
});

$(window).unload(function() {
    executeCommand('', 'PageUnloaded', '');
});

$(window).load(function() {
    executeCommand('', 'PageCompletelyLoaded', '');
});

window.onerror = function(e) {
    window.top.$('#output').append('<div>' + e + '</div>');
};
