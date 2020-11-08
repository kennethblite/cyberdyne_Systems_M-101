/*
* MyChatmanApps page type declaration
*/
// inherite from Base Control
extend(MyChatmanAppsPage, BasePage);

function MyChatmanAppsPage() {
    MyChatmanAppsPage.superclass.constructor.apply(this, arguments);
    this.name = 'MyChatmanApps';
}

MyChatmanAppsPage.prototype.createControls = function() {
        this.controls.appsCountText = new SimpleText('#youHaveTextControl', 'appsCountText');
    },

MyChatmanAppsPage.prototype.loadData = function(dataObj) {
    $('#appsListContainer').empty();

    this.controls.chatmanApps = [];
    var app;

    for (var i = 0; i < dataObj.ChatmanApps.length; i++) {
        app = new ChatmanApp('#appsListContainer');
        app.bind(dataObj.ChatmanApps[i]);

        this.controls.chatmanApps.push(app);
    }
}

MyChatmanAppsPage.prototype.deleteApp = function(index) {
    this.controls.chatmanApps[index].destroy();
    this.controls.chatmanApps.splice(index, 1);
}

var Page = new MyChatmanAppsPage();
