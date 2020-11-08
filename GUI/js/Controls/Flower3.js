function Flower3(container) {
    this.container = container;
    this.flower3Container = null;
}

Flower3.prototype.bind = function() {
    this.flower3Container = $( $("#flower3Template").html() );
    
    $(this.container).empty()
                     .append(this.flower3Container); 
                     
    this.start();                                      
}

Flower3.prototype.start = function(){
    this.flower3Container.find('.flower3Inner')
        .css({
            webkitAnimation: 'flower3spin 10s infinite linear'
        });
}
