// inherite from Base Control
extend(AudioControl, BaseControl);

function AudioControl(container, name){
    AudioControl.superclass.constructor.apply(this, arguments);
    
    this.controls = {};
    
    this.audioContainer = null;
    // width of audioTimeline (class) HTML element
    this.timelineWidth = 0;
    // element that implements progress of played audio 
    this.timeProgress = null;
            
    // play time for current record (in miliseconds)
    this.duration = 0;
    // current played time (in miliseconds)
    this.timelineTime = 0;
    this.textTime = 0;
    // timer for progress showing
    this.progressTimer = null;
    // timer that chandes time text
    this.textTimer = null;
    
    // max time for record in ms
    this.maxRecordTime = 0;
    
    // Public properties
    this.recorderVolumeControl = null;    
}

AudioControl.templateId = "#audioTemplate";

AudioControl.prototype.init = function(dataObj) {
    this.audioContainer = this.control;
    this.timelineWidth = this.audioContainer.find('.audioTimeline').width();
    this.timeProgress = this.audioContainer.find('.timeProgress');

    this.maxRecordTime = dataObj.MaxRecordTime;
    this.setTimeText(0);
}

AudioControl.prototype.createChildControls = function(dataObj) {    
    var recorderVolume = 'recorderVolume';
    this.controls[recorderVolume] = new RecorderVolumeControl( this.audioContainer.find('.recorderVolumeControl').eq(0) );    
    this.recorderVolumeControl = this.controls[recorderVolume];
    
    var soundStatusText = 'soundStatusText';
    this.controls[soundStatusText] = new SimpleText( this.audioContainer.find('.soundStatusText').eq(0) );
    this.controls[soundStatusText].bind({Text: ''});
}

AudioControl.prototype.bindUI = function() {
    this.audioContainer.find('.importButton')
                       .click({
                          controlName: this.name
                       }, function(e) {
                           if (e.button == 0) {
                                executeCommand(e.data.controlName, 'ImportClicked', '');
                           }
                       });
                   
     this.audioContainer.find('.fileDialog')
                        .change({
                            controlName: this.name
                        },function(e){
                            executeCommand(e.data.controlName, 'ImportFile', this.value);
                        });
    
    // bind tooltips    
    this.audioContainer.find("[title]").tipTip({
        defaultPosition: "bottom",
        stylingClass: 'tooltip',
        hasArrow: false
    });
     
}

/*
 * starts recording
 */
AudioControl.prototype.startRecord = function() {
    this.clear();
    this.duration = this.maxRecordTime;    

    // bug-fix for Reminder page! 
    // Ostap find why this.audioContainer.find('.audioTimeline').width() is 0 on remider page? 
    // maybe because controll is not rendered jet in AudioControl.prototype.init? :)
    this.timelineWidth = this.audioContainer.find('.audioTimeline').width(); 
    this.animateTimeline();
}

/*
 * starts timeline animation
 */
AudioControl.prototype.animateTimeline = function() {
    if (this.duration && !this.progressTimer) {
        // set timer for timeline animation 
        var audioControl = this, timeInterval = 50;
        this.progressTimer = setInterval(function() { audioControl.advanceTimeline( timeInterval ); }, timeInterval); 
        
        var textTimeInterval = 1000;
        this.textTimer = setInterval(function() { audioControl.advanceTimeText( textTimeInterval ); }, textTimeInterval);
    }
}

AudioControl.prototype.play = function(){
    
    /*if (this.duration && !this.textTimer){
        var audioControl = this, textTimeInterval = 1000;
        this.textTimer = setInterval(function() { audioControl.advanceTimeText( textTimeInterval ); }, textTimeInterval);
    }*/
}

/*
 * stops playing
 */
AudioControl.prototype.stop = function() {
    if (this.progressTimer) {
        clearInterval(this.progressTimer);        
        this.progressTimer = null;
        
    }
    if (this.textTimer) {
        clearInterval(this.textTimer);
        this.textTimer = null;
        //this.setTimeText(0);
    }
}

/*
 * Resets control to its initial state
 */
AudioControl.prototype.clear = function() {
    this.duration = 0;
    this.timelineTime = 0;
    this.textTime = 0;
    
    this.stop();
    
    //this.timeProgress.width(0);
}

