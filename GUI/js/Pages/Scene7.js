extend(Scene7, BaseScene);

function Scene7(Page){
    Scene4.superclass.constructor.call(this);

    this.Page = Page;
    this.sceneId = "#scene7";
    
      this.textScrollerData = {
        ElementHTML: "#scene7Scroller",
        TextId: "Scene7Text",
        ChitChatCode: 9
    }
}

Scene7.prototype.bind = function() {
    Scene7.superclass.bind.call(this);
}

Scene7.prototype.createAndBindControls = function() {   
    Scene7.superclass.createAndBindControls.call(this);
    
    this.controls.flowers = [
        new Flower4('#flower41'),
        new Flower4('#flower42')
    ];
    
    for(var i = 0; i < this.controls.flowers.length; i++) {
        this.controls.flowers[i].bind();
    }
}

Scene7.prototype.unbind = function(){
    Scene7.superclass.unbind.call(this);
}
