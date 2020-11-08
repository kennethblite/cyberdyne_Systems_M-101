// inherite from Base Control
extend(TimeSelector, BaseControl);
TimeSelector.templateId = "#timeSelectorTemplate";

function TimeSelector(container, name) {
    TimeSelector.superclass.constructor.apply(this, arguments);
    
    this.hour = 0;
    this.minute = 0;
    
    this.control = null;
    // time fonmat specific
    this.maxHour = 13;
    this.isPM = 0;
    this.timeFormat = TimeFormat.F12;
}

TimeSelector.prototype.init = function(dataObj) {    
    this.setTime24({Hour: 0, Minute: 0});
}

TimeSelector.prototype.bindUI = function() {
    var timeSelector = this;
    
    // changing hours
    this.control.find('.hourChanger > div')
        .click(function(e){
            if (e.button == 0) {
                var newHour = timeSelector.hour;                
            
                if (this.className == 'changerUp') {
                    newHour = (++newHour) % timeSelector.maxHour;
                } else {
                    newHour = (--newHour >= 0) ? newHour : timeSelector.maxHour + newHour; 
                }                                
                
                timeSelector.setTime({
                        Hour: newHour,
                        Minute: timeSelector.minute
                });
            }
        }); 
        
     // changing minutes
     this.control.find('.minutesChanger > div')
        .click(function(e){
            if (e.button == 0) {
                var newMinute = timeSelector.minute;                
            
                if (this.className == 'changerUp') {
                    newMinute = (++newMinute) % 60;
                } else {
                    newMinute = (--newMinute >= 0) ? newMinute : 60 + newMinute; 
                }                                
                
                timeSelector.setTime({
                        Hour: timeSelector.hour,
                        Minute: newMinute
                });
            }
        });

        this.control.find('.formatLine')
         .click(function(e) {
            if (e.button == 0) {
                timeSelector.setTimeOfDay( $(this).attr('format') );
            }
         });
}

// sets time, draws it
TimeSelector.prototype.setTime = function(time){
    // clear canvas
    var canvas = this.control.find('.timeSelector')[0];
    canvas.width = canvas.width - 1;
    canvas.width = canvas.width + 1;
        
    // draw digits
    this.hour = time.Hour;
    this.minute = time.Minute;    
    
    time.Hour = this.hour;
            
    this.drawDigit(time.Hour % 10, 1);
    time.Hour = Math.floor( time.Hour / 10 );
    this.drawDigit(time.Hour % 10, 0);
    
    this.drawDigit(time.Minute % 10, 3);
    time.Minute = Math.floor( time.Minute / 10 );
    this.drawDigit(time.Minute % 10, 2);
    
    // draw colon
    var gCtx = canvas.getContext("2d");
    gCtx.fillStyle = '#f04623';
    gCtx.fillRect(40, 16, 2, 2);
    gCtx.fillRect(40, 26, 2, 2);
}

// sets time from 24 format
TimeSelector.prototype.setTime24 = function(time){
   
   if (time.Hour > 12) {
            time.Hour -= 12;
            this.isPM = 0; // 0 - false
            this.setTimeOfDay('PM');
    } else {
        this.isPM = 1; // 1 - true
        this.setTimeOfDay('AM');
    }
    
   this.setTime(time);
}

// returnes timeSelector's time
TimeSelector.prototype.getTime = function() {
    return {
        Hour: (this.hour + this.isPM  * 12) % 24,
        Minute: this.minute
    }
}

// switches time selector format beetween 24/12 hours
TimeSelector.prototype.setTimeOfDay = function(format) {
    if (format == 'PM') {
        this.control.find('.amImage').removeClass('selectedTimeFormat');
        this.control.find('.pmImage').addClass('selectedTimeFormat');
        this.isPM = 1;        
    } else {
        this.control.find('.pmImage').removeClass('selectedTimeFormat');
        this.control.find('.amImage').addClass('selectedTimeFormat');       
        this.isPM = 0;
    }
}

// draws Digit
TimeSelector.prototype.drawDigit = function(digit, category) {
    var coords = this.getDigitStartCoords(category);
    var gCtx = this.control.find('.timeSelector')[0].getContext("2d");    
    var lineLength = 11;
    
    gCtx.strokeStyle = '#f04623';
    gCtx.lineWidth = 2;
    
    gCtx.beginPath();
                
    switch ( digit ) {
        case 0:  
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + 2 * lineLength, coords.x, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x, coords.y + lineLength);
            this.drawLine(gCtx, coords.x, coords.y + lineLength, coords.x, coords.y);                
                  
            break;
        case 1:
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2*lineLength);            
             
            break;
        case 2:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x, coords.y + lineLength, coords.x, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);                                
            
            break;
        case 3:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            break;
        case 4:
            this.drawLine(gCtx, coords.x, coords.y, coords.x, coords.y+lineLength);
            this.drawLine(gCtx, coords.x, coords.y+lineLength, coords.x + lineLength, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2*lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y );           
            
            break;
        case 5:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x, coords.y, coords.x, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            break;
        case 6:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x, coords.y, coords.x, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + lineLength, coords.x, coords.y + 2 * lineLength);
            
            break;
        case 7:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2*lineLength);      
            break;    
        case 8:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x, coords.y, coords.x, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            
            this.drawLine(gCtx, coords.x, coords.y + lineLength, coords.x, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            break;
        case 9:
            this.drawLine(gCtx, coords.x, coords.y, coords.x + lineLength, coords.y);
            this.drawLine(gCtx, coords.x, coords.y, coords.x, coords.y + lineLength);
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x, coords.y + lineLength);
            
            this.drawLine(gCtx, coords.x + lineLength, coords.y + lineLength, coords.x + lineLength, coords.y + 2 * lineLength);
            this.drawLine(gCtx, coords.x, coords.y + 2 * lineLength, coords.x + lineLength, coords.y + 2 * lineLength);           
            this.drawLine(gCtx, coords.x + lineLength, coords.y, coords.x + lineLength, coords.y + lineLength);
            break;
    }   
    
    gCtx.closePath();
    gCtx.stroke();
}

// draws line
TimeSelector.prototype.drawLine = function(context, x1, y1, x2, y2) {
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
}

// returnes coordinates for digit to start regarting to category on digit
TimeSelector.prototype.getDigitStartCoords = function(category) {
    var coords = {x: 0, y: 10};
    var width = 17;
    var start = 8;
    
    coords.x = start + width * category;
    if (category >= 2) {
        coords.x += 4;
    }

    return coords;
}

// formats enum
var TimeFormat = {
    F12: 0,
    F24: 1    
}
