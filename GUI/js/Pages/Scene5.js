extend(Scene5, BaseScene);

function Scene5(Page){
    Scene5.superclass.constructor.call(this);
    
    this.Page = Page;
    this.sceneId = "#scene5";
    
    this.textScrollerData = {
        ElementHTML: "#scene5Scroller",
        TextId: "Scene5Text",
        ChitChatCode: 5
    };
    
    // init personality click callback   
    var scene = this; 
    
    this.personalityClickHandler = function(miniPersonalityButton) {
        var index = miniPersonalityButton.index;
                
        var personalityObj = PersonalitiesList[ index ];
        Page.personalityID = personalityObj.ID;
        // get the rest of the string resources based on the personality
        ActiveIntroPersonalityStrings = eval('IntroResourceStringPersonality' + index.toString());
        
        scene.textScrollerData.ChitChatCode = 6;
        scene.index = 4.5;
        scene.textScrollerData.TextId = personalityObj.TextId;        
        scene.createAndBindControls();
    }
}

Scene5.prototype.bind = function(){
    Scene5.superclass.bind.call(this);
    
    // bind personalities
    var chooseChatmateContainer = $('#chooseChatmateContainer').empty();
    this.controls.personalities = [];
    
    for(var i = 0; i < PersonalitiesList.length; i++) {
        // create container for miniPersonality button
        var personalityContainer = $('<div class="miniPersonalityControl"></div>');
        chooseChatmateContainer.append(personalityContainer);
        
        // create and bind minipersonality button
        var personality = new MiniPersonalityButton( personalityContainer[0] );
        
        if (PersonalitiesList[i].ID == this.Page.personalityID) {
            personalityContainer.addClass('miniPersonalityControlSelected');
        }
        
        personality.bind( PersonalitiesList[i] );
        personality.setClickCallback(this.personalityClickHandler);
        // save perosonality index in list
        personality.index = i;
        this.controls.personalities[i] = personality;
    }
        
    $('.miniPersonalityControl').click(function(e){
        if (e.button == 0) {
            $('.miniPersonalityControlSelected').removeClass('miniPersonalityControlSelected');
            $(this).addClass('miniPersonalityControlSelected');
        }
    })
}

Scene5.prototype.canLeave = function(){
    if (Page.personalityID != DefaultPersonalityID) {
        return true;
    } else {
        return false;
    }
}

Scene5.prototype.unbind = function(){
    
    Scene5.superclass.unbind.call(this);
    
    this.textScrollerData = {
        ElementHTML: "#scene5Scroller",
        TextId: "Scene5Text",
        ChitChatCode: 5
    }
    $('.miniPersonalityControl').unbind('click');
    this.index = 4;
}
