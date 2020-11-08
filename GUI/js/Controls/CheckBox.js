// inherite from Base Control
extend(CheckBox, BaseControl);
CheckBox.templateId = "#checkBoxTemplate";

function CheckBox(container, name){
    CheckBox.superclass.constructor.apply(this, arguments);
    
    this.control = null;
    this.isChecked = false;
}

CheckBox.prototype.init = function(dataObj) {   
    this.setChecked(dataObj.IsChecked);
    this.setText(dataObj.Text);    
}

CheckBox.prototype.bindUI = function(){
    
    this.control.click({
        checkBox: this
    }, function(e){
        if (e.button == 0) {
            if (e.data.checkBox.getChecked()) {
                e.data.checkBox.setChecked(false);  
            } else {
                e.data.checkBox.setChecked(true);  
            }       
        }
    });
}

CheckBox.prototype.setText = function(text){
    this.control.find('.checkBoxText').html(text);
}

CheckBox.prototype.setChecked = function(isChecked){
    this.isChecked = isChecked;
    if (isChecked) {
        this.control.find('.checkMark').show();
    } else {
        this.control.find('.checkMark').hide();
    }
}

CheckBox.prototype.getChecked = function(){
    return this.isChecked;   
}
