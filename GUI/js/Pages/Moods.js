/*
* Moods page type declaration
*/
// inherite from Base Control
extend(MoodsPage, BasePage);

function MoodsPage() {
    MoodsPage.superclass.constructor.apply(this, arguments);
    this.name = 'Moods';
}

MoodsPage.superclass.loadData = function(dataObj) {
    this.controls.moodSelectors = [];
    
    var moodSelectorsContainerHTML = "<div>";
    for (var i = 0; i < dataObj.MoodList.length; i++) {

        if (i % 8 == 0 && i) {
            moodSelectorsContainerHTML += '</div><div>'
        }

        moodSelectorsContainerHTML += '<div id="moodSelectorControl' + i + '" class="moodSelectorControl"></div>';
    }
    moodSelectorsContainerHTML += '</div>';

    $('#moodSelectorsContainer').html(moodSelectorsContainerHTML);

    for (var i = 0; i < dataObj.MoodList.length; i++) {
        var moodSelector = new MoodSelector("#moodSelectorControl" + i);
        moodSelector.bind(dataObj.MoodList[i]);

        this.controls.moodSelectors.push(moodSelector);
    }
}

// returns data gathered from page in JSON
MoodsPage.superclass.getUserInputJSON = function() {
    var dataObj = {};
    dataObj.MoodList = [];

    for (var i = 0; i < Page.controls.moodSelectors.length; i++) {
        dataObj.MoodList.push(Page.controls.moodSelectors[i].getMoodState());
    }
    
    return JSON.stringify(dataObj);
}  

var Page = new MoodsPage();
