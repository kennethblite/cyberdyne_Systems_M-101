var Page = {
    container: null,

    name: 'ChatmanIntro',

    currentScene: 0,

    scenes: [],

    controls: {},

    animationTime: 1150,

    scrollingEnabled: true,

    dataObj: null,

    selectedPersonality: null,

    personalityID: DefaultPersonalityID,

    positionPropertie: 'left',

    isRTL: false,

    bind: function() {

        this.init();

        this.createControls();
    },

    init: function() {
        if ($('body').hasClass('RTL')) {
            $('link[href="css/ChatmanIntro.css"]').attr('href', 'css/ChatmanIntroRTL.css');
            this.positionPropertie = 'right';
            this.fixRTLIssues();
            this.isRTL = true;
        }


        var contructor, scene;
        for (var i = 0; i < 13; i++) {
            contructor = eval('Scene' + (i + 1));
            scene = new contructor(Page);
            scene.index = i;
            this.scenes.push(scene);

        }
    },

    fixRTLIssues: function() {
        $('.backArrow').attr('src', 'images/Intro/nextArrow.png');
        $('.nextArrow').attr('src', 'images/Intro/backArrow.png');

        $('img[hasRTL]').each(function() {
            var index = this.src.lastIndexOf('/');
            this.src = this.src.slice(0, index) + '/RTL' + this.src.slice(index);
        });
    },

    createControls: function() {

        var controlName;

        controlName = "chatmanState";
        this.controls[controlName] = new ChatmanState('#chatmanStateControl');

        controlName = "volumeControl";
        this.controls[controlName] = new VolumeControl('#volumeControl');

        this.bindUI();
    },

    bindUI: function() {
        // backspace handling - denies browser go back
        document.body.onkeydown = function(e) {
            var tagName = e.srcElement.tagName.toUpperCase();
            if (e.keyCode == 8 && tagName != 'INPUT' && tagName != 'TEXTAREA' && $(e.target).attr('contentEditable') != "true") {
                return false;
            }
        }
        
        // dragging functionality        
        $('[dragElement]').mousedown(function(e) {
            if (e.target == this) {
                executeCommand('', 'DragInitiated', '');
            }
            e.stopPropagation();
        });

        // bind tooltips    
        $('#parentsInformationLink, #fixProblemLink, #faqLink', '#topPanel').tipTip({
            defaultPosition: "bottom",
            stylingClass: 'tooltip',
            hasArrow: false,
            checkBounds: false,
            smartPositioning: false
        });
        $('#closeCross', '#topPanel').tipTip({
            defaultPosition: "bottom",
            stylingClass: 'tooltip',
            hasArrow: false,
            offset: { x: Page.isRTL ? 10 : -10, y: 0 },
            checkBounds: false,
            smartPositioning: false
        });
    },

    loadData: function(dataObj) {
        this.dataObj = dataObj;
        try {
            $('#nameTextBox').val(dataObj.UserName);
            $('#chatmanNameTextBox').val(dataObj.ChatmanName);

            // check input persoanlity name - may be null
            if (!dataObj.PersonalityID) {
                dataObj.PersonalityID = DefaultPersonalityID;
            }
            Page.personalityID = dataObj.PersonalityID;

            if (Page.personalityID != DefaultPersonalityID) {
                var index = 0;
                while (index < PersonalitiesList.length) {
                    if (PersonalitiesList[index].ID == Page.personalityID)
                        break;

                    index++;
                }

                // also pre-set the ActiveIntroPersonalityStrings accordin to the current personality
                ActiveIntroPersonalityStrings = eval('IntroResourceStringPersonality' + index.toString());
            }

            if (!dataObj.WasIntroPreviouslyCompleted) {
                this.dataObj.Gender = null;
            }

            // remove checkbox if intro is not running on startup
            if (!dataObj.RunningOnStartup) {
                $('#runOnStartupCheckBoxControl').remove();
            }
        } catch (e) {
            $('#output').html(e + '');
        }

        // bind 1st scene
        this.scenes[0].bind();
        this.scenes[0].bindView();
    },

    getInputJSON: function() {
        var dataObj = {
            UserName: $('#nameTextBox').val(),
            ChatmanName: $('#chatmanNameTextBox').val(),
            RunningOnStartup: false,
            Gender: this.scenes[3].gender,
            PersonalityID: Page.personalityID
        }

        return JSON.stringify(dataObj);
    },

    scrollNextScene: function() {
        if (!this.scrollingEnabled) {
            return;
        }

        var scrollWidth = $('#scene' + (this.currentScene + 1)).width();
        var scenesContainerLeft = parseInt($('#scenesContainer').css(this.positionPropertie));
        $('#scenesContainer').css(this.positionPropertie, scenesContainerLeft - scrollWidth);

        this.scenes[this.currentScene].unbind();

        this.currentScene++;
        this.scrollingEnabled = false;

        // bind View for scene, while it is animating
        this.scenes[this.currentScene].bindView();

        setTimeout(function() {
            // unbind prev page view
            Page.scenes[Page.currentScene - 1].unbindView();
            // bind current page
            Page.scenes[Page.currentScene].bind();

            Page.scrollingEnabled = true;

        }, this.animationTime);
    },

    scrollPrevScene: function() {
        if (!this.scrollingEnabled) {
            return;
        }

        var scrollWidth = $('#scene' + (this.currentScene)).width();
        var scenesContainerLeft = parseInt($('#scenesContainer').css(this.positionPropertie));
        $('#scenesContainer').css(this.positionPropertie, scenesContainerLeft + scrollWidth);

        Page.scenes[Page.currentScene].unbind();

        this.currentScene--;
        this.scrollingEnabled = false;

        // bind View for scene, while it is animating
        this.scenes[this.currentScene].bindView();

        setTimeout(function() {
            Page.scenes[Page.currentScene + 1].unbindView();
            Page.scenes[Page.currentScene].bind();

            Page.scrollingEnabled = true;

        }, this.animationTime);
    },

    showConnectChatmanMessage: function() {
        $('#connectChatmanMessageBackground, #connectMessageText').show();
    },

    hideConnectChatmanMessage: function() {
        $('#connectChatmanMessageBackground, #connectMessageText').hide();
    },

    // run text in scrollers in each scene
    runSceneScroller: function(sceneIndex, chitChatCode, lengthInMs) {
        this.scenes[sceneIndex].runScroller(lengthInMs);
    }
};
