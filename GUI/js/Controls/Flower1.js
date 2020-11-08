function Flower1(container) {
    this.container = container;
    this.flower1Container = null;
}

Flower1.prototype.bind = function() {
    this.flower1Container = $( $("#flower1Template").html() );
    
    $(this.container).empty()
                     .append(this.flower1Container); 
                     
    this.start();                                      
}

Flower1.prototype.start = function(){
    this.flower1Container.find('.flower1Leaves')
        .css({
            webkitAnimation: 'flower1spin 10s infinite linear'
        });
        
    this.flower1Container.find('.flower1Inner')
        .css({
            webkitAnimation: 'flower1spin1 5s infinite linear'
        });
}
