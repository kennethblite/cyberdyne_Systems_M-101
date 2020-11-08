/*
 * Proactive page type declaration
 */
// inherite from Base Page
extend(ProactivePage, BasePage);

function ProactivePage() {
    ProactivePage.superclass.constructor.apply(this, arguments);
    this.name = 'Proactive';
}

ProactivePage.prototype.bindUI = function(){
   ProactivePage.superclass.bindUI.apply(this, arguments);
   
   this.centerTextVertically();
}

ProactivePage.prototype.loadData = function(dataObj) {
    $('#statusText').html(dataObj.Text);
    this.centerTextVertically();
}

ProactivePage.prototype.setPageMode = function(mode){
    if (mode == 'small') {
        $('#mainBox').addClass('small');
    } else {
        $('#mainBox').removeClass('small');
    }
    
    this.centerTextVertically();
}

ProactivePage.prototype.centerTextVertically = function() {
    // center text vertically        
    var statusText = $('#statusText');
    
    statusText.css({
        top: Math.max(statusText.parent().height() / 2 - statusText.height() / 2, 0)
    });
}

var Page = new ProactivePage();    
