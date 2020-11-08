/*
* AppsAndDownloads page type declaration
*/
// inherite from Base Control
extend(WebTransferPage, BasePage);

function WebTransferPage() {
    WebTransferPage.superclass.constructor.apply(this, arguments);
    this.name = 'WebTransfer';

    this.closeTimeout = null;
}

WebTransferPage.prototype.setText = function(text, color) {
    $('#statusText').html(text)
                    .css({
                        color: color
                    });
    
}
    
WebTransferPage.prototype.setProgress = function(progress){
    var width = $('#progressBar').width() * progress / 100;        
    $('#progress').width(width);
}

// sends close command to C# after some timeout
WebTransferPage.prototype.startCloseTimer = function () {
    if (this.closeTimeout != null) {
        clearTimeout(this.closeTimeout);
    }

    this.closeTimeout = setTimeout(function () {
        executeCommand('', 'Close', '');
        Page.closeTimeout = null;
    }, 3000);
}

var Page = new WebTransferPage();
