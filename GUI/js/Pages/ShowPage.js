/*
* ShowPage page type declaration
*/
// inherite from Base Popup
extend(ShowPagePopup, BasePopup);

function ShowPagePopup() {
    ShowPagePopup.superclass.constructor.apply(this, arguments);
    this.name = 'ShowPage';
}

ShowPagePopup.prototype.init = function(urlArgs) {
    $('#popupHeading .areaHeadingText').html(urlArgs.heading);
}

ShowPagePopup.prototype.setPageMode = function(mode) {
    // start loading given over URL page
    var pageUrl = getUrlVars().URL; // URL of page to load
    if (pageUrl) {
        $('#pageFrame')[0].src = pageUrl;
    }
}

var Page = new ShowPagePopup();
