extend(Scene4, BaseScene);

function Scene4(Page){
    Scene4.superclass.constructor.call(this);
    
    this.Page = Page;
    this.sceneId = "#scene4";
    
    this.gender = null;
    
    this.textScrollerData = {
        ElementHTML: "#scene4Scroller",
        TextId: "Scene4Text",
        ChitChatCode: 4
    }
}

Scene4.prototype.bind = function(){
    Scene4.superclass.bind.call(this);
        
    this.gender = Page.dataObj.Gender;
    
    $('#boyButton').click({
        scene: this
    }, function(e){
        var scene = e.data.scene;
        
        scene.gender = "Male";
        var event = jQuery.Event("click");
        event.button = 0;
        $(scene.sceneId + ' .nextButton').trigger(event);
    });
    
    $('#girlButton').click({
        scene: this
    }, function(e){
        var scene = e.data.scene;
               
        scene.gender = "Female";
        var event = jQuery.Event("click");
        event.button = 0;
        $(scene.sceneId + ' .nextButton').trigger(event);
    });
    
    // show Buttons
    $('#scene4ButtonContainer').css('top', '243px');
}

Scene4.prototype.createAndBindControls = function(){
    Scene4.superclass.createAndBindControls.call(this);
    
    this.controls.flowers = [
        new Flower3('#flower31'),
        new Flower3('#flower32')
    ];
    
    for(var i = 0; i < this.controls.flowers.length; i++) {
        this.controls.flowers[i].bind();
    }
}

Scene4.prototype.canLeave = function(){
    
    if (this.gender || this.Page.dataObj.WasIntroPreviouslyCompleted) {
        return true;
    } else {
        return false;
    }
}

Scene4.prototype.unbind = function(){
    Scene4.superclass.unbind.call(this);
    $('#boyButton, #girlButton').unbind('click');
    $('#scene4ButtonContainer').css('top', '330px');
}
