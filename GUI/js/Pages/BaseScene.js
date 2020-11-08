/*
 * Base Class for all Scenes 
 */
function BaseScene(Page){
    this.Page = Page;
    this.sceneId = null;
    this.controls = {};
    // set of timers working on this scene
    this.timers = [];
    this.isNextLocked = false;
    
    this.index;
    
    this.isRTL = false;
    if ($('body').hasClass('RTL')) {
        this.isRTL = true;
    }
}

// binds appearance details: animations etc...
BaseScene.prototype.bindView = function() {
    
}

// binds functionality and others
BaseScene.prototype.bind = function() {

    $(this.sceneId + ' .backButton').click({
        scene: this
    }, function(e) {
    if (e.shiftKey) { // used forfaster  scrolling
            e.data.scene.nextButtonHandler(e.button, true);
        } else {
            e.data.scene.backButtonHandler(e.button);
        }
    });

    $(this.sceneId + ' .nextButton').click({
        scene: this
    }, function(e) {
        e.data.scene.nextButtonHandler(e.button);
    });

    // "Play again" button for scenes >= 8
    var sceneObj = this;
    $('.playAgainLink', this.sceneId).click(function() {
        sceneObj.unbind();
        sceneObj.bind();
    });
    
    this.createAndBindControls();
}

BaseScene.prototype.unbind = function() {
    $(this.sceneId + ' .backButton').add(this.sceneId + ' .nextButton').unbind('click');
    this.controls.storyScroller.destroy();

    // clear all timeouts
    for (var i = 0; i < this.timers.length; i++) {
        try {
            clearInterval(this.timers[i]);
        } catch (e) {
            console.log('Error: ' + e);
        }
    }

    // hide "Play again" link
    $('.playAgainLink', this.sceneId).addClass('hidden');
    $(this.sceneId).find('.bottomText').removeClass('hidden');
}

BaseScene.prototype.unbindView = function() {
    
}

BaseScene.prototype.canLeave = function(){
    return !this.isNextLocked;
}

BaseScene.prototype.createAndBindControls = function(){
    this.controls = {};
    this.setTextScroller(this.textScrollerData.ChitChatCode, this.textScrollerData.TextId);
}

BaseScene.prototype.setTextScroller = function(chitChatCode, textId) {
    var controlName = 'storyScroller';
    if (textId && textId != '') {
        this.controls[controlName] = new TextScroller(this.textScrollerData.ElementHTML, controlName);
        var text = '';
        if (textId != '') {
            text = IntroResourcesStrings[textId];

            if (text == undefined)
                text = ActiveIntroPersonalityStrings[textId]
        }

        this.controls[controlName].bind({ Text: text });
    }

    executeCommand('', 'PlayChitChat', JSON.stringify({ ChitChatCode: chitChatCode, PersonalityID: ((this.index <= 4) ? DefaultPersonalityID : Page.personalityID), ProvideChitChatLength: true, SceneIndex: Math.floor(this.index) }));
}

// back button click handler
BaseScene.prototype.backButtonHandler = function(pressedButton) {
    var allowLeave = true;
            
    if (pressedButton == 0 && allowLeave) {
        this.Page.scrollPrevScene();
        executeCommand('', 'Navigating', JSON.stringify({ Direction: 'back', SceneFrom: this.sceneId }) );
    }
}

// next button click handler
BaseScene.prototype.nextButtonHandler = function(pressedButton, immidiateLeave) {
    if (typeof (immidiateLeave) == 'undefined') {
        immidiateLeave = false;
    }

    var allowLeave = this.canLeave() || immidiateLeave;

    if (pressedButton == 0 && allowLeave) {
        this.Page.scrollNextScene();
        executeCommand('', 'Navigating', JSON.stringify({ Direction: 'next', SceneFrom: this.sceneId }));
    }
}

// run scene's scroller (for C#)
BaseScene.prototype.runScroller = function(time){    
    if (this.controls.storyScroller) {
        this.controls.storyScroller.start(time);
    }
}

// sets timeout, accounting all timers on scene
BaseScene.prototype.setTimer = function(func, delay){
    this.timers.push(
        setTimeout(func, delay)
    );
}

// lock/unlock next button
BaseScene.prototype.setNextLock = function(isLocked){
    if (isLocked) {
        $(this.sceneId + ' .nextButton').addClass('navigationButtonLocked');        
    } else {
        $(this.sceneId + ' .nextButton').removeClass('navigationButtonLocked');
    }
    
    this.isNextLocked = isLocked;
}

// executes when animation on the dcene finished and buttons "next" gets unlocked
BaseScene.prototype.animationFinishHandler = function() {
    var scene = $(this.sceneId);
    scene.find('.playAgainLink').removeClass('hidden');
    scene.find('.bottomText').addClass('hidden');
    this.setNextLock(false);
}
