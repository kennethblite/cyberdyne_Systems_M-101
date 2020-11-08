var PageMode = {
    normal: 0,
    editMode: 1
}

/*
* ChitChatInfo page type declaration
*/
// inherite from Base Control
extend(ChitChatInfoPage, BasePage);

function ChitChatInfoPage(){
    ChitChatInfoPage.superclass.constructor.apply(this, arguments);
    
    this.name = 'ChitChatInfo';    
}

ChitChatInfoPage.prototype.loadChitChatToPage = function(dataObj) {

    if (dataObj.IsNewChitChat) {
        return;
    }

    $('#nameTextBox').removeClass('watermarked')
                     .val(dataObj.Name);

    $('#descriptionTextBox').removeClass('watermarked')
                            .val(dataObj.Description);

    $('#buzzWordsTextBox').removeClass('watermarked')
                          .val(dataObj.BuzzWords);

    $('#saveAsButton').css('visibility', 'visible');
    $('#miniActionButton').css('display', 'inline');

    this.controls.privateCheckBox.setChecked(dataObj.IsPrivate);

    this.bindAdditionalUI();
}

ChitChatInfoPage.prototype.bindAdditionalUI = function() {
   $('#chitChatInfoHeading').css('background-image', "url('images/ChitChatInfoPage/HeadingTextEditMode.png')");
}

ChitChatInfoPage.prototype.createControls = function() {
    var moodList = 'moodList';
    this.controls[moodList] = new AutoScrollingList('#moodListControl', moodList);

    var moodNameText = 'moodNameText';
    this.controls[moodNameText] = new SimpleText('#moodNameText1', { fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' });

    var moodNameTextInPlayWords = 'moodNameTextInPlayWords';
    this.controls[moodNameTextInPlayWords] = new SimpleText('#moodNameTextInPlayWords', { fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' });

    var audioControl = 'audioControl';
    this.controls[audioControl] = new AudioControl('#audioControl', audioControl);

    var controlName = "playChitChatButtonText";
    this.controls[controlName] = new SimpleText('#playChitChatButtonText', { fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' });

    controlName = "miniActionButton";
    this.controls[controlName] = new MiniActionButton('#miniActionButton');

    controlName = "privateCheckBox";
    this.controls[controlName] = new CheckBox('#privateCheckBox');

    controlName = "waitOverlap";
    this.controls[controlName] = new WaitOverlap(document.body);
}

ChitChatInfoPage.prototype.bindUI = function() {
    ChitChatInfoPage.superclass.bindUI.apply(this, arguments);

    // watermarks
    $('#nameTextBox, #descriptionTextBox, #buzzWordsTextBox').each(function() {
        this.placeholder = PagesResourcesStrings[this.id];
    });

    // type in buzz words
    $('#buzzWordsTextBox').keyup(function() {
        $('#chitChatWords').html($(this).val());
    });

    // show static popup
    $('#wordsHelper').click(function() {
        var popupPage = 'ActionWordTextHelpPopup.html';

        //<!--END REMOVE-->

        var position = {
            offsetX: 15,
            offsetY: 30,
            dock: { top: true, right: true }
        };
        window.top.Navigation.showPopup(popupPage, position);
    });

    this.focusedElement = $('#nameTextBox');
    this.focus();

    $('#moodListControl').click(function() {
        Page.focus();
    });

    // set controls events callbacks
    this.controls.waitOverlap.addCallback('show', function() {
        Page.focusedElement.blur();
    });

    this.controls.waitOverlap.addCallback('hide', function() {
        if (!window.top.Navigation.isMessageBoxShown) {
            Page.focusedElement.focus();
        }
    });
}

// bind controls that are "private" and do not communicate with C#    
ChitChatInfoPage.prototype.bindInternalControls = function() {
    this.controls.privateCheckBox.bind({ Text: "Private", IsChecked: false });

    this.controls.moodList
        .selectedItemChanged.push(function(moodGraphicalDisplay) {
            Page.controls.moodNameText.setText(moodGraphicalDisplay.getName());
            Page.controls.moodNameTextInPlayWords.setText(moodGraphicalDisplay.getName());
        });

    this.controls.waitOverlap.bind();
}

// retuns data gathered from page in JSON
ChitChatInfoPage.prototype.getUserInputJSON = function() {
    var name = $('#nameTextBox').val();
    var description = $('#descriptionTextBox').val();
    var buzzWords = $('#buzzWordsTextBox').val();
    var isPrivate = $('#privateCheckBox').attr('checked');

    var chitChatData = {
        Name: name,
        Description: description,
        BuzzWords: buzzWords,
        IsPrivate: this.controls.privateCheckBox.getChecked()
    }

    return JSON.stringify(chitChatData);
}


var Page  = new ChitChatInfoPage();
