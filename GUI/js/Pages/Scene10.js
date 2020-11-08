extend(Scene10, BaseScene);

function Scene10(Page){
    Scene10.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene10";
    this.textScrollerData = {};
}


Scene10.prototype.bind = function(){
    this.init();
    Scene10.superclass.bind.call(this);
            
    this.startDemo1();
}

Scene10.prototype.init = function() {    
    this.textScrollerData = {
        ElementHTML: "#scene10Scroller",
        TextId: "Scene10Text",
        ChitChatCode: 24
    }
    
    this.setNextLock(true);
}

Scene10.prototype.createAndBindControls = function() {   
    Scene10.superclass.createAndBindControls.call(this);
}

Scene10.prototype.unbind = function(){
    Scene10.superclass.unbind.call(this);
    
    var scene = $('#scene10');    
    
    scene.find('#chatmanBrainpower').css('display', 'block');
    scene.find('#newWordsButton, #newChitChatButton').css({ webkitAnimation: 'none' })
    scene.find('#audioArea, #chitChatContainer').css('display', 'none');
    scene.find('#timeProgress').css({ width: '0' });
    scene.find('#cursor').css({ left: '', top: '' });
}

Scene10.prototype.startDemo1 = function() {
    var scene = $('#scene10');
    var timer;

    // growing buttons
    this.setTimer(function() {
        scene.find('#newWordsButton').css({
            webkitAnimation: 'buttonScaling 0.4s linear'
        });
    }, 800);

    this.setTimer(function() {
        scene.find('#newChitChatButton').css({
            webkitAnimation: 'buttonScaling 0.4s linear'
        });
    }, 1200);

    // changing images
    var imageContainer = scene.find('#brainpowerImage');
    var imagesOrder = [0, 2, 3, 4, 5];
    var delay = 0;
    var k = 0;

    // changing numbers of chit chats and words
    var chitChatNumbers = [4, 5, 6, 7, 8];
    var newWordsNumbers = [2, 3, 4, 5, 6];
    var k2 = 0;

    for (var i = 0; i < imagesOrder.length; i++) {
        this.setTimer(function() {
            imageContainer.css({ background: 'url(images/Brainpower/' + imagesOrder[k] + '.png) no-repeat' });
            
            scene.find('#newWordsNumber').html(newWordsNumbers[k]);
            scene.find('#bar2Level').css({ width: newWordsNumbers[k] * 10 + '%', backgroundColor: LevelColor.getColor(newWordsNumbers[k], 10) });
            scene.find('#newChitChatNumber').html(chitChatNumbers[k]);
            scene.find('#bar1Level').css({ width: chitChatNumbers[k] * 10 + '%', backgroundColor: LevelColor.getColor(chitChatNumbers[k], 10) });

            ++k;

        }, delay);

        delay += 1000;
    }

    // changing score
    var score = 125;
    this.setTimer(function() {
        var k = 0;
        for (var i = 0; i < 126; i++) {
            setTimeout(function() {
                scene.find('#scoreText').html(score + k);
                ++k;
            }, 10 * i);
        }
    }, 5000);

    // start demo 2
    var sceneObj = this;
    this.setTimer(function() {
        sceneObj.startDemo2();
    }, 6200);
}

Scene10.prototype.startDemo2 = function() {    
    
    var scene = $('#scene10');    
    
    var blinkTimer;
    var sceneObj = this;
    
    var delays = [0, 1000, 500, 300, 500, 1000, 1300];    
    var animations = [
        // blink new chit chat button
        function(){
            blinkTimer = setInterval(function(){
                scene.find('#newChitChatButton').toggleClass('hidden');
            }, 300);
        },
        // hide chatman brainpower
        function(){
            clearInterval(blinkTimer);
            scene.find('#newChitChatButton').removeClass('hidden');
            scene.find('#chatmanBrainpower').fadeOut(500);
        },
        // show audio control
        function(){
            scene.find('#audioArea').fadeIn(500);
            
            // play another chit chat            
            sceneObj.setTextScroller(25, 'Scene10Text1');            
        },
        //grow record Button
        function() {            
            scene.find('#recordButton').css({  
                webkitAnimation: 'buttonScaling 0.8s linear'
            });
        },
        // animate timeline
        function(){        
           scene.find('#timeProgress').css({
              width: '70%'
           });
        },
        // blink save button
        function(){        
            blinkTimer = setInterval(function(){
                scene.find('#saveButton').toggleClass('hidden');
            }, 300);
        },
        // stop save button blinking
        function(){
            clearInterval(blinkTimer);
            scene.find('#saveButton').removeClass('hidden');
        }
    ]
    
    var delay = 0;
    for (var i = 0; i < animations.length; i++) {
        delay += delays[i];
        this.setTimer(animations[i], delay);
    }
    
        // start demo 2
    var sceneObj = this;
    this.setTimer(function(){
        sceneObj.startDemo3();
    }, 5200);
}

Scene10.prototype.startDemo3 = function() {
    var scene = $('#scene10');
    var sceneObj = this;
    
    var blinkTimer;    
    
    var delays = [0, 500, 500, 4000];    
    var animations = [
        // hide audio area
        function(){
            scene.find('#audioArea').fadeOut(500);
        },
        // show action button
        function(){
            scene.find('#chitChatContainer').fadeIn(500);
        },
        // move cursor to share button
        function() {
           sceneObj.setTextScroller(251, 'Scene10Text2');    
           
           scene.find('#cursor').css({  
             left: this.isRTL ? -44 : 38,
             top: 52
           });
        },        
        function() {            
            sceneObj.animationFinishHandler();
        }
    ];
    
    var delay = 0;
    for (var i = 0; i < animations.length; i++) {
        delay += delays[i];
        this.setTimer(animations[i], delay);        
    }    
}
