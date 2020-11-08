/* Function-constructor for ChatmanFigure objects */
function ChatmanFigure(container, name) {
    this.container = container;
    this.chatmanFigureContainer = null;  
    this.name = name;
    this.selectedTool = 0;
    this.commandParams = '';
        
    this.bodyPartClickCallback = null;
    
    // chatman leds (red circles, that make mouth movements)
    // cached in var for persormance optimization
    this.leds = null;
}

ChatmanFigure.prototype.bind = function(dataObj) {
    this.chatmanFigureContainer = $( $('#chatmanFigureTemplate').html() );
    $(this.container).empty()
                     .append(this.chatmanFigureContainer);
                     
    this.createLeds();
    this.bindUI();
}

ChatmanFigure.prototype.createLeds = function() {
    var ledsContainer = this.chatmanFigureContainer.find('.mouth');
    
    for(var i = 0; i < 24; i++) {
        ledsContainer.append('<div class="chatmanLed"></div>');
    }
    
    this.leds = this.chatmanFigureContainer.find('.chatmanLed');
}

ChatmanFigure.prototype.bindUI = function() {
    var figure = this;

    this.chatmanFigureContainer.find('[clickCommand]')
         .click(function(e) {
             var command = this.getAttribute('clickCommand');
             if (e.button == 0 && command) {
                 if (figure.commandParams) {
                     executeCommand(figure.name, command, '' + figure.commandParams);
                 }
                 
                 // invoke click callback
                 if (figure.bodyPartClickCallback) {
                     figure.bodyPartClickCallback(e, BodyParts[$(this).attr('bodyPart')]);
                 }
             }
         });

}

ChatmanFigure.prototype.setEyes = function(position) {
    if (position < EyesPositions.length) {
        this.chatmanFigureContainer.find('.eyelidsContainer').css('height', EyesPositions[position]);    
    }        
}

ChatmanFigure.prototype.setHands = function(position) {
    if (position < HandsPositions.length) {
        this.chatmanFigureContainer.find('.leftHand').css('-webkit-transform', 'rotate(' + HandsPositions[position] + 'deg)');
        this.chatmanFigureContainer.find('.rightHand').css('-webkit-transform', 'rotate(' + (-HandsPositions[position]) + 'deg)');
    }
}

ChatmanFigure.prototype.setEars = function(position) {  
    if (position < EarsPositions.length) {
        this.chatmanFigureContainer.find('.leftEar').css('-webkit-transform', 'rotate(' + EarsPositions[position] + 'deg)');
        this.chatmanFigureContainer.find('.rightEar').css('-webkit-transform', 'rotate(' + (-EarsPositions[position]) + 'deg)');
    }
}

ChatmanFigure.prototype.setLeds = function(ledStates) {    
    for (var i = 0; i < 24; i++) {       
        // bit mask is applyied to led from bottom left corner -> need for such calculations
        var ledIndex = Math.floor( (23 - i) / 8 ) * 8 + i % 8;
        this.leds.eq(ledIndex).css('visibility',  ((ledStates >> i) & 1) ? 'visible' : 'hidden');       
    }
}

// persormes animation for some part of chatman figure, to passed position
// parameter - optional
ChatmanFigure.prototype.animate = function(code, parameter) {    
    if (code == 14) { // for led animation
        this.setLeds(parameter)
    } else {
        this[ AnimationCodes[code].AnimFunc ]( AnimationCodes[code].Position );    
    }
}

// creates full animations for chatman figure control
// animationData item format: S - StartTime, C - Code, P - parameter
ChatmanFigure.prototype.createAnimation = function(animationDataObj) {
    var figureControl = this;    
    var animationData = animationDataObj.AnimationFrames;
    var currTime = animationData[0].S;
    var prevTime = 0;
    var i = 0;
    
    //  performs animations relatively to C (animation code)        
    var animateFunc = function() {
        setTimeout(function() {            
            // execute animations
            while (i != animationData.length && animationData[i].S == currTime) {
                var animationCode = animationData[i].C;
                // 14 - leds animation
                if (animationCode < AnimationCodes.length || animationCode == 14) {
                    figureControl.animate(animationCode, animationData[i].P);
                }
                ++i;
            }
            
            // check for end of sequence
            if (i != animationData.length) {
                prevTime = currTime;
                currTime = animationData[i].S;
                // recursively start the next animation after the first one is finished
                animateFunc();
            }
        }, currTime - prevTime); 
    }
    
    animateFunc();
}

ChatmanFigure.prototype.getScore = function() {
    return this.score;
}

ChatmanFigure.prototype.setCommandParams = function(params) {
    this.commandParams = params;
}

/*
 * Body Part enum
 */
var BodyParts = {
    Eyes: 0,
    Hands: 1,
    Ears: 2,
    Mouth: 3
}
    
/*
* Hardcoded positions for chatman figure parts
*/ 
// rotation angles of hands
var HandsPositions = [  0, 10, 20, 30 ];

// rotation angles of ears
var EarsPositions = [ -5, 10, 25 ];

// height of Eyes container
var EyesPositions = [ 15, 33, 48, 65 ];

// functions and positions relatively to codes, received from C#
var AnimationCodes = [
    {}, // for compability with software
    { AnimFunc: 'setEyes', Position: 0 },
    { AnimFunc: 'setEyes', Position: 1 },
    { AnimFunc: 'setEyes', Position: 2 },
    { AnimFunc: 'setEyes', Position: 3 },
    
    { AnimFunc: 'setHands', Position: 0 },
    { AnimFunc: 'setHands', Position: 1 },
    { AnimFunc: 'setHands', Position: 2 },
    { AnimFunc: 'setHands', Position: 3 },
    
    { AnimFunc: 'setEars', Position: 0 },
    { AnimFunc: 'setEars', Position: 1 },
    { AnimFunc: 'setEars', Position: 2 }
];
