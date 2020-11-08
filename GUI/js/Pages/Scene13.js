extend(Scene13, BaseScene);

function Scene13(Page){
    Scene13.superclass.constructor.call(this);
    
    this.Page = Page;
    this.sceneId = "#scene13";
        
    this.textScrollerData = {
        ElementHTML: "#scene13Scroller",
        TextId: "Scene13Text",
        ChitChatCode: 14
    }

    this.myChatmanLinkAnim = null;
}

// overrides base class function
Scene13.prototype.bindView = function() {
    Scene13.superclass.bindView.call(this);

    // animations

    $('#scene13MainImage').css({
        webkitAnimation: 'ballRotate  10s infinite linear'// animation from scene 6
    });

    $('#whiteBall131').css({
        webkitAnimation: 'ballRotate  2s infinite linear'
    });

    $('#whiteBall132').css({
        webkitAnimation: 'ballRotate  2.1s infinite linear',
        webkitAnimationDelay: '0.7s'
    });

    $('#whiteBall133').css({
        webkitAnimation: 'ballRotate  2.2s infinite linear',
        webkitAnimationDelay: '1.1s'
    });

    $('#confetti1').css({
        webkitAnimation: 'confettiFalling  2s infinite linear'
    });

    $('#confetti2').css({
        webkitAnimation: 'confettiFalling  2s infinite linear',
        webkitAnimationDelay: '0.7s'
    });

    $('#confetti3').css({
        webkitAnimation: 'confettiFalling  2s infinite linear',
        webkitAnimationDelay: '1.4s'
    });

    var myChatmanLink = $('#myChatmanImage', this.sceneId);

    this.myChatmanLinkAnim = setInterval(function() {
        myChatmanLink.css({
            webkitAnimation: 'buttonScaling 0.4s linear'
        });

        setTimeout(function() {
            myChatmanLink.css({
                webkitAnimation: ''
            });
        }, 400);
    }, 4000);
}

Scene13.prototype.bind = function(){
    Scene13.superclass.bind.call(this);  
}

Scene13.prototype.unbind = function() {
    Scene13.superclass.unbind.call(this);
    clearInterval(this.myChatmanLinkAnim);
}

Scene13.prototype.nextButtonHandler = function(){
}
