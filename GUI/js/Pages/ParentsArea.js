/*
* ParentsArea page type declaration
*/
// inherite from Base Control
extend(ParentsAreaPopup, BasePopup);

function ParentsAreaPopup() {
    ParentsAreaPopup.superclass.constructor.apply(this, arguments);
    
    this.name = 'ParentsArea';
    this.checkBoxesData = [
        "DontAllowCreation",
        "DontAllowDownload",
        "DontAllowSharing",
        "DontAllowPreview"
    ];
}

ParentsAreaPopup.prototype.createControls = function(){
    ParentsAreaPopup.superclass.createControls.apply(this, arguments);
    
    this.controls.waitOverlap = new WaitOverlap(document.body);
    
    // SCREEN 2
    this.controls.checkBoxes = [];
    
    var chechBox;
    var checkBoxes = $('.checkBoxControl');
    for(var i = 0; i < 4; i++) {
        chechBox = new CheckBox( checkBoxes.eq(i) );
        this.controls.checkBoxes.push( chechBox );
    }
}
        
ParentsAreaPopup.prototype.bindInternalControls = function(){
    ParentsAreaPopup.superclass.bindInternalControls.apply(this, arguments);
    
    this.controls.waitOverlap.bind();
    
    // SCREEN 2        
    for(var i = 0; i < 4; i++) {            
        this.controls.checkBoxes[i].bind({
            IsChecked: false,
            Text: ControlsResourceStrings['ParentsAreaCheckBox' + i]
        });
    }
}
    
ParentsAreaPopup.prototype.bindUI = function(){
    ParentsAreaPopup.superclass.bindUI.apply(this, arguments);
    
    $('#exitAreaButton').click(function(e){
        if (e.button == 0) {
            Page.begin(true);
        }
    }); 
    this.bindUIScreen1();
    this.bindUIScreen2();
    this.bindUIScreen3();       
    
    $('[notSettedPassword]').hide();
}
    
ParentsAreaPopup.prototype.bindUIScreen1 = function(){
    // screen 1
    $('#setPasswordButton').click(function(e) {
        if (e.button == 0) {
            $('#passwordTable1').show();
            $('.passwordTextBox').eq(0).focus();
        }
    });
    
    $('#setButton').click(function(e) {
        if (e.button == 0) {
            executeCommand('', 'SetPassword', JSON.stringify({
                Password1: $('.passwordTextBox').eq(0).val(),
                Password2: $('.passwordTextBox').eq(1).val()
            }));
        }
    });
    
    $('#enterAreaButton').click(function(e) {
        if (e.button == 0) {
            $('#passwordTable2, #clickHere2').show();
            $('#passwordTable2').find('.passwordTextBox').focus();
        }            
    });
    
    $('#goButton').click(function(e) {            
        executeCommand('', 'Login', JSON.stringify({
            Password: $('#passwordTable2').find('.passwordTextBox').val(),
        }));            
    });
    
    $('#passwordTable2 .passwordTextBox').keypress(function(e) { 
        if (e.keyCode == 13) {
            $('#goButton').click();
        }
    });
}
    
ParentsAreaPopup.prototype.bindUIScreen2 = function(){
     // SCREEN 2
    $('#moreButton').click(function(e) {
        $('#moreContent').toggleClass('hidden');
    });
    
    $('#addWordsButton').click(function(e){
        if (e.button == 0) {
             Page.showScreen('#screen3');
             Page.setEnabledTextBoxes('#addWordTextBox, #dangerousWordsTextBox');
             
             $('#addWordTextBox').focus();                 
        }
    });
    
    $('#changePassWordButton').click(function(e){
        if (e.button == 0) {
            $('#screen2Content').hide();
            $('#changePasswordTable').show();
            
            Page.setEnabledTextBoxes('#screen2Password, #screen2PasswordAgain');
            
            $('#screen2Password').focus();
        }
    });
    
    $('#setButton2').click(function(e){
        if (e.button == 0) {
            executeCommand('', 'SetPassword', JSON.stringify({
                Password1: $('#screen2Password').val(),
                Password2: $('#screen2PasswordAgain').val()
            }));
        }
    });
}
    
ParentsAreaPopup.prototype.bindUIScreen3 = function(){
     // SCREEN 3        
    $('#addButton').click(function(e) {
        // text that should be added
        var newText = jQuery.trim( $('#addWordTextBox').val() );
        $('#addWordTextBox').val('')
                            .focus();            
        
        if (e.button == 0 && newText != '') {
            // current text in big textarea
            var currText = jQuery.trim( $('#dangerousWordsTextBox').val() );                
            var coma = ', ';
            
            // checkings with coma and spaces
            if ( currText == '') {
                coma = '';
            }                
            if ( (currText[currText.length - 1] == ',') ){
                coma = ' ';
            }
            
            var changedText = currText + coma + newText;
            $('#dangerousWordsTextBox').val(changedText);
            
            // execute C# command
            executeCommand('', 'TextChanged', changedText);
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
    
    $('#dangerousWordsTextBox')
    // MAX LENGTH FOR TEXTAREA        
    .keypress(function() {            
        if ($(this).val().length >= 10000) {
            return false;
        }
    });
}
     
ParentsAreaPopup.prototype.loadData = function(dataObj) {       
    //  set checkBoxes
    for(var i = 0; i < 4; i++) {            
        this.controls.checkBoxes[i].setChecked(dataObj[ this.checkBoxesData[i] ]);
    }              
    
    $('#dangerousWordsTextBox').val(dataObj.DangerWords);
    
    this.begin( dataObj.PasswordSet );
}
    
ParentsAreaPopup.prototype.begin = function(passwordSet) {
    this.showScreen('#screen1');
    $('[loggedIn], #passwordTable2').hide();
    
    if (passwordSet) {
        $('[notSettedPassword], #passwordTable1').hide();
        
        $('#enterAreaButton').click(function(e) {
            if (e.button == 0) {
                $('#passwordTable2, #clickHere2').show();
                $('#passwordTable2').find('.passwordTextBox').focus();
            }            
        }).removeClass('enterButtonLocked');
        
        Page.setEnabledTextBoxes('#passwordTable2 .passwordTextBox');
        
    } else {
        $('[notSettedPassword]').show();
        $('#enterAreaButton').unbind('click').addClass('enterButtonLocked');
        
        // set enabled textboxes            
        Page.setEnabledTextBoxes('#passwordTable1 .passwordTextBox');
    }        
    
    //$('#passwordTextBox').val('');        
}
    
ParentsAreaPopup.prototype.login = function(){
    this.showScreen('#screen2');        
    
    $('#screen2Content').show();
    $('#changePasswordTable').hide();
    $('[loggedIn]').show();
}

    // show screen and hides all other
ParentsAreaPopup.prototype.showScreen = function(screen) {
    $('.acviteScreen').removeClass('acviteScreen');
    $(screen).addClass('acviteScreen');        
}
    
    // retuns data gathered from page in JSON
ParentsAreaPopup.prototype.getUserInputJSON = function() {
    var dataObj = {};
            
    for(var i = 0; i < 4; i++) {            
        dataObj[ this.checkBoxesData[i] ] = this.controls.checkBoxes[i].getChecked();
    }              
    
    dataObj.DangerWords = $('#dangerousWordsTextBox').val();
    
    return JSON.stringify(dataObj);
}

ParentsAreaPopup.prototype.setEnabledTextBoxes = function(elements){
     $('input, textarea').attr('disabled', 'disabled');
     $(elements).removeAttr('disabled');
}

var Page = new ParentsAreaPopup();
