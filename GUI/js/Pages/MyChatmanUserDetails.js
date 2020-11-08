/*
* About page type declaration
*/
// inherite from Base Control
extend(MyChatmanUserDetailsPopup, BasePopup);

function MyChatmanUserDetailsPopup() {
    MyChatmanUserDetailsPopup.superclass.constructor.apply(this, arguments);
    this.name = 'MyChatmanUserDetails';
    this.passwordChanged = false;
}

MyChatmanUserDetailsPopup.prototype.createControls = function() {
    MyChatmanUserDetailsPopup.superclass.createControls.call(this);
    this.controls.waitOverlap = new WaitOverlap('#popupContainer');
}

MyChatmanUserDetailsPopup.prototype.bindInternalControls = function() {
    if ($('body').hasClass('PageMode')) {
        this.controls.popupBox.bind({ Position: { OffsetX: 0, OffsetY: 0, Dock: { top: true, left: true}} }, false);
    } else {
        this.controls.popupBox.bind();
    }
    
    this.controls.waitOverlap.bind();
}

MyChatmanUserDetailsPopup.prototype.bindUI = function() {
    MyChatmanUserDetailsPopup.superclass.bindUI.apply(this, arguments);

    Page.focus('#userNameTextBox');
}

MyChatmanUserDetailsPopup.prototype.bindPasswordChangedUI = function() {
    $('#passwordTextBox')
        .one('keydown', function(e) {
            if (e.keyCode >= 48 && e.keyCode <= 90) {
                $('#passwordTextBox').removeAttr('placeholder');
                Page.passwordChanged = true;
            }
        });
}

MyChatmanUserDetailsPopup.prototype.loadData = function(dataObj) {
    if (!dataObj) {
        return;
    }

    // hide all possible maintexts and show only that, which is related to current Mode
    $('.mainText').hide();
    $('#' + dataObj.Mode + 'Text').show();

    // set user details
    $('#userNameTextBox').val(dataObj.UserName);
    $('#chatmanNumberText').val(dataObj.ChatmanNumber);

    if (dataObj.PasswordChanged) {
        $('#passwordTextBox').attr('placeholder', dataObj.Password.replace(/./g, '*'));
    } else {
        $('#passwordTextBox').val(dataObj.Password);
    }

    Page.bindPasswordChangedUI();
}

    // retuns data gathered from page in JSON
MyChatmanUserDetailsPopup.prototype.getUserInputJSON = function() {
    var data = {
        UserName: $('#userNameTextBox').val(),
        Password: $('#passwordTextBox').val(),
        ChatmanNumber: $('#chatmanNumberText').val(),
        PasswordChanged: Page.passwordChanged
    }

    return JSON.stringify(data);
}

MyChatmanUserDetailsPopup.prototype.setPageMode = function(mode) {
    if (mode == 'PageMode') {
        $('body').addClass('PageMode');
    }
}

var Page = new MyChatmanUserDetailsPopup();
