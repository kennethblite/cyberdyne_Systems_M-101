/*
* MoodWords page type declaration
*/
// inherite from Base Control
extend(MoodWordsPage, BasePage);

function MoodWordsPage() {
    MoodWordsPage.superclass.constructor.apply(this, arguments);
      
    this.name = 'MoodWords';
}

MoodWordsPage.prototype.createControls = function() {
    var moodList = 'moodList';
    this.controls[moodList] = new AutoScrollingList('#moodListControl', moodList);

    var moodNameLabel = 'moodNameLabel';
    this.controls[moodNameLabel] = new SimpleText('#moodNameLabel', { fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' });
    
    this.controls.waitOverlap = new WaitOverlap(document.body);
}

MoodWordsPage.prototype.bindUI = function() {
    MoodWordsPage.superclass.bindUI.apply(this, arguments);

    $('#addButton').click(function(e) {
        // text that should be added
        var newText = jQuery.trim($('#addWordTextBox').val());
        $('#addWordTextBox').val('')
                            .focus();

        if (e.button == 0 && newText != '') {
            // current text in big textarea
            var currText = jQuery.trim($('#moodWordsTextBox').val());
            var coma = ', ';

            // checkings with coma and spaces
            if (currText == '') {
                coma = '';
            }
            if ((currText[currText.length - 1] == ',')) {
                coma = ' ';
            }

            var changedText = currText + coma + newText;
            $('#moodWordsTextBox').val(changedText);

            // execute C# command
            executeCommand('', 'TextChanged', changedText);
        }
    });

    $('#moodWordsTextBox').change(function() {
        // execute C# command
        executeCommand('', 'TextChanged', $(this).val());
    })
    // MAX LENGTH FOR TEXTAREA        
    .keypress(function() {

        if ($(this).val().length >= 10000) {
            return false;
        }
    });

    $('#addWordTextBox').keydown(function(e) {

        if (e.keyCode == 13) {
            var event = jQuery.Event("click");
            event.button = 0;

            $('#addButton').trigger(event);
            return false;
        }

        return true;
    });

    // show static popup
    $('#wordsHelper').click(function() {
        var popupPage = 'ActionWordTextHelpPopup.html';

        //<!--END REMOVE-->

        var position = {
            offsetX: 15,
            offsetY: 97,
            dock: { bottom: true, right: true }
        };
        window.top.Navigation.showPopup(popupPage, position);
    });

    // return focus to focused element
    $('#moodListControl').click(function() {
        Page.focus();
    });

    this.focus('#addWordTextBox');
}

// bind controls that are "private" and do not communicate with C#
MoodWordsPage.prototype.bindInternalControls = function() {
    this.controls.moodList
        .selectedItemChanged.push(function(moodGraphicalDisplay) {
            Page.controls.moodNameLabel.setText(moodGraphicalDisplay.getName());
        });

    this.controls.moodNameLabel.bind({ Text: '' });

    this.controls.waitOverlap.bind();
}

    // retuns data gathered from page in JSON
MoodWordsPage.prototype.getUserInputJSON = function() {
    var chitChatData = {
        Name: $('#nameTextBox').val(),
        Description: $('#descriptionTextBox').val(),
        BuzzWords: $('#buzzWordsTextBox').val()
    }

    return JSON.stringify(chitChatData);
}

MoodWordsPage.prototype.setText = function(text) {
    $('#moodWordsTextBox').val(text);
}

MoodWordsPage.prototype.getText = function() {
    return $('#moodWordsTextBox').val();
}

var Page = new MoodWordsPage();
