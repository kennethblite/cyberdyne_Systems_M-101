/*
* AddQuestion page type declaration
*/
// inherite from Base Control
extend(AddQuestionPopup, BasePopup);

function AddQuestionPopup() {
    AddQuestionPopup.superclass.constructor.apply(this, arguments);
    this.name = 'AddQuestionPopup';
    this.Mode = 0;
}

AddQuestionPopup.prototype.bindUI = function() {
    AddQuestionPopup.superclass.bindUI.apply(this, arguments);
    
    $('#saveButton').click(function(e) {
        if (e.button == 0 && jQuery.trim($('#questionTextBox').val()) != '') {
            executeCommand('', 'Save', Page.getUserInputJSON());
        }
    });

    $('#questionTextBox').focus();
}

AddQuestionPopup.prototype.createControls = function() {
    AddQuestionPopup.superclass.createControls.call(this, arguments);

    this.controls.waitOverlap = new WaitOverlap(document.body);
}

// bind controls that are "private" and do not communicate with C#
AddQuestionPopup.prototype.bindInternalControls = function() {
    AddQuestionPopup.superclass.bindInternalControls.call(this, arguments);
    
    this.controls.waitOverlap.bind();
}

AddQuestionPopup.prototype.loadData = function(dataObj) {
    $('#questionTextBox').val(dataObj.QuestionText);

    if (dataObj.AnswerText) {
        $('#answerTextBox').val(dataObj.AnswerText);
    }

    //save mode
    this.Mode = dataObj.Mode;

    if (dataObj.Mode == AddQuestionModes.New) {
        $('.areaHeadingText').eq(0).show();
    }
    else if (dataObj.Mode == AddQuestionModes.Edit) {
        $('.areaHeadingText').eq(1).show();
    }
    else if (dataObj.Mode == AddQuestionModes.NewLimited) {
        $('.areaHeadingText').eq(2).show();
        $('#questionTextBox').attr('disabled', true);
        // for sure
        $('#answerTextBox').focus();
        return;
    }

    // for sure
    this.focusedElement = $('#questionTextBox');
    this.focus();
}

AddQuestionPopup.prototype.getUserInputJSON = function() {
    return JSON.stringify({
        QuestionText: $('#questionTextBox').val(),
        AnswerText: $('#answerTextBox').val(),
        Mode: this.Mode
    });
}

var AddQuestionModes = {
    New: 0,
    Edit: 1,
    NewLimited: 2
};

var Page = new AddQuestionPopup();
