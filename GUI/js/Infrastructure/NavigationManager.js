var Navigation = {
    previousFrame: null,
    currentFrame: null,
    isMessageBoxLoaded: false,
    isPopupShown: false,
    isMessageBoxShown: false,
    
    showFrame: function(frameId) {

        var selectedFrame = $('.selectedFrame');

        // invoke pages hidding handler
        var frameWindow = selectedFrame[0].contentWindow;
        if (frameWindow.Page && frameWindow.Page.pageHiddingHandler) {
            frameWindow.Page.pageHiddingHandler();
        }

        if (selectedFrame[0].id != frameId) {
            $('#' + frameId).addClass('selectedFrame');
            selectedFrame.removeClass('selectedFrame');

            // call page reload         
            if (frameWindow.Page && frameWindow.Page.reload) {
                frameWindow.Page.reload();
            }

            // focus the Page doesn't works here everytime
            try {
                Navigation.focusPage();
            } catch (e) {
            }
        }
    },

    navigate: function(url, frameId) {
        this.showMainPanelButton(url);

        // contentFrame specific handling
        var navigatingToContentFrame = (frameId == "contentFrame");

        if ((this.currentFrame == "contentFrame") && !navigatingToContentFrame) {
            var frameElem = jQuery('#contentFrame')[0];
            frameElem.src = "";
        }

        // check if to reload content
        var destinationFrame = jQuery('#' + frameId)[0];
        var urlDiffers = false;
        if (url && (destinationFrame.src.indexOf(url) == -1)) {
            destinationFrame.src = url;
            urlDiffers = true;
        }

        if (url && !urlDiffers) {
            executeCommand('', 'OnPageShownWithoutReloading', '');
        }

        // show frame
        this.showFrame(frameId);

        // save current state
        if (this.currentFrame != "contentFrame") {
            this.previousFrame = this.currentFrame;
        }
        this.currentFrame = frameId;

        // focus the Page doesn't works here everytime
        try {
            Navigation.focusPage();
        } catch (e) {

        }
    },

    // navigates a frame disregarding if its visible or other state
    navigateNoShow: function(url, frameId) {
        var frameElem = jQuery('#' + frameId)[0];
        frameElem.src = url;
    },

    showMainPanelButton: function(pageUrl) {
        if (!pageUrl) {
            return;
        }

        // get page name and its button and auto-select it in main panel
        var pageName = pageUrl.slice(pageUrl.lastIndexOf('/') + 1, pageUrl.lastIndexOf('.'));

        // consider mappings
        if (pagesMappings[pageName]) {
            pageName = pagesMappings[pageName];
        }
        var buttonIndex = buttonPages.indexOf(pageName);

        if (Page.pressMainPanelButton) {
            Page.pressMainPanelButton(buttonIndex);
        }
    },

    // navigates to the url keeping the current frame
    navigateKeepCurrent: function(url) {
        // save some properties
        var originalCurrentFrame = this.currentFrame;
        var urlOld = $('#' + this.currentFrame)[0].src;

        this.navigate(url, 'contentFrame');

        // restore saved properties after navigtation
        this.previousFrame = originalCurrentFrame;
        this.showMainPanelButton(urlOld);
    },

    goBack: function() {
        if (this.previousFrame) {
            var url = $('#' + this.previousFrame)[0].src;
            this.navigate(null, this.previousFrame);
            this.showMainPanelButton(url);
        }

        Navigation.focusPage();
    },
        
    showPopup: function(url, position) {
        // anti flicker
        $(window.top.document.body).one('PageLoaded', function(e) {
            var frame = $('#' + e.frameId);

            frame.show();
            frame.focus();

            Navigation.isPopupShown = true;

            if (position) {
                frame[0].contentWindow.Page.setPosition(position);
            }

            Navigation.focusPage();
        });
        // set url
        $('#popupFrame')[0].src = url;

    },

    hidePopup: function() {
        $('#popupFrame').hide();

        $('#popupFrame')[0].src = "";
        Navigation.isPopupShown = false;

        Navigation.focusPage();
    },

    showMessageBox: function() {
        if (!Navigation.isMessageBoxLoaded) {
            $(window.top.document.body).one('PageLoaded', function(e) {
                $('#messageBoxFrame').show().focus();
                Navigation.isMessageBoxShown = true;
                Navigation.isMessageBoxLoaded = true;
            });
        } else {
            $('#messageBoxFrame').show().focus();
            Navigation.isMessageBoxShown = true;
            $('#messageBoxFrame')[0].contentWindow.focus();
        }

        // set url
        var messageBoxUrl = 'MessageBox.html';

        /* 
        messageBoxUrl = 'MessageBox.aspx' //in debug mode we have only aspx! no html!
        /* 
        <!--END REMOVE-->
        */

        if (this.currentFrame &&
            frames[this.currentFrame].getUrlVars && // in case of for example application page
            frames[this.currentFrame].getUrlVars().mode == 'PageMode') {
            messageBoxUrl += '?mode=' + 'PageMode';
        }

        if (!$('#messageBoxFrame')[0].src) {
            $('#messageBoxFrame')[0].src = messageBoxUrl;
        }
    },

    hideMessageBox: function() {
        $('#messageBoxFrame').hide();
        Navigation.isMessageBoxShown = false;

        Navigation.focusPage();
    },
    
    focusPage: function() {
        var frameWindow = {};
        if (Navigation.currentFrame) {
            frameWindow = $('#' + Navigation.currentFrame)[0].contentWindow;
        }
        // in case of messagebox/popup is shown
        if (this.isMessageBoxShown) {
            frameWindow = $('#messageBoxFrame')[0].contentWindow;
        }
        if (this.isPopupShown) {
            frameWindow = $('#popupFrame')[0].contentWindow;
        }

        // focus to current frame
        if (frameWindow.focus) {
            frameWindow.focus();
        }

        if (frameWindow.Page && frameWindow.Page.focus) {
            // focus page in current frame
            frameWindow.Page.focus();
        }
    }
}

// pages that have buttons for then in main panel
var buttonPages = [
    'ChatWithChatmanPage',
    'PersonalitiesPage',
    'GamesAndMorePage',
    'ChatWithFriendsPage',
    'RemindersPage',
    'AppsAndDownloadsPage'
];

// which page's buttons should remain active while the listed pages are navigated to
var pagesMappings = {
    MyChatmanAppsPage: "AppsAndDownloadsPage",
    ApplicationCompiled: "AppsAndDownloadsPage"
};
