function Flower4(container) {
    this.container = container;
    this.flower4Container = null;
}

Flower4.prototype.bind = function() {
    this.flower4Container = $( $("#flower4Template").html() );
    
    $(this.container).empty()
                     .append(this.flower4Container); 
                     
    this.start();                                      
}

Flower4.prototype.start = function(){
    this.flower4Container.find('.flower4Body')
        .css({
            webkitAnimation: 'flower4spin 10s infinite linear'
        });
        
    this.flower4Container.find('.flower4Inner')
        .css({
            webkitAnimation: 'flower4spinBack 4s 0.7s infinite linear'
        });
}
