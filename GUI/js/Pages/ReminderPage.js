/*
* Reminder page type declaration
*/
// inherite from Base Control
extend(ReminderPage, BasePage);

function ReminderPage() {
    ReminderPage.superclass.constructor.apply(this, arguments);
    this.name = 'Reminder';
    this.imageId = 7;
}
 

ReminderPage.prototype.bindUI = function() {
    ReminderPage.superclass.bindUI.apply(this, arguments);

    this.bindUIStep1();
    this.bindUIStep2();
}

ReminderPage.prototype.createControls = function() {
    this.controls.datePicker = new DatePicker('#datePickerControl', 'datePicker');
    this.controls.timeSelector = new TimeSelector('#timeSelectorControl', 'timeSelector');
    
    
    /* STEP 2 */
    this.controls.checkBoxes = [];
    var containers = document.getElementsByClassName('radioButton');
    for (var i = 0; i < containers.length; i++) {
        this.controls.checkBoxes[i] = new CheckBox(containers[i]);
    }

    this.controls.moodList = new AutoScrollingList('#moodListControl', 'moodList');

    var controlName = "playChitChatButtonText";
    this.controls[controlName] = new SimpleText('#playChitChatButtonText', { fontSize: 'inherit', fontWeight: 'inherit', color: 'inherit' });

    this.controls.audioControl = new AudioControl('#audioControl', 'audioControl');
    
    /* Image Chooser */
    this.controls.popupBox = new PopupBox('#popupContainer', 'popupBox');
    // add images to popup
    var html = '';
    for (var i = 0; i < 34; i++) {
        html += '<img src="images/ReminderPage/100x100/' + i + '.png" class="remindImage" imageId="' + i + '" />';
    }
    $('#popupContent').html(html);

    /* Waiter */
    this.controls.waitOverlap = new WaitOverlap(document.body);
}

ReminderPage.prototype.bindInternalControls = function() {
    this.controls.datePicker.bind({ Date: '2/Jun/1999' });
    this.controls.timeSelector.bind();

    for (var i = 0; i < this.controls.checkBoxes.length; i++) {
        this.controls.checkBoxes[i].bind({ IsChecked: false, Text: PagesResourcesStrings['RemindersRadioButton' + i] });
    }

    this.controls.popupBox.bind();

    this.controls.waitOverlap.bind();
}

ReminderPage.prototype.bindUIStep1 = function() {
    // watermarks binding
    $('#whatTextBox').attr('placeholder', PagesResourcesStrings['whatTextBox']);          

    // recurrrance type buttons click        
    $('.scheduleButton').click(function(e) {
        if (e.button == 0) {
            $('.scheduleButtonSelected').removeClass('scheduleButtonSelected');
            $(this).addClass('scheduleButtonSelected');
        }
    });

    // focus on textBox
    this.focus();

    $('.reminder').click(function(e) {
        if (e.button == 0) {
            // set reminder's value to text box
            var text = $(this).text();
            $('#whatTextBox').val(text).removeClass('watermarked');

            // set big reminder image
            var imageId = $(this).find('.reminderSmallImage').attr('imageId');
            Page.imageId = imageId;
            $('#reminderImage')[0].src = "images/ReminderPage/100x100/" + imageId + ".png";
        }
    });

    $('#nextButton').click(function(e) {
        if (e.button == 0) {
            $('#step1').css('visibility', 'hidden');
            $('#step2').css('visibility', 'visible');
            executeCommand('', 'OnNavigateSecondPage', '');
        }
    });

    $('#changeButton').click(function(e) {
        if (e.button == 0) {
            Page.showImageChooserPopup();
        }
    });

    // image chooser popup events
    $('.remindImage').click(function(e) {
        if (e.button == 0) {
            $('.remindImageSelected').removeClass('remindImageSelected');
            $(this).addClass('remindImageSelected');

            // set big reminder image
            var imageId = $(this).attr('imageId');
            if (Page.imageId != imageId) {
                this.imageId = imageId;
                $('#reminderImage')[0].src = this.src;
            }

            Page.hideImageChooserPopup();
        }
    });

    this.controls.popupBox.closeCallback = Page.hideImageChooserPopup;
}

