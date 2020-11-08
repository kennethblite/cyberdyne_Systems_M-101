/*
 * Singleton than implements cloud under actionButtons
 */
var ActionCloud = {
    jCloud: null,

    width: 0,

    actionButton: null,

    moodImageTimer: null,

    isCloudShown: false,

    // for mood image in rtl need to be other
    isRTL: false,

    init: function() {
        this.jCloud = $($('#actionCloud').html()).appendTo('body').eq(0);
        this.width = this.jCloud.width();

        if ($('body').hasClass('RTL')) {
            this.isRTL = true;
        }

        this.bindUI();
    },

    bindUI: function() {
        this.jCloud.mouseleave(function(e) {
            ActionCloud.actionButton.unselect();
            ActionCloud.hide();
        });

        this.jCloud.find('span[command]').click({
            control: this,
            controlName: 'ActionButton' // virtual singleton
        }, function(e) {
            if (e.button == 0) {
                ActionCloud.actionButton.unselect();
                executeCommand(e.data.controlName, $(this).attr('command'), e.data.control.actionButton.id);
                ActionCloud.hide();
            }
        });
    },

    show: function(actionButton) {
        if (!this.jCloud) {
            return;
        }

        // unselect button if there was some selected previously button   
        if (this.actionButton) {
            this.actionButton.unselect();
        }

        // save ref to new button
        this.actionButton = actionButton;

        var buttonPosition = actionButton.getPosition();
        var cloudOverhang = this.width / 2 - actionButton.getWidth() / 2;

        // left position of cloud
        var cloudLeft = actionButton.getAbsPosition().left + (actionButton.getWidth() / 2) - (this.width / 2);
        var shift = 0;

        // move cloud to right for the first column                         
        if (cloudOverhang > buttonPosition.left) {
            shift = cloudOverhang - buttonPosition.left;
            cloudLeft += shift;
        }
        // move cloud to right for the last column
        if (cloudOverhang > buttonPosition.right) {
            shift = cloudOverhang - buttonPosition.right;
            cloudLeft -= shift;
        }

        // determine whether to show button and how (calc additional offsets)            
        var buttonViewPortPosition = actionButton.getViewportPosition();

        // in case if action list is not returning info about action button
        if (buttonViewPortPosition == 1) {
            return;
        }

        if (buttonViewPortPosition && !buttonViewPortPosition.isInLastColumn &&
           (buttonViewPortPosition && cloudOverhang - shift > buttonViewPortPosition.left ||
            buttonViewPortPosition && cloudOverhang - shift > buttonViewPortPosition.right)) {
            return;
        }

        if (buttonViewPortPosition && buttonViewPortPosition.isInLastColumn) {
            if (buttonViewPortPosition.right < 0) {
                return;
            }

            cloudLeft -= buttonViewPortPosition.listPadding + 10;
        }

        this.jCloud.css({
            top: actionButton.getAbsPosition().top + 14 + 'px',
            left: cloudLeft + 'px',
            webkitAnimationName: 'cloudOpening',
            webkitAnimationDuration: '0.5s',
            opacity: '1',
            zIndex: '2'
        });

        this.isCloudShown = true;

        // add mood icon   
        if (actionButton.isMoodShown && actionButton.moodName) {
            var moodImage = $('#moodImage');
            moodImage.find('#moodText').html(actionButton.moodName);

            setTimeout(function() {
                if (ActionCloud.isCloudShown) {
                    var settings = {
                        backgroundImage: 'url("images/Moods/Small/' + actionButton.moodName + '.png")',
                        top: actionButton.getAbsPosition().top - 7,
                        zIndex: 1000,
                        webkitTransform: ActionCloud.isRTL ? "rotate(-10deg) scale(1.5)" : "rotate(10deg) scale(1.5)",
                        opacity: 1
                    };

                    settings['left'] = actionButton.getAbsPosition().left - 19;
                    if (!ActionCloud.isRTL) {
                        settings['left'] += actionButton.getWidth() + 6;
                    }

                    ActionCloud.moodImageTimer = moodImage.css(settings);
                }
            }, 200);
        } else {
            clearTimeout(ActionCloud.moodImageTimer);

            $('#moodImage').css({
                webkitTransform: "rotate(10deg) scale(1)",
                opacity: 0
            });
        }

        // animate cloud buttons opening
        var fadeFunc = function() {
            this.jCloud.children()
                .stop(true, true)
		  	    .fadeInSequence(150);
        }
        setTimeout(fadeFunc.call(this), 500);
    },

    hide: function() {
        this.jCloud.css({
            opacity: '0',
            zIndex: '-1'
        });

        this.isCloudShown = false;

        clearTimeout(ActionCloud.moodImageTimer);
        $('#moodImage').css({
            webkitTransform: ActionCloud.isRTL ? "rotate(-10deg) scale(1)" : "rotate(10deg) scale(1)",
            opacity: 0
        });

        // animate cloud buttons closing
        this.jCloud.children()
            .stop(true, true)
            .css('opacity', '0');

        this.actionButton = null;
    }
}
