function Flower2(container) {
    this.container = container;
    this.flower2Container = null;
}

Flower2.prototype.bind = function() {
    this.flower2Container = $( $("#flower2Template").html() );
    
    $(this.container).empty()
                     .append(this.flower2Container); 
                     
    this.start();                                      
}

Flower2.prototype.start = function(){
    this.flower2Container.find('.flower2Leaves')
        .css({
            webkitAnimation: 'flower2spin 10s infinite linear'
        });
}
