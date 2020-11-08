/*
 * ChatmanMain page type declaration
 */ 
// inherite from Base Control
extend(ChatmanMainPage, BasePage);

function ChatmanMainPage(){
    ChatmanMainPage.superclass.constructor.apply(this, arguments);
    
    this.name = 'ChatmanMain';
}

ChatmanMainPage.prototype.bind = function() {
    ChatmanMainPage.superclass.bind.apply(this, arguments);

    if ($('body').hasClass('RTL')) {
        this.rtlFixes();
    }
}

ChatmanMainPage.prototype.createControls = function() {

    var activePersonalityView = 'activePersonalityView';
    this.controls[activePersonalityView] = new ActivePersonalityView('#activePersonalityViewControl', activePersonalityView);

    var chatmanName = "chatmanName";
    this.controls[chatmanName] = new ChatmanName('#chatmanNameControl', chatmanName);

    this.controls.chatmanState = new ChatmanState('#chatmanStateControl');

    this.controls.volumeControl = new VolumeControl('#volumeControl');

    this.controls.friendshipBar = new FriendShipBar('#friendshipBarControl', 'friendshipBar');

    var mainPanelButtons = 'mainPanelButtons';
    this.controls[mainPanelButtons] = new MainPanelButtonsControl('#mainPanelButtonsControl', mainPanelButtons);

    var myChatmanStatus = 'myChatmanStatus';
    this.controls[myChatmanStatus] = new MyChatmanStatus('#chatmanStatusControl', myChatmanStatus);

    this.controls.toolBar = new ToolBar('#toolsBarControl');

    this.controls.profileLink = new ProfileLink('#profileLinkControl');

    /* Waiter */
    this.controls.waitOverlap = new WaitOverlap(document.body);
}

ChatmanMainPage.prototype.bindInternalControls = function() {
        this.controls.toolBar.bind();
        this.controls.waitOverlap.bind();
}

ChatmanMainPage.prototype.rtlFixes = function() {
    // switch browser navigation buttons places
    var browserButtons = $('#browserButtonsContainer').children();
    var src = browserButtons[0].src;
    browserButtons[0].src = browserButtons[1].src;
    browserButtons[1].src = src;
}

ChatmanMainPage.prototype.bindUI = function() {
    ChatmanMainPage.superclass.bindUI.call(this);

    // dragging functionality        
    $('[dragElement]').mousedown(function(e) {
        if (e.target == this) {
            executeCommand('', 'DragInitiated', '');
        }
        e.stopPropagation();
    });

    $('body').bind('click focus', function() {
        // restore focus to activeFrame
        Navigation.focusPage();
    });
}

ChatmanMainPage.prototype.pressMainPanelButton = function(index) {
    Page.controls.mainPanelButtons.pressButton(index);
}


ChatmanMainPage.prototype.showConnectChatmanMessage = function() {
    $('#connectChatmanMessageBackground').show();
}

ChatmanMainPage.prototype.setGUIEnabled = function(isEnabled) {
    if (isEnabled) {
        this.controls.waitOverlap.hide();
    } else {
        this.controls.waitOverlap.show();
    }
}

ChatmanMainPage.prototype.hideConnectChatmanMessage = function() {
    $('#connectChatmanMessageBackground').hide();
}
    
ChatmanMainPage.prototype.setEnabledToolbarButton = function(buttonName, isEnabled) {
    this.controls.toolBar.setEnabled(buttonName, isEnabled);
}

// shows/hides browser buttons
ChatmanMainPage.prototype.setBrowserControlsVisible = function(isShown) {
    if (isShown) {
        $('#browserButtonsContainer, #browserLine').show();
        $('#profileLinkControl').addClass('profileControlMini');
        Navigation.isBrowserShown = true;
    } else {
        $('#browserButtonsContainer, #browserLine').hide();
        $('#profileLinkControl').removeClass('profileControlMini');
        Navigation.isBrowserShown = false;
    }
}

// create Page object
var Page = new ChatmanMainPage();
