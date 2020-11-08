/*
 * Singleton than implements info Menu
 */
var InfoMenu = {
    jMenu: null,

    height: 0,

    actionButton: null,

    isRTL: false,

    init: function() {        
        this.jMenu = $($('#infoMenuTemplate').html()).appendTo('body');
        this.height = this.jMenu.height();

        if ($('body').hasClass('RTL')) {
            this.isRTL = true;
        }

        this.bindUI();
    },

    bindUI: function() {
        this.jMenu.mouseleave(function(e) {
            if (InfoMenu.actionButton.canInfoMenuUnselect()) {
                InfoMenu.actionButton.unselect();
            } else {
                InfoMenu.hide();
            }
        });
    },

    bind: function(dataObj) {
        this.jMenu.find('#descriptionInfo').html(dataObj.Description);
        this.jMenu.find('#designerInfo').html(dataObj.Designer);
        this.jMenu.find('#scope').html(dataObj.IsPrivate ? ControlsResourceStrings.PrivateScope : ControlsResourceStrings.PublicScope);
    },

    show: function(actionButton) {
        if (!this.jMenu) {
            return;
        }
        this.actionButton = actionButton;

        // bind data to infoMenu
        this.bind(this.actionButton.infoMenuDataObj);

        var actionButtonLeft = actionButton.getAbsPosition().left;

        if (!this.isRTL) {
            this.jMenu.fadeIn(200).css({
                top: (actionButton.getAbsPosition().top - this.height + actionButton.infoTopOffset) + 'px',
                left: actionButtonLeft - 15 + 'px',
                zIndex: '7'
            });
        } else {
            this.jMenu.fadeIn(200).css({
                top: (actionButton.getAbsPosition().top - this.height + actionButton.infoTopOffset) + 'px',
                right: innerWidth - actionButtonLeft - actionButton.getWidth() - 15 + 'px',
                zIndex: '7'
            });
        }
    },

    hide: function() {
        this.jMenu.css({
            zIndex: '6'
        }).fadeOut(200);

        this.actionButton = null;
    }
}