/*
 * Set record
 */
AudioControl.prototype.setRecord = function(duration) {
    this.clear();
    this.duration = duration;
}

AudioControl.prototype.setPlaybackTime = function(time){
    this.clear()

    this.textTime = time;
    this.timelineWidth = this.audioContainer.find('.audioTimeline').width(); // recalc in case element was not displayed while initialization
    
    this.setTimeText(time);
    // set timeline position
    this.duration = this.maxRecordTime;
    this.advanceTimeline(time);
}

/*
 * sets the state of audio control
 */
AudioControl.prototype.setState = function(playState, stopState, recordState) {
    var playButton = this.audioContainer.find('.playButton');    
    playButton.unbind('click');
    
    if (playState) {
        playButton.css('background', '');
        playButton.removeClass('audioButtondisabled');
        
        playButton.click({
            audioControl: this
            }, function(e){
                executeCommand(e.data.audioControl.name, 'PlayClicked', '');
            });
    } else {        
        // changes disabled image
        playButton.addClass('audioButtondisabled');
        playButton.css('background', "url('images/audioPlayButtonDisabled.png') no-repeat");
    }
    
    var stopButton = this.audioContainer.find('.stopButton');    
    stopButton.unbind('click');
    
    if (stopState) {
        stopButton.css('background', '');
        stopButton.removeClass('audioButtondisabled');
    
        stopButton.click({
            audioControl: this
            }, function(e){
                executeCommand(e.data.audioControl.name, 'StopClicked', '');
            });
    } else {        
        // changes disabled image
        stopButton.addClass('audioButtondisabled');
        stopButton.css('background', "url('images/audioStopButtonDisabled.png') no-repeat");
    }
    
    var recordButton = this.audioContainer.find('.recordButton');    
    recordButton.unbind('click');
    
    if (recordState) {
        recordButton.css('background', '');
        recordButton.removeClass('audioButtondisabled');
    
        recordButton.click({
            audioControl: this
            }, function(e){                
                //e.data.audioControl.startRecord(3454);
                executeCommand(e.data.audioControl.name, 'StartRecordClicked', '');
            });
    } else {
        // changes disabled image
        recordButton.addClass('audioButtondisabled');
        recordButton.css('background', "url('images/audioRecordButtonDisabled.png') no-repeat");
    }
}

/*
 * private method that moves passed time line
 */
AudioControl.prototype.advanceTimeline = function(timeStep) {
    this.timelineTime += timeStep;
    this.timeProgress.width( (this.timelineTime / this.duration) * this.timelineWidth );
    
    if (this.timelineTime >= this.duration) {
        this.stop();
    }
}

/*
 * private method that changes time text
 */
AudioControl.prototype.advanceTimeText = function() {
    this.textTime += 1000;

    this.setTimeText(this.textTime);

    if (this.textTime >= this.duration) {
        this.stop();
        executeCommand(this.name, 'StopClicked', '');
    }    
}

/*
 * Setting time text
 */
AudioControl.prototype.setTimeText = function(miliseconds){
    
    var minutes = Math.floor( (miliseconds / 1000) / 60 );
    var seconds = Math.floor( (miliseconds / 1000) % 60 );
    
    minutes = ((minutes / 10 < 1) ? ('0' + minutes) : minutes );
    seconds = ((seconds / 10 < 1) ? ('0' + seconds) : seconds ) ;

    this.audioContainer.find('.timerText1').html(minutes + ':' + seconds);
}

/*
 * Enable / disable recording
 */
AudioControl.prototype.setRecordingEnabled = function(isEnabled) {
    this.setState(true, true, isEnabled);
    
    this.controls.recorderVolume.setEnabled(isEnabled);
}

AudioControl.prototype.setSoundStatus = function(canHear) {
    if (canHear) {
        this.controls.soundStatusText.setText(ControlsResourceStrings.AudioCanHearText);
        this.audioContainer.find('.soundStatusText').removeClass('redText').addClass('blueText');
    } else {
        this.controls.soundStatusText.setText(ControlsResourceStrings.AudioCantHearText);
        this.audioContainer.find('.soundStatusText').removeClass('blueText').addClass('redText');
    }
}
