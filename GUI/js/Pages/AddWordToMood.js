/*
* AddWordToMood page type declaration
*/
// inherite from Base Control
extend(AddWordToMoodPopup, BasePopup);

function AddWordToMoodPopup() {
    AddWordToMoodPopup.superclass.constructor.apply(this, arguments);
    this.name = 'AddWordToMood';
}
AddWordToMoodPopup.prototype.createControls = function() {
    AddWordToMoodPopup.superclass.createControls.call(this, arguments);
    
    var popupBox = 'popupBox';
    this.controls[popupBox] = new PopupBox('#popupContainer', popupBox);

    var moodList = 'moodList';
    this.controls[moodList] = new AutoScrollingList('#moodListControl', moodList);

    this.controls.waitOverlap = new WaitOverlap(document.body);
}

// bind controls that are "private" and do not communicate with C#
AddWordToMoodPopup.prototype.bindInternalControls = function() {
    AddWordToMoodPopup.superclass.bindInternalControls.call(this, arguments);

    this.controls.waitOverlap.bind();
}

AddWordToMoodPopup.prototype.loadData = function(dataObj) {
    $('#newWordTextBox').val(dataObj.Word);
    // maybe move to other func
    Page.focus('#newWordTextBox');
}
AddWordToMoodPopup.prototype.bindUI = function() {
    AddWordToMoodPopup.superclass.bindUI.apply(this, arguments);

    this.focus('#newWordTextBox');

    $('#saveButton').click(function(e) {
        if (e.button == 0) {
            var params = Page.getUserInputJSON();

            if (params) {
                executeCommand('', 'SaveUserData', params);
            }
        }
    });

    $('#moodListControl').click(function() {
        Page.focus();
    });
}

// retuns data gathered from page in JSON
AddWordToMoodPopup.prototype.getUserInputJSON = function() {
    var chitChatData = {
        Word: jQuery.trim($('#newWordTextBox').val())
    }

    if (chitChatData.Word == '') {
        return null;
    } else {
        return JSON.stringify(chitChatData);
    }
}

var Page = new AddWordToMoodPopup();
