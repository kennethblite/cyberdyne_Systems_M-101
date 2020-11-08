function WhiteBall(container) {
    this.container = container;
    this.whiteBallContainer = null;
}

WhiteBall.prototype.bind = function() {
    this.whiteBallContainer = $( $("#whiteBallTemplate").html() );
    
    $(this.container).empty()
                     .append(this.whiteBallContainer); 
                     
    this.start();                                      
}

WhiteBall.prototype.start = function(){
    var whiteBall = this.whiteBallContainer.find('.whiteBall').css({
        webkitAnimation: 'ballRotate  1s infinite linear',        
    });;    
}
