// inherite from Base Control
extend(VolumeControl, BaseControl);
VolumeControl.templateId = "#volumeControlTemplate";

function VolumeControl(container){
    VolumeControl.superclass.constructor.apply(this, arguments);    
        
    this.control = null;    
    // for mousemove with left button pressed (javascript has issues with this thing)
    this.leftButtonPressed = false;

    this.AudioOutput = null;
}

VolumeControl.prototype.bindUI = function(){
    var volControl = this.control;
   
    /*
     * Volume level changing events
     */
     
    // this is fix
    document.onmouseup = function(e) {
        if (e.button == 0){
            volControl.leftButtonPressed = false;
        }
    }
 
    var scaleGrid = this.control.find('#scaleGrid');
    
    scaleGrid.mousedown(function(e){
        if (e.button == 0){
            volControl.leftButtonPressed = true;
            var newLeft = (e.offsetX - 38);
            //$('#onColor').css('left', (e.offsetX - 39) + 'px'); // minus the width of #onColor
            executeCommand('volumeControl', 'VolumeChanged', '' + Math.round((100 / 39) * newLeft + 100));
        }
    });
    
    scaleGrid.mousemove(function(e){
        if (volControl.leftButtonPressed){
            var prevLeft = $('#onColor').css('left');
            var newLeft = (e.offsetX - 38);
           
            if (newLeft != prevLeft) {
                //$('#onColor').css('left', newLeft + 'px');
                executeCommand('volumeControl', 'VolumeChanged', '' + Math.round((100 / 39) * newLeft + 100));
            }
        }
    });
    
    // this is fix
    this.control.mouseleave(function(e){
        volControl.leftButtonPressed = false;
    })
}

VolumeControl.prototype.setVolume = function(volumeLevel){
    var newLeft = (volumeLevel * 38) / 100 - 38;
    $('#onColor').css('left', newLeft + 'px');
}

VolumeControl.prototype.setMuted = function(isMuted) {
    if (isMuted) {
        this.control.find('.speakerImage').attr('src', 'images/speakerMute.png');
    } else {
        this.control.find('.speakerImage').attr('src', 'images/speaker.gif');
    }
}

VolumeControl.prototype.setDevice = function(device) {
    if ( device == 'PC') {
        this.control.find('.deviceImage').attr('src', 'images/AUDIO_PC.png');
    } else {
        this.control.find('.deviceImage').attr('src', 'images/AUDIO_CM.png');
    }
};

function speakerImageClick(e){
    if (e.button == 0 && this.src.indexOf('speakerMute.png') >= 0){
        executeCommand('volumeControl', 'MuteChanged', 'false');
        //this.src = 'images/speaker.gif';
    }
    else if (e.button == 0 && this.src.indexOf('speaker.gif') >= 0){
    executeCommand('volumeControl', 'MuteChanged', 'true');
        //this.src = 'images/speakerMute.png';
    }
}

function audioImageClick(e) {
    if (this.src.indexOf('AUDIO_CM.png') >= 0) {
        executeCommand('volumeControl', 'OutputDeviceChanged', 'CM');
    }
    else {
        executeCommand('volumeControl', 'OutputDeviceChanged', 'PC');
    }
}
