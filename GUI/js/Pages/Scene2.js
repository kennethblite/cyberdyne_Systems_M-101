/*
 * Scene 2 class declaration
 * not deriving from BaseScene, because of differnet navigation
 */

function Scene2(Page){
    this.Page = Page;
    this.sceneId = '#scene2';
    this.controls = {};
    
    this.textScrollerData = {
        ElementHTML: "#scene2StoryScroller",
        TextId: "Scene2StoryText",
        ChitChatCode: 3
    }
    
    this.timer = null;
    this.isSunAnimationOn = true;
}

Scene2.prototype.bindView = function(){
    if (this.isSunAnimationOn) {
        $('#windTurner').addClass('scene2WindTurnerAnimation');       
    }
    
    // Causes bugs on MAC
    /*$('#whiteCirclesLargeScene2').css({
        webkitAnimation: 'circlesAnim 7s infinite ease-out'
    });
    
    $('#whiteCirclesSmallScene2').css({
        webkitAnimation: 'circlesSmallAnim 7s infinite ease-out',
        webkitAnimationDelay: '5s'
    });*/
}

Scene2.prototype.bind = function(){
    executeCommand('', 'CanHearPlaying', '');
    $('#scene2Text').show();
    
    // for sure, to avoid some problems with repainting
    $('#scenesContainer').css('left', '-658px');
    
    $('#yesButton').one('click', function(e){
            if (e.button == 0) {
                executeCommand('', 'CanMovePlaying', '');
                
                /* redo!! */
                $('#scene2Text1').show();
                $('#scene2Text').hide();
                
                // slide down buttons and show them again
                var buttonContainer = $('#scene2ButtonContainer');                
                buttonContainer.css('top', '326px');
                
                setTimeout(function(){
                    buttonContainer.css('top', '230px');
                }, 500);
                
                // set another action to buttons
                $(this).one('click', function(e){
                    if (e.button == 0) {                        
                        $('#scene2Text1, #scene2Text').hide(); 
                        
                        executeCommand('', 'CanMoveYes', '' );
                        executeCommand('', 'PlayChitChat', JSON.stringify({ ChitChatCode: 2, PersonalityID: DefaultPersonalityID, ProvideChitChatLength: true, SceneIndex: 1 }) );
                        
                        buttonContainer.css('top', '326px');
                        $('#skipButton').css('visibility', 'visible');
                    }
                });
                
                $('#noButton').unbind('click')
                              .click(function(e){
                                  if (e.button == 0) {
                                      executeCommand('', 'CanMoveNo', '');
                                  }
                              });
            }
        });
        
    $('#noButton').click(function(e){
        if (e.button == 0) {
            executeCommand('', 'CanHearNo', '');         
        }
    });

    $('#skipButton').click({
        scene: this,
    }, function(e){
        if (e.button == 0) {
            e.data.scene.Page.scrollNextScene();
            executeCommand('', 'Navigating', JSON.stringify({ Direction: 'next', SceneFrom: e.data.scene.sceneId }) );
        }
    });
    
   // show buttons
   $('#scene2ButtonContainer').css('top', '230px');
    
    
   this.createAndBindControls();
}

Scene2.prototype.createAndBindControls = function(){
    var controlName = 'storyScroller';
    this.controls[controlName] = new TextScroller(this.textScrollerData.ElementHTML, controlName);
    this.controls[controlName].bind( {Text: IntroResourcesStrings[this.textScrollerData.TextId], ChitChatCode: this.textScrollerData.ChitChatCode, PersonalityID: Page.personality } );
}

Scene2.prototype.unbind = function(){
    $('#yesButton, #noButton, #skipButton').unbind('click');
    $('#scene2ButtonContainer').show();
    $('#skipButton').css('visibility', 'hidden');
    clearTimeout(this.timer);
    
    /*-redo-*/
    $('#scene2Text1, #scene2Text').hide(); 
    $('#windTurner').removeClass('scene2WindTurnerAnimation');
    $('#whiteCirclesLargeScene2, #whiteCirclesSmallScene2').css({
        webkitAnimation: ''
    });
}

// run scene's scroller
Scene2.prototype.runScroller = function(time){
    if (this.controls.storyScroller) {
        this.controls.storyScroller.start(time);
        
        var scene2 = this;
        
        this.timer = setTimeout(function() {
            scene2.Page.scrollNextScene();
        }, time);
    }
}

Scene2.prototype.unbindView = function(){    
}
