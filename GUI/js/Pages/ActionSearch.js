/*
* About page type declaration
*/
// inherite from Base Control
extend(ActionSearchPopup, BasePopup);

function ActionSearchPopup() {
    ActionSearchPopup.superclass.constructor.apply(this, arguments);
    this.name = 'ActionSearchPopup';
}
    
ActionSearchPopup.prototype.createControls = function() {
    ActionSearchPopup.superclass.createControls.apply(this, arguments);
    
    controlName = 'actionSearchComboBoxControl' 
    this.controls[controlName] = new ComboBox('#actionSearchComboBoxControl', controlName);
}   

 ActionSearchPopup.prototype.bindUI = function() {        
     ActionSearchPopup.superclass.bindUI.apply(this, arguments);
     
     $('#actionSearchWords > span')
        .click(function(e) {
            if (e.button == 0){
                var selectedWord = $(this).siblings('.selectedSearchWord');
                selectedWord.removeClass('selectedSearchWord');
                this.className = 'selectedSearchWord';
                
                // hide Prev Search Element 
                var searchElement = $(selectedWord).attr('searchElement');
                $('#' + searchElement).hide();
                
                // show seach elements
                searchElement = $(this).attr('searchElement');
                $('#' + searchElement).show();
                                
            }
        });
        
     // focus textbox
     $('#actionSearchTextBox').focus();
 }
     
// retuns data gathered from page in JSON
 ActionSearchPopup.prototype.getUserInputJSON = function() {
    var selectedSearchWord = $('.selectedSearchWord');        
    
    var SearchParams = {
        Method: selectedSearchWord.attr('val'),
        Params: $('#' + selectedSearchWord.attr('searchElement')).val()
    };
    
    return JSON.stringify(SearchParams);
}

var Page = new ActionSearchPopup();
