// inherite from Base Control
extend(Baloon2, BaseControl);

function Baloon2(container) {
    Baloon2.superclass.constructor.apply(this, arguments);    
}

Baloon2.prototype.bind = function() {
    Baloon2.superclass.bind.call(this);

    this.start();
}

Baloon2.prototype.start = function(){
    this.control.find('.baloonBig')
        .css({
            webkitAnimation: 'baloonBigFly 10s infinite linear'
        });

    this.control.find('.baloonSmall')
        .css({
            webkitAnimation: 'baloonSmallFly 5s infinite linear'
        });
}
