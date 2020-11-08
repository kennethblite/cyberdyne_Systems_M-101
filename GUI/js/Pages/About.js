/*
* About page type declaration
*/
// inherite from Base Control
extend(AboutPopup, BasePopup);

function AboutPopup() {
    AboutPopup.superclass.constructor.apply(this, arguments);
    this.name = 'About';
}
    
AboutPopup.prototype.createControls = function(){
    AboutPopup.superclass.createControls.call(this, arguments);
    
    controlName = 'versionText';
    this.controls[controlName] = new SimpleText('#versionText');
    
    controlName = 'buildDateText';
    this.controls[controlName] = new SimpleText('#buildDateText');
    
    controlName = 'updateStatusText';
    this.controls[controlName] = new SimpleText('#updateStatusText');
    
    controlName = 'reportStatusText';
    this.controls[controlName] = new SimpleText('#reportStatusText');
    
    controlName = 'saveToDesktopCheckBox';
    this.controls[controlName] = new CheckBox('#saveToDesktopCheckBoxControl', controlName);
}
        
AboutPopup.prototype.bindInternalControls = function(){
    AboutPopup.superclass.bindInternalControls.call(this, arguments);
         
    this.controls.updateStatusText.bind({
         Text: ""
    });
    
    this.controls.reportStatusText.bind({
         Text: ""
    });
    
    this.controls.saveToDesktopCheckBox.bind({
        Text: PagesResourcesStrings.SuportTicketSaveToDesktop,
        IsChecked: false
    });
}

// retuns data gathered from page in JSON
AboutPopup.prototype.getUserInputJSON = function() {
            
    return JSON.stringify({
        SaveToDesktop: this.controls.saveToDesktopCheckBox.getChecked(),
        TicketNumber: $('#ticketNumberText').val()
    });        
}
    
AboutPopup.prototype.setDownloadStatus = function(text) {
    $('#checkUpdateButton').hide();
    $('#updateStatusText').show();
    
    this.controls.updateStatusText.setText(text);
}
    
AboutPopup.prototype.setReportSendStatus = function(text) {
    $('#ticketLi1, #saveToDeskotopLi').hide();
    $('#ticketLi2').show();
    
    this.controls.reportStatusText.setText(text);
}

var Page = new AboutPopup();
