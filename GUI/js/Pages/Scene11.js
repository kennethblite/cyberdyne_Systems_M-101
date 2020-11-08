extend(Scene11, BaseScene);

function Scene11(Page){
    Scene4.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene11";
    
    this.textScrollerData = {
        ElementHTML: "#scene11Scroller",
        TextId: "Scene11Text",
        ChitChatCode: 26
    }
}

Scene11.prototype.bind = function(){
    this.textScrollerData = {
        ElementHTML: "#scene11Scroller",
        TextId: "Scene11Text",
        ChitChatCode: 26
    }
    this.setNextLock(true);

    Scene11.superclass.bind.call(this);     
        
    this.startDemo();
}

Scene11.prototype.createAndBindControls = function() {   
    Scene11.superclass.createAndBindControls.call(this);
    

}

Scene11.prototype.unbind = function(){
    Scene11.superclass.unbind.call(this);
    
    var scene = $('#scene11');
    scene.find('#imagesContainer1, #imagesContainer2').css({
        webkitAnimation: 'none'
    });
    scene.find('#arcadeLogo').css('display', 'none');
}

Scene11.prototype.startDemo = function() {
    var scene = $('#scene11');
    var sceneObj = this;
    
    var delays = [0, 1000, 4000, 1200, 5500, 1000];    
    var animations = [        
        function(){
            scene.find('#arcadeLogo').fadeIn(800);
        },

        function(){
            // run first sliding sequence of images
            scene.find('#imagesContainer1').css({
                webkitAnimation: 'slidingImages1 4s linear'
            }); 
        },

        function(){            
            scene.find('#arcadeLogo').fadeOut(800);
        },

        function() {
            // second sliding sequence of images 
            scene.find('#imagesContainer2').show().css({
                webkitAnimation: 'slidingImages2 5.5s linear',            
            });
            
            // play chit chat and scroll text
            sceneObj.setTextScroller(27, 'Scene11Text1');
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
