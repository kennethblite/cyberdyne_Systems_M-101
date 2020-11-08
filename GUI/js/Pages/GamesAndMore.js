/*
* GamesAndMore page type declaration
*/
// inherite from Base Control
extend(GamesAndMorePage, BasePage);

function GamesAndMorePage() {
    GamesAndMorePage.superclass.constructor.apply(this, arguments);
    this.name = 'GamesAndMore';
}

var Page = new GamesAndMorePage();
