extend(Scene9, BaseScene);

function Scene9(Page){
    Scene4.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene9";
}

Scene9.prototype.bind = function(){
    this.init();
    Scene9.superclass.bind.call(this);  
    
    this.startDemo();
}

Scene9.prototype.init = function() {
    this.textScrollerData = {
        ElementHTML: "#scene9Scroller",
        TextId: "Scene9Text",
        ChitChatCode: 10
    }
    
    this.setNextLock(true);
}

Scene9.prototype.createAndBindControls = function() {   
    Scene9.superclass.createAndBindControls.call(this);
}

Scene9.prototype.unbind = function(){
    Scene9.superclass.unbind.call(this);
    
    var scene = $('#scene9');
    scene.find('#note').css('visibility', 'hidden');
    scene.find('.messageDemo2, .messageDemo1').css('visibility', 'hidden');
}

Scene9.prototype.startDemo = function() {
    var scene = $('#scene9');
    var sceneObj = this;

    // delays, to each scene relativelyto previous scene
    var delays = [500, 2000, 2000, 2000, 2500, 5000];
    var blinkTimer;
    var animations = [
        function() {
            scene.find('#messageTyping').css('visibility', 'visible');
        },
        function() {
            scene.find('#messageTyping').css('visibility', 'hidden');
            scene.find('.messageDemo1').css('visibility', 'visible');
        },
        function() {
            scene.find('#jakeWrittingText').css('visibility', 'visible');
        },
        function() {
            scene.find('#jakeWrittingText').css('visibility', 'hidden');
            scene.find('.messageDemo2').css('visibility', 'visible');
        },
        function() {
            scene.find('#note').css('visibility', 'visible');

            scene.find('#wkendWord').css('font-weight', 'bold');
            blinkTimer = setInterval(function() {
                scene.find('#wkendWord').toggleClass('hidden');
            }, 250);

            sceneObj.setTextScroller(11, '');
        },
        function() {
            clearTimeout(blinkTimer);
            scene.find('#wkendWord').removeClass('hidden');            
            sceneObj.animationFinishHandler();
        }
    ]

    var delay = 0, timer;
    for (var i = 0; i < animations.length; i++) {
        delay += delays[i];
        this.setTimer(animations[i], delay);
    }
}
