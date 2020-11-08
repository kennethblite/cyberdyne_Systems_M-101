extend(WhatCanYouDoWithChatman, BasePage);

function WhatCanYouDoWithChatman() {
    WhatCanYouDoWithChatman.superclass.constructor.apply(this, arguments);
    this.name = 'WhatCanYouDoWithChatman';
}

WhatCanYouDoWithChatman.prototype.init = function() {
    $("#readMoreTextQuestion").toggle();
    $("#readMoreTextPopup").toggle();
    $("#readMoreTextRecognize").hide();
    $("#readMoreTextVoice").hide();
    $("#readMoreAbout").hide();
    $("#readMoreSignIn").hide();
    $("#readMoreSearch").hide();
    $("#readMoreFriend").hide();
    $("#readMoreTeach").hide();
    $("#readMoreGames").hide();
    $("#readMoreReminders").hide();
    $("#readMoreApp").hide();
    $("#readMoreSafe").hide();

    // init tooltips
    $('[tooltip]').each(function() {
        $(this).attr('title', PagesResourcesStrings[$(this).attr('tooltip')]);
    });

    $('[title]').tipTip({
        defaultPosition: "bottom",
        stylingClass: 'tooltip',
        edgeOffset: -2,
        hasArrow: false,
        delay: 10
    });
}

var Page = new WhatCanYouDoWithChatman();

function toogleOnClick(idOfElement) {
    $("#" + idOfElement.toString()).slideToggle("fast");
}
