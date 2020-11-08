/*
 * Scene 3 class declaration
 * requirements - BaseScene
 */
extend(Scene3, BaseScene);

function Scene3(Page){
    Scene3.superclass.constructor.call(this);
    
    this.Page = Page;
    this.sceneId = "#scene3";    
    this.allowLeave = true;
    
    
    this.textScrollerData = {
        ElementHTML: "#scene3Scroller",
        TextId: "Scene3Text",
        ChitChatCode: 3
    }
}

Scene3.prototype.bind = function(){
    Scene3.superclass.bind.call(this);    
    
    // focus on textbox
    $('#nameTextBox').focus();
    
    this.bindUI();
}

Scene3.prototype.bindUI = function(){   
    $('#whiteCirclesLarge').css({
        webkitAnimation: 'circlesAnim 7s infinite ease-out',
    });
    
    $('#whiteCirclesSmall').css({
        webkitAnimation: 'circlesSmallAnim 7s infinite ease-out',
        webkitAnimationDelay: '5s'
    });
    
    $('#ballonOrange').css({
        webkitAnimation: 'balooonsFly 2s infinite linear',
        webkitAnimationDelay: '1s'
    });
    
    $('#ballonOrangeSmall').css({
        webkitAnimation: 'balooonsFly 2s infinite linear',
        webkitAnimationDelay: '1.2s'
    })
    
    $('#ballonRed').css({
        webkitAnimation: 'balooonsFly 2s infinite linear',
    });
    
    $('#ballonRedSmall1').css({
        webkitAnimation: 'balooonsFly 2s infinite linear',
        webkitAnimationDelay: '0.3s'
    });
    
    $('#ballonRedSmall2').css({
        webkitAnimation: 'balooonsFly 2s infinite linear',
        webkitAnimationDelay: '1s'
    });
    
    $('#nameTextBox').removeAttr('disabled');
}

Scene3.prototype.canLeave = function(){

    if (jQuery.trim( $('#nameTextBox').val() ) != '') {
        return true;
    } else {
        return false;
    }
}

Scene3.prototype.unbind = function(){
    Scene3.superclass.unbind.call(this);
    
    $('#whiteCirclesLarge, #whiteCirclesSmall, #ballonRed, #ballonRedSmall1, #ballonRedSmall2')
        .css({
            webkitAnimation: ''
        });
        
    $('#nameTextBox').attr('disabled', 'true');
}
