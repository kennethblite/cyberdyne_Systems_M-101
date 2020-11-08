extend(Scene6, BaseScene);

function Scene6(Page){
    Scene6.superclass.constructor.call(this);
    
    this.Page = Page;
    this.sceneId = "#scene6";
    
    this.textScrollerData = {
        ElementHTML: "#scene6Scroller",
        TextId: "Scene6Text",
        ChitChatCode: 7
    }
}

Scene6.prototype.bindView = function() {
    // set image for current personality
    var miniPersonalityButtonControl = new MiniPersonalityButton('#personalityIcon');
    var personalityObj = null;

    for (var i = 0; i < PersonalitiesList.length; i++) {
        if (PersonalitiesList[i].ID == Page.personalityID) {
            personalityObj = PersonalitiesList[i];
            break;
        }
    }

    miniPersonalityButtonControl.bind(personalityObj);
}

Scene6.prototype.bind = function() {
    Scene6.superclass.bind.call(this);

    // focus on textbox
    $('#chatmanNameTextBox').focus();

    this.bindUI();
}

// overriden in BaseScene
Scene6.prototype.canLeave = function(){

    if (jQuery.trim( $('#chatmanNameTextBox').val() ) != '') {
        return true;
    } else {
        return false;
    }
}

Scene6.prototype.bindUI = function(){
    $('#ballsOrange').css({
        webkitAnimation: 'ballsFalling  2s infinite linear'
    });
    
    $('#ballsBlue').css({
        webkitAnimation: 'ballsFalling  2s infinite linear',
        webkitAnimationDelay: '1s'
    });
    
    $('#whiteBall1').css({
        webkitAnimation: 'ballRotate  2s infinite linear'  
    });
    
    $('#whiteBall2').css({
        webkitAnimation: 'ballRotate  2.1s infinite linear',
        webkitAnimationDelay: '0.7s'
    });
    
    $('#whiteBall3').css({
        webkitAnimation: 'ballRotate  2.2s infinite linear',
        webkitAnimationDelay: '1.1s'
    });

    $('#chatmanNameTextBox').removeAttr('disabled');
}

Scene6.prototype.createAndBindControls = function(){
    Scene6.superclass.createAndBindControls.call(this);
}


// next button click handler: overriden from BaseScene
Scene6.prototype.nextButtonHandler = function(pressedButton) {
    var chatmanNameTextBox = $('#chatmanNameTextBox');
    if ($.trim(chatmanNameTextBox.val()) == "")
        return;
    // disallow to change name
    chatmanNameTextBox.attr('disabled', 'true');
    
    executeCommand('', 'PlayChitChat', JSON.stringify({ ChitChatCode: 8, PersonalityID: Page.personalityID }));
    this.unbind();

    var scene = this;
    setTimeout(function() {
        Scene6.superclass.nextButtonHandler.call(scene, 0);
    }, 4500);
}

Scene6.prototype.unbind = function() {
    Scene6.superclass.unbind.call(this);
}

Scene6.prototype.unbindView = function() {
    $('#personalityIcon').empty();
}
