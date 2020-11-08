// inherite from Base Control
extend(MiniActionButton, BaseControl);
MiniActionButton.templateId = "#miniActionButtonTemplate";

function MiniActionButton(container){
    MiniActionButton.superclass.constructor.apply(this, arguments);
    
    this.miniActionButton = null;
}

MiniActionButton.prototype.bind = function(dataObj) {
    MiniActionButton.superclass.bind.call(this, dataObj, BindType.Append);
}

MiniActionButton.prototype.init = function(dataObj) {
    this.miniActionButton = this.control.children('.miniActionButton');
}
MiniActionButton.prototype.bindUI = function(){
    
    this.miniActionButton.children('.btnActionInfo')
        .mouseover(btnActionInfoMouseOver)
        .mouseout(btnActionInfoMouseOut);
        
    this.miniActionButton.children('.btnActionInfoMenu')
        .mouseout(btnActionInfoMenuMouseOut);
}

function btnActionInfoMouseOver(){
	$('.btnActionInfoMenu', $(this).parent()).fadeIn(300);
}
function btnActionInfoMouseOut(e){
	if (e.toElement.className != 'btnActionInfoMenu') {
		$('.btnActionInfoMenu', $(this).parent()).fadeOut(300);
	}
}
function btnActionInfoMenuMouseOut(e){
	if (!$(this).has(e.toElement).length && e.toElement != this){
		$(this).fadeOut(300);
	}
}
