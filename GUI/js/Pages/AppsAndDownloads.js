/*
 * AppsAndDownloads page type declaration
 */
// inherite from Base Control
extend(AppsAndDownloadsPage, BasePage);

function AppsAndDownloadsPage() {
    AppsAndDownloadsPage.superclass.constructor.apply(this, arguments);
    this.name = 'AppsAndDownloads';
}

var Page = new AppsAndDownloadsPage();
