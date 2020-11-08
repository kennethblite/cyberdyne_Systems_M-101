var MessageBoxType = {
    Ok: 1,
    OkCancel: 2,
    YesNo: 3,
    YesNoCancel: 4
}

/*
 * About page type declaration
 */
// inherite from Base Control
extend(MessageBox, BasePopup);

function MessageBox() {
    MessageBox.superclass.constructor.apply(this, arguments);
    this.name = 'MessageBox';
}

MessageBox.prototype.loadData = function(data) {
    $('#messageText').html(data.Text);
    this.setButtons(data.Type);
    // set size
    var messageTextContainer = $('#messageText');
    if (messageTextContainer.height() > 0.8 * messageTextContainer.width()) {
        messageTextContainer.width(Math.max(messageTextContainer.height(), messageTextContainer.width()) * 1.2);
    }

    this.controls.popupBox.setPosition(0, 0, { center: true });

    // bind ok buttons click on enter
    this.bindButtonsEvents();
}

MessageBox.prototype.bindButtonsEvents = function() {
    // only when we have 1 button - ok
    if ($('.pushButtonBlue').length > 1) {
        return;
    }

    $(document.body).keypress(function(e) {
        if (e.keyCode == 13) {
            // sent click event for this button
            var event = jQuery.Event("click");
            event.button = 0;

            $('#okButton').trigger(event);
        }
    });
}

MessageBox.prototype.setButtons = function(messageBoxType) {
    var buttonsHTML = "";

    switch (messageBoxType) {
        case MessageBoxType.Ok:
            buttonsHTML = "<div id='okButton' class='pushButtonBlue' onclick=\"executeCommand('', 'OkButtonClicked', '')\">OK</div>";
            break;
        case MessageBoxType.OkCancel:
            buttonsHTML = "<div id='okButton' class='pushButtonBlue' onclick=\"executeCommand('', 'OkButtonClicked', '')\">OK</div><div class='pushButtonBlue' onclick=\"executeCommand('', 'CancelButtonClicked', '')\">Cancel</div>";
            break;
        case MessageBoxType.YesNo:
            buttonsHTML = "<div id='yesButton' class='pushButtonBlue' onclick=\"executeCommand('', 'YesButtonClicked', '')\">Yes</div><div class='pushButtonBlue' onclick=\"executeCommand('', 'NoButtonClicked', '')\">No</div>";
            break;
        case MessageBoxType.YesNoCancel:
            buttonsHTML = "<div id='yesButton' class='pushButtonBlue' onclick=\"executeCommand('', 'YesButtonClicked', '')\">Yes</div><div class='pushButtonBlue' onclick=\"executeCommand('', 'NoButtonClicked', '')\">No</div><div class='pushButtonBlue' onclick=\"executeCommand('', 'CancelButtonClicked', '')\">Cancel</div>";
            break;
    }

    $('#messageBoxButtonsContainer').html(buttonsHTML);
}

MessageBox.prototype.focus = function() {
    window.focus();
}

var Page = new MessageBox();
