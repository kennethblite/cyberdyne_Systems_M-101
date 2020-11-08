extend(Scene8, BaseScene);

function Scene8(Page) {
    Scene8.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene8";
    this.textScrollerData = {};
}

Scene8.prototype.bind = function() {
    this.init();
    Scene8.superclass.bind.call(this);
    
    this.startDemo1();
}

Scene8.prototype.init = function() {
    this.textScrollerData = {
        ElementHTML: "#scene8Scroller",
        TextId: "Scene8Text",
        ChitChatCode: 19
    }

    this.setNextLock(true);
}

Scene8.prototype.createAndBindControls = function() {
    Scene8.superclass.createAndBindControls.call(this);
}

Scene8.prototype.unbind = function() {
    Scene8.superclass.unbind.call(this);

    var scene = $('#scene8');
    scene.find('#callout0, #callout1, #callout2, #callout3').css('visibility', 'hidden');
    scene.find('#friendContainer').css('display', 'none');
    scene.find('#chatmanConversationControl').css('display', 'none');
    scene.find('#conversationTextBox').val('');
}

Scene8.prototype.startDemo1 = function() {
    var scene = $('#scene8');
    var sceneObj = this;

    // changing images
    var textBox = scene.find('#conversationTextBox');
    var delay = 100;
    var k = 0;

    // change texts
    scene.find('#Scene8CC1Text').html(ActiveIntroPersonalityStrings['Scene8CC1Text']);
    scene.find('#Scene8CC2Text').html(ActiveIntroPersonalityStrings['Scene8CC2Text']);

    this.setTimer(function() {
        sceneObj.setTextScroller(19, 'Scene8Text');
        scene.find('#chatmanConversationControl').fadeIn(1000);
    }, delay);

    delay += 6000;

    this.setTimer(function() {
        sceneObj.setTextScroller(191, 'Scene8Text0');
    }, delay);

    delay += 2900;
    this.setTimer(function() {
        textBox.val(scene.find('#callout' + 0 + ' .messageContainer').html());
    }, delay);

    delay += 2000;
    this.setTimer(function() {
        textBox.val('');
        scene.find('#callout' + 0).css('visibility', 'visible');
        scene.find('#callout' + 1).css('visibility', 'visible');

        // play chit chat        
        executeCommand('', 'PlayChitChat', JSON.stringify({ ChitChatCode: 20, PersonalityID: Page.personalityID, ProvideChitChatLength: true, SceneIndex: sceneObj.index }));
    }, delay);

    delay += 2400;
    this.setTimer(function() {
        sceneObj.setTextScroller(21, 'Scene8Text1');
    }, delay);

    delay += 3000;
    this.setTimer(function() {
        textBox.val(scene.find('#callout' + 2 + ' .messageContainer').html());
    }, delay);

    delay += 4500;
    this.setTimer(function() {
        textBox.val('');
        scene.find('#callout2').css('visibility', 'visible');
        scene.find('#callout3').css('visibility', 'visible');

        // play chit chat
        sceneObj.setTextScroller(22, null);
    }, delay);


    // start demo 2    
    this.setTimer(function() {
        sceneObj.startDemo2();
    }, delay + 3700);
}

Scene8.prototype.startDemo2 = function() {
    var scene = $('#scene8');
    var sceneObj = this;

    var delays = [0, 1000, 700, 16000];
    var animations = [
    // hide conversation
        function() {
            scene.find('#chatmanConversationControl').fadeOut(500);
        },
        function() {
            scene.find('#friendContainer').fadeIn(500);

            // play another chit chat                        
            sceneObj.setTextScroller(61, 'Scene8Text3');
        },
    // friendship bar animation 
        function() {
            var images = [0, 1, 2, 5, 8, 5, 2, 1, 0], heights = [170, 150, 130, 110, 90, 110, 130, 150, 170];
            var k = 0, delay = 100;

            for (var i = 0; i < images.length; i++) {
                sceneObj.setTimer(function() {
                    // change image
                    scene.find('#chatmanImage')[0].src = 'images/Intro/' + images[k] + '.png';
                    // change bar's height and color
                    scene.find('#friendshipBar').css({
                        height: heights[k],
                        backgroundColor: LevelColor.getColor(9 - images[k], 9)
                    });

                    ++k;
                }, delay);

                delay += 1300;
            }
        },

    // unlock "NEXT->" button
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
