/*
* SharingWithFriends page type declaration
*/
// inherite from Base Popup
extend(SharingWithFriendsPopup, BasePopup);

function SharingWithFriendsPopup() {
    SharingWithFriendsPopup.superclass.constructor.apply(this, arguments);
    this.name = 'SharingWithFriends';
}    

SharingWithFriendsPopup.prototype.bindInternalControls = function(){
    SharingWithFriendsPopup.superclass.bindInternalControls.apply(this, arguments);
    
    this.controls.popupBox.closeCallback = function(){
        window.top.Navigation.hidePopup();
    }
}

SharingWithFriendsPopup.prototype.setPosition = function(position) {
    this.controls.popupBox.setPosition(position.offsetX, position.offsetY, position.dock);
}

var Page = new SharingWithFriendsPopup();
