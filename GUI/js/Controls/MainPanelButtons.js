// inherite from Base Control
extend(MainPanelButtonsControl, BaseControl);
MainPanelButtonsControl.templateId = "#mainPanelButtonsTemplate";

function MainPanelButtonsControl(container, name){
    MainPanelButtonsControl.superclass.constructor.apply(this, arguments);
}

MainPanelButtonsControl.prototype.bindUI = function(){
    this.control.find('.mainPanelButton')
        .click({
                   buttons: this.control.find('.mainPanelButton'),
                   controlName: this.name
               },  function(e){
                        if (e.button == 0){
                            e.data.buttons.filter('.mainPanelButtonPressed')
                                     .removeClass('mainPanelButtonPressed');
                        
                            $(this).addClass('mainPanelButtonPressed');
                            
                            executeCommand(e.data.controlName, $(this).attr('role'), '');
                        }
                });
}

MainPanelButtonsControl.prototype.pressButton = function(index) {
    var buttons = this.control.find('.mainPanelButton');
    buttons.removeClass('mainPanelButtonPressed');
    
    if (index >= 0 && index < 6) {
        buttons.eq(index).addClass('mainPanelButtonPressed');
    }
}
