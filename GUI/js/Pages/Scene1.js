/*
 * Scene 1 class declaration
 * not deriving from BaseScene, because of differnet navigation
 */

function Scene1(Page){
    this.Page = Page;
    this.sceneId = '#scene1';
    
    this.controls = {};
    this.isSunAnimationOn = true;
}

Scene1.prototype.bindView = function(){
    if (this.isSunAnimationOn) {
        $('#scene1Sun').addClass('scene1SunAnimation');
    }
}

Scene1.prototype.bind = function(){

    $('#readyButton').click({
        scene: this
    }, function(e){
            if (e.button == 0) {
                e.data.scene.Page.scrollNextScene();
                executeCommand('', 'Navigating', JSON.stringify({ Direction: 'next', SceneFrom: e.data.scene.sceneId }) );
            }
    });
        
    setTimeout(function(){
        executeCommand('', 'PlayChitChat', JSON.stringify({ ChitChatCode: 1, PersonalityID: DefaultPersonalityID }));
    }, 4000);
    
    this.createAndBindControls();
    this.bindUI();
}

Scene1.prototype.createAndBindControls = function(){
    this.controls.flowers = [
        new Flower2('#flower21'),
        new Flower2('#flower22'),
        new Flower2('#flower23'),
        new Flower1('#flower11'),
        new Flower1('#flower12')
    ];
    
    for(var i = 0; i < this.controls.flowers.length; i++) {
        this.controls.flowers[i].bind();
    }
    
    if (this.Page.dataObj.RunningOnStartup) {
        this.controls.runOnStartupCheckBox = new CheckBox('#runOnStartupCheckBoxControl');
        this.controls.runOnStartupCheckBox.bind({
                Text: IntroResourcesStrings.RunOnStartupText,
                IsChecked: this.Page.dataObj.RunOnStartup
        });
    }
}

Scene1.prototype.bindUI = function(){
    // start intro animation
    
    $('#cloud1').css({
        left: '-30px',
	    top: '70px',
	    webkitTransform: 'scale(2)'
    });
    
   $('#cloud3').css({
        left: '-10px',
	    top: '180px',
	    webkitTransform: 'scale(2)'
    });
    
   $('#cloud2').css({
        left: '230px',
	    top: '80px',
	    webkitTransform: 'scale(1.2)'
   });
   
   $('#fan').css({        
	    webkitTransform: 'rotate(60deg)'
   });
   
   setTimeout(function(){
        $('#scene1StartAnim').css('background-color', 'transparent');
        $('#cloud1, #cloud2, #cloud3').hide();
   }, 2400);
   
   // hide all start animation elements
   setTimeout(function(){
        $('#scene1StartAnim').hide(100);
   }, 4200);
   
   if (this.Page.dataObj.RunningOnStartup) {
      $('#runOnStartupCheckBoxControl').click({
        scene: this
      }, function(e){
         executeCommand('', 'RunOnStartup', e.data.scene.controls.runOnStartupCheckBox.getChecked());
      });
   }
}

Scene1.prototype.unbind = function(){
    $('#readyButton').unbind('click');
    $('#scene1Sun').removeClass('scene1SunAnimation');
}

Scene1.prototype.unbindView = function() {
    
}
