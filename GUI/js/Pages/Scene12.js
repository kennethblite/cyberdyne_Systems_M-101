extend(Scene12, BaseScene);

function Scene12(Page){
    Scene12.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene12";
    
    this.textScrollerData = {
        ElementHTML: "#scene12Scroller",
        TextId: "Scene12Text",
        ChitChatCode: 26
    }
}

Scene12.prototype.bind = function(){
    this.textScrollerData = {
        ElementHTML: "#scene12Scroller",
        TextId: "Scene12Text",
        ChitChatCode: 28
    }
    this.setNextLock(true);

    Scene12.superclass.bind.call(this);     
        
    this.startDemo();
}

Scene12.prototype.unbind = function(){
    Scene12.superclass.unbind.call(this);
    
    var scene = $('#scene12');
    scene.find('#imagesContainer3').css({ webkitAnimation: 'none' });    
    scene.find('#reminderArea, #remindersButton').css('display', 'none');    
}

Scene12.prototype.startDemo = function() {
    var scene = $('#scene12');
 
    var delays = [100, 11000, 2000, 2000, 2500];
    var sceneObj = this;
    
    var animations = [
        function(){
            scene.find('#imagesContainer3').css({
                webkitAnimation: 'slidingImages3 10s linear'
            });
        },
        function(){
            scene.find('#reminderArea, #remindersButton').fadeIn(500);

            sceneObj.setTextScroller(29, 'Scene12Text1');
        },
        function(){        
            scene.find('#datePickerContainer').css({
                webkitAnimation: 'buttonScaling 0.5s 2 linear'
            });
            
            scene.find('#timeImage').css({
                webkitAnimation: 'buttonScaling 0.5s 2 linear',
                webkitAnimationDelay: '0.25s'
            });
        },
        function(){            
            scene.find('#sunImage').css({
                webkitAnimation: 'buttonScaling 0.5s 2 linear'
            });
            
            scene.find('#moonImage').css({
                webkitAnimation: 'buttonScaling 0.5s 2 linear',
                webkitAnimationDelay: '0.25s'
            });
        },        
        function() {            
            sceneObj.animationFinishHandler();
        }
    ]
    
    var delay = 0;
    for (var i = 0; i < animations.length; i++) {
        delay += delays[i];
        this.setTimer(animations[i], delay);
    }          
}
