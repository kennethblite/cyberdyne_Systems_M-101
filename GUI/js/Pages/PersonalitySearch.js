/*
* About page type declaration
*/
// inherite from Base Control
extend(PersonalitySearchPopup, BasePopup);

function PersonalitySearchPopup() {
    PersonalitySearchPopup.superclass.constructor.apply(this, arguments);

    this.name = 'PersonalitySearchPopup';    
}    

PersonalitySearchPopup.prototype.bindUI = function() {
     PersonalitySearchPopup.superclass.bindUI.apply(this, arguments);
     
     $('#personalitySearchWords > span')
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
     
     // focus on textBox
     $('#personalitySearchTextBox').focus();
 }
     
    // retuns data gathered from page in JSON
PersonalitySearchPopup.prototype.getUserInputJSON = function() {
    var selectedSearchWord = $('.selectedSearchWord');        
    
    var SearchParams = {
        Method: selectedSearchWord.attr('val'),
        Params: $('#' + selectedSearchWord.attr('searchElement')).val()
    };
    
    return JSON.stringify(SearchParams);
}

var Page = new PersonalitySearchPopup();
