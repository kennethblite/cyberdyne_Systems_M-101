// inherite from Base Control
extend(DatePicker, BaseControl);
DatePicker.templateId = "#datePickerTemplate";

/* Function-constructor for DataPicker objects */
function DatePicker(container, name){
    DatePicker.superclass.constructor.apply(this, arguments);
    
    this.control = null;
    this.dateInput = null;
    this.date = '';
}

DatePicker.prototype.init = function(dataObj){            
    this.dateInput = this.control.find('.dateInput');  
    
    try {
        this.setDate(dataObj.Date);
    } catch (e) {
        // todo: exeption handling
    }
}

DatePicker.prototype.bindUI = function() {
    var datePicker = this;

    this.dateInput
        .datepicker({
            dateFormat: 'dd/M/yy',
            onSelect: function(dateText, inst){               
                datePicker._setDate(dateText);                
            },
            numberOfMonths: 2,
            changeMonth: true,
            changeYear: true
        });
  
    this.control.find('.arrowColumn')
        .click(function(e) {
            if (e.button == 0) {
                $(this).siblings('.dateInput').datepicker("show");
            }
        })
}

DatePicker.prototype.setDate = function(dateText) {
    if (!dateText) {
        return;
    }
    
    var date = new Date(dateText);
    var formatedDate = $.datepicker.formatDate( 'dd/M/yy', date ) ;
    
    this._setDate(formatedDate);
}

DatePicker.prototype._setDate = function(formatedDate){
    this.dateInput.datepicker("setDate", formatedDate);
    
    var dates = formatedDate.split('/');
    this.control.find('.line1').html(dates[1] + ' ' + dates[2]);
    this.control.find('.line2').html(dates[0]); 
    
    this.date = formatedDate;
}

DatePicker.prototype.getDate = function() {    
    var date = $.datepicker.parseDate( 'dd/M/yy', this.date ) ;
    
    return date.getTime();
}
