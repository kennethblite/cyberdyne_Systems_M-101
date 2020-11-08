// inherite from Base Control
extend(MyChatmanStatus, BaseControl);
MyChatmanStatus.templateId = "#myChatmanStatusTemplate";

// fucntion - constructor
function MyChatmanStatus(container, name){
    MyChatmanStatus.superclass.constructor.apply(this, arguments);
    
    this.controls = {};
}

MyChatmanStatus.prototype.createChildControls = function() {
    this.controls.promoText = new SimpleText( this.control.find('.promoTextControl')[0], 'promoText' );
    this.controls.promoText.bind({Text:''});
}

MyChatmanStatus.prototype.bindUI = function(dataObj){
    
    this.control.find('.myChatmanLink')
        .click({controlName: this.name}, function(e){
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'LinkClicked', '');
            }
        });

    this.control.find('.moneyPanel')
        .click({ controlName: this.name }, function(e) {
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'AccountLabelClicked', '');
            }
        });
        
    this.control.find('.connectButton')
        .click({controlName: this.name}, function(e){
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'ConnectButtonClicked', '');
            }
        });
                
    this.control.find('.shareButton')
        .click({controlName: this.name}, function(e){
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'ShareButtonClicked', '');
            }
        });
        
    this.control.find('.registerButton')
        .click({controlName: this.name}, function(e){
            if (e.button == 0) {
                executeCommand(e.data.controlName, 'RegisterButtonClicked', '');
            }
        });
        
    // passing event for dragging
    this.control.mousedown(function(e) {
          var event = jQuery.Event('mousedown');
          event.button = 0;
          
          $(this).parents('#column3InnerContainer').trigger(event);
                    
          e.stopPropagation();
    });
}

MyChatmanStatus.prototype.setText = function(text) {
    this.control.find('.text').html(text);
}