ReminderPage.prototype.bindUIStep2 = function() {
    $('.radioButton').click(function(e) {
        if (e.button == 0) {
            Page.selectRadioButton(this);
        }
    });

    // button click
    $('#backButton').click(function(e) {
        if (e.button == 0) {
            $('#step2').css('visibility', 'hidden');
            $('#step1').css('visibility', 'visible');
        }
    });

    // set controls events callbacks
    this.controls.waitOverlap.addCallback('show', function() {
        if (Page.focusedElement) {
            Page.focusedElement.blur();
        }
    });

    this.controls.waitOverlap.addCallback('hide', function() {
        if (!window.top.Navigation.isMessageBoxShown) {
            Page.focus();
        }
    });
}

ReminderPage.prototype.selectRadioButton = function(radioButton) {
    var radioContent = $(radioButton).siblings('.radioContent');
    // index of current radio button
    var index = $('.radioButton').index(radioButton);
    Page.controls.checkBoxes[index].setChecked(true);

    // do not persorm anything if this item is already selected
    if (radioContent.hasClass('shownRemindContent')) {

        return;
    }

    $('.shownRemindContent').hide(200).removeClass('shownRemindContent');
    radioContent.show(200).addClass('shownRemindContent');
    
    //Page.controls.checkBoxes[index].setChecked(true);

    for (var i = 0; i < Page.controls.checkBoxes.length; i++) {
        if (index != i) {
            Page.controls.checkBoxes[i].setChecked(false);
        }
    }

    // showing mood list for specified items
    if (index == 1 || index == 2) {
        $('#moodListControl').detach().appendTo(radioContent);
    }
}

ReminderPage.prototype.loadData = function(dataObj) {
    $('#whatTextBox').val(dataObj.Description);

    var dateTime = new Date(timeFromUTC(dataObj.ExactDateTime));
    this.controls.datePicker.setDate(dateTime.getTime());
    this.controls.timeSelector.setTime24({ Hour: dateTime.getHours(), Minute: dateTime.getMinutes() });

    for (var prop in ReminderRecurranceType) {
        if (ReminderRecurranceType[prop] == dataObj.RecurranceType) {
            $('.scheduleButton[dataType="' + prop + '"]').addClass('scheduleButtonSelected');
        }
    }

    // select remind method
    var prop;
    for (prop in ReminderMethod) {
        if (ReminderMethod[prop] == dataObj.RemindMethod) {
            break;
        }
    }
    Page.selectRadioButton($('.item[remindMethod="' + prop + '"]').find('.radioButton')[0]);

    //set Pages Image
    Page.imageId = dataObj.ImageId;
    $('#reminderImage')[0].src = "images/ReminderPage/100x100/" + Page.imageId + ".png";
}

ReminderPage.prototype.getUserInputJSON = function() {
    var exactDateTime = new Date(this.controls.datePicker.getDate());
    exactDateTime.setHours(this.controls.timeSelector.getTime().Hour);
    exactDateTime.setMinutes(this.controls.timeSelector.getTime().Minute);

    return JSON.stringify({
        Description: $('#whatTextBox').val(),
        ImageId: parseInt(this.imageId),
        ExactDateTime: timeToUTC(exactDateTime.getTime()),
        RecurranceType: ReminderRecurranceType[$('.scheduleButtonSelected').attr('dataType')],
        RemindMethod: ReminderMethod[$('.shownRemindContent').parent().attr('remindMethod')]
    });
}
 
ReminderPage.prototype.showImageChooserPopup = function() {
    $('#imageChooserPopup').css('visibility', 'visible');

    //  Mega fix for paddings in rtl - browser doesn't reacted paddings in css...
    if ($('body').hasClass('RTL')) {
        $('#popupContent').css('padding-left', '9px'); $('#popupContent').css('padding-left', '9px');
        setTimeout(function() {
            $('#popupContent').css('padding-left', '10px');
        }, 50);
    }
}

ReminderPage.prototype.hideImageChooserPopup = function() {
    $('#imageChooserPopup').css('visibility', 'hidden');
}

// enum
var ReminderRecurranceType = {
    OneTimeOnly: 0,
    Days: 1,
    Weeks: 2,
    Months: 3,
    Years: 4
}

var ReminderMethod = {
    SurpriseMe: 0,
    SurpriseMeWithMood: 1,
    SpecificAction: 2,
    RecordMyOwn: 3
}
    

var Page = new ReminderPage();
