// inherite from Base Control
extend(MoodSelector, BaseControl);
MoodSelector.templateId = "#moodSelectorTemplate";

function MoodSelector(container, name) {
    MoodSelector.superclass.constructor.apply(this, arguments);
        
    this.moodCounterContainer = null; // root element of template
    this.moodState = null; // current mood state
    this.moodId = null;
    
    this.radius = 0;    
}

MoodSelector.prototype.init = function(dataObj) {
    this.moodCounterContainer = this.control;
    var halfWidth = this.moodCounterContainer.width() / 2;

    this.radius = halfWidth;
    this.centerPoint = {
        x: halfWidth,
        y: halfWidth
    }

    // save Mood it
    this.moodId = dataObj.Id;
    // fill text in container, using jqery plugin
    this.moodCounterContainer.find('.moodSelectorName').textfill();
    // set moodSelector State
    this.setMoodState(dataObj.MoodState);
}

MoodSelector.prototype.bindUI = function() {
     
     /*
      * Scaling
      */      
     this.moodCounterContainer.mousemove({
        moodSelector: this
     }, function(e) {
     
            var x = e.offsetX, y = e.offsetY;
            
            if ( jQuery.contains( this, e.target ) ){
                // we know that children are only in the circle, so there are no need to check them ones more
                $(this).removeClass('moodSelectorOutCircle')
                       .addClass('moodSelectorInCircle');
                       
                return;
            }    
            
            var centerX = e.data.moodSelector.centerPoint.x, centerY = e.data.moodSelector.centerPoint.y;
            var radius = e.data.moodSelector.radius;
            
            if ( Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2) <=  Math.pow(radius, 2)){
                $(this).removeClass('moodSelectorOutCircle')
                       .addClass('moodSelectorInCircle');
            } else {
                $(this).removeClass('moodSelectorInCircle')
                       .addClass('moodSelectorOutCircle');                       
            }
        });
     
     this.moodCounterContainer.mouseleave(function(e) {
        $(this).removeClass('moodSelectorOutCircle moodSelectorInCircle');
     });
     
     /*
      * Mood name changings
      */
    
    this.moodCounterContainer.find('.moodLevelImage')
    // changes state
    .click({           
            moodSelector: this       
        }, function(e){    
            if (e.button == 0) {     
                var moodSelector = e.data.moodSelector, moodState = $(this).attr('moodState');
                
                moodSelector.setMoodState( moodState );
                
            }
    })
    // only changes temporary appearance but do not changes state
    .mouseenter({                    
            moodSelector: this
        }, function(e) {    
            var moodSelector = e.data.moodSelector, moodState = $(this).attr('moodState');
            moodSelector.moodCounterContainer
                            .find('.moodLevelName').html( ControlsResourceStrings[ MoodStatesProperties[moodState].name ])
                            .css({
                                    'color':  MoodStatesProperties[ moodState ].color
                                });
    })
    // changes state and appearance
    .mouseleave({
            moodSelector: this             
        }, function(e) {
            var moodSelector = e.data.moodSelector;
            
            moodSelector.setMoodState(moodSelector.moodState);                               
        
    });
}

/*
 * Sets moodSelector to moodState state
 */
MoodSelector.prototype.setMoodState = function(moodState){
    this.moodState = moodState;
    
    // set moodSelector border
    var border = '';
    if (MoodStatesProperties[ moodState ].color != '') {
        border = '1px solid ' + MoodStatesProperties[ moodState ].color;
    }
    
    // set styles
    this.moodCounterContainer.css({
                                'background': '-webkit-gradient(linear, 0% 0%, 0% 100%, from(#FEFEFE), to(' + MoodStatesProperties[ moodState ].bgColor + '))',
                                'border': border
                             })
        .find('.moodLevelName').html( ControlsResourceStrings[ MoodStatesProperties[moodState].name ] )
                               .css({ color: MoodStatesProperties[ moodState ].color });  
    
    // add special class for moodState == 0
    if (moodState == 0) {
        this.moodCounterContainer.addClass('zeroState');
    } else {
        this.moodCounterContainer.removeClass('zeroState');
    }
}


MoodSelector.prototype.getMoodState = function(){
    
    return {
        Id:  this.moodId,
        MoodState: parseInt( this.moodState )
    }
}

/*
 *  Different mood states properties 
 */
var MoodStatesProperties = [    
    {bgColor: "", color: "", name: "MoodNotSet"},
    {bgColor: "#dbebf6", color: "#88bce1", name: "MoodBit"} ,
    {bgColor: "#fff4c3", color: "#d8cb29", name: "MoodLittle"} ,
    {bgColor: "#ffe1c3", color: "#ff7f00", name: "MoodPretty"} ,
    {bgColor: "#f0ccce", color: "#c12c31", name: "MoodVery"}    
];
