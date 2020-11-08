/*
* ChatWithFriends page type declaration
*/
// inherite from Base Control
extend(ChatWithFriendsPage, BasePage);

function ChatWithFriendsPage() {
    ChatWithFriendsPage.superclass.constructor.apply(this, arguments);
    this.name = 'ChatWithFriends';
}

ChatWithFriendsPage.prototype.loadData = function(dataObj) {
    $('.softwareView').each(function(index) {

        // for MAC there are no ICQ
        if (!dataObj.IMs[index]) {
            $(this).remove();
            return;
        }

        if (dataObj.IMs[index].IsInstalled) {

            if (dataObj.IMs[index].Image) {
                var image = $('<div class="image"></div>');
                image.css('background-image', "url('images/ChatWithFriendsPage/" + dataObj.IMs[index].Image + "')");

                $(this).prepend(image);
            } else {
                $(this).prepend('<div class="middleText">' + dataObj.IMs[index].Name + '</div>');
            }
        } else {
            $(this).prepend('<div class="middleText">Go Get it!</div>');
        }

        $(this).find('.softwareDescription').text(dataObj.IMs[index].Description);
        $(this).data('id', dataObj.IMs[index].Id);

        if (dataObj.IMs[index].HasAlert) {
            Page.showExclamation(index);
        }
    });

    // in case of MAC
    if (dataObj.SpecificBrowserInstallation) {
        $('#installExensionsButton').css('display', 'none');
        $('#macButtons').css('display', 'block');
        $('#anotherProgramText').css('margin-top', '-10px');
    }
}

ChatWithFriendsPage.prototype.bindUI = function() {
    ChatWithFriendsPage.superclass.bindUI.apply(this, arguments);

    $('.softwareView').click(function(e) {
        var id = $(this).data('id');

        if (e.button == 0 && id) {
            executeCommand('', 'IMIconClicked', id);
        }
    });

}

ChatWithFriendsPage.prototype.showExclamation = function(index) {
    var exclamationPoint = $('.softwareView').eq(index).find('.exclamationPoint');
    exclamationPoint.css('display', 'inline');

    $(exclamationPoint).click(function(e) {
        var id = $(this).parents('.softwareView').data('id');

        if (e.button == 0 && id) {
            executeCommand('', 'WarningButtonClicked', id);
            e.stopPropagation();
        }
    });
}

ChatWithFriendsPage.prototype.hideExclamation = function(index) {
    var exclamationPoint = $('.softwareView').eq(index).find('.exclamationPoint');
    exclamationPoint.css('display', 'none');
}

var Page = new ChatWithFriendsPage();
