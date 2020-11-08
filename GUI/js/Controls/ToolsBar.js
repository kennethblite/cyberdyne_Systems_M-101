// inherite from Base Control
extend(ToolBar, BaseControl);
ToolBar.templateId = "#toolsBarTemplate";

function ToolBar(container){
    ToolBar.superclass.constructor.apply(this, arguments);
    this.control = null;
}

ToolBar.prototype.bindUI = function(){
    this.control.find('.redTriangle')
        .toggle(triangleClickFirstClick, triangleClickSecondClick);
    
    // bind tooltips    
    this.control.find(".topBar [title]").tipTip({
        defaultPosition: "bottom",
        stylingClass: 'tooltip',
        hasArrow: false
    });
    
    this.control.find(".bottomBar [title]").tipTip({
        defaultPosition: 'top',        
        stylingClass: 'tooltip',
        hasArrow: false
    });
}

function triangleClickFirstClick(e){
    if (e.button == 0){
        $(this).css('background-image', ' url("images/toolsBarRedTriangleDown.png")')
        $(this).parent().css('height', '100px');
    }
}

function triangleClickSecondClick(e){
   if (e.button == 0){
        $(this).css('background-image', ' url("images/toolsBarRedTriangleUp.png")')
        $(this).parent().css('height', '43px');
    }
}

ToolBar.prototype.setEnabled = function(name, isEnabled) {
    var button = this.control.find('.tool[name=' + name + ']').eq(0);
    
    if (!isEnabled && button.find('.toolDisabler').length == 0) {
        var disabler = $('<div class="toolDisabler"></div>');       
        button.append(disabler);      
        disabler.click(toolDisablerClick);        
    } 
    if (isEnabled) {
       button.find('.toolDisabler').remove();
    }
}

function toolDisablerClick(e) {
    if (e.button == 0) {
        return false;
        e.stopPropagation();        
    }
}
