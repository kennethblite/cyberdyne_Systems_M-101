// inherite from Base Control
extend(RecorderVolumeControl, BaseControl);
RecorderVolumeControl.templateId = "#recorderVolumeControlTemplate";

function RecorderVolumeControl(container, name){
    RecorderVolumeControl.superclass.constructor.apply(this, arguments);
    
    // for mousemove with left button pressed (javascript has issues with this thing)
    this.leftButtonPressed = false;
    this.isEnabled = true;
}

RecorderVolumeControl.prototype.init = function(dataObject){
    this.setVolume(dataObject.VolumeLevel);
}

RecorderVolumeControl.prototype.bindUI = function(){
    var volControl = this.control;
   
    /*
     * Volume level changing events
     */
    
    document.onmouseup = function(e) {
    if (e.button == 0){
        volControl.leftButtonPressed = false;
        }
    }
    
    var scaleGrid = this.control.find('#scaleGrid');
    
    scaleGrid.mousedown(function(e){
        if (e.button == 0){
            volControl.leftButtonPressed = true;
            var newLeft = (e.offsetX - 39);
            //$('#onColor').css('left', (e.offsetX - 39) + 'px'); // minus the width of #onColor
            executeCommand('audioControl.recorderVolumeControl', 'VolumeChanged', '' + Math.round((100 / 39) * newLeft + 95));
        }
    });
    
    scaleGrid.mousemove(function(e){
       if (volControl.leftButtonPressed){
            var prevLeft = $('#onColor').css('left');
            var newLeft = (e.offsetX - 39);
           
            if (newLeft != prevLeft) {
                //$('#onColor').css('left', newLeft + 'px');
                executeCommand('audioControl.recorderVolumeControl', 'VolumeChanged', '' + Math.round((100 / 39) * newLeft + 95));
            }
        }
    });
}

RecorderVolumeControl.prototype.setVolume = function(volumeLevel){
    var newLeft = (volumeLevel * 39) / 100 - 39;
    $('#onColor').css('left', newLeft + 'px');
}

RecorderVolumeControl.prototype.setEnabled = function(isEnabled){
    if (isEnabled) {
       this.control.find('.disablingArea').hide();
    } else {       
       this.control.find('.disablingArea').show();
    }
}
