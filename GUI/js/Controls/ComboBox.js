function ComboBox(container, name){
    this.container = container;
    this.name = name;
    this.comboBoxContainer = null;
}

ComboBox.prototype.bind = function(dataObj){
    var container = $(this.container);
    container.empty();
    
    this.comboBoxContainer = $('#comboBoxTemplate').tmpl(dataObj).appendTo(container);
}

ComboBox.prototype.bindUI = function(){
    
}

ComboBox.prototype.getValue = function() {
    return this.comboBoxContainer.find('.comboBox').val();
}

ComboBox.prototype.setValue = function(value) {
    this.comboBoxContainer.find('.comboBox').val(value);
}
