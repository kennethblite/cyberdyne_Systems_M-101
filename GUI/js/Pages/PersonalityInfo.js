/*
* PersonalityInfo page type declaration
*/
// inherite from Base Control
extend(PersonalityInfoPopup, BasePopup);

function PersonalityInfoPopup() {
    PersonalityInfoPopup.superclass.constructor.apply(this, arguments);
    this.name = 'PersonalityInfo'
        
    this.seletedColorScheme = null;
}

PersonalityInfoPopup.prototype.createControls = function(){
    PersonalityInfoPopup.superclass.createControls.apply(this, arguments);
    
    controlName = 'activePersonalityView';
    this.controls[controlName] = new ActivePersonalityView('#activePersonalityViewControl', controlName);
    
    controlName = 'privateCheckBox';
    this.controls[controlName] = new CheckBox('#privateCheckBoxControl', controlName);
    
    controlName = 'changeIconList';
    this.controls[controlName] = new AutoScrollingList('#changeIconListControl', controlName);
    
    controlName = 'customizeList';
    this.controls[controlName] = new MultySelectionList('#customizeListControl', controlName);
    
    
    // create background color switchers
    this.controls.colorRects = [];
    
    var colorContainers = $('.colorRectangle').toArray();        
    var colorRect;
    for(var i = 0; i < colorContainers.length; i++) {
        colorRect = new ColorRect(colorContainers[i]);
                   
        this.controls.colorRects.push(colorRect);
    }
}
        
PersonalityInfoPopup.prototype.loadData = function(dataObj){    
    $('#nameTextBox').val(dataObj.Name);
    $('#descriptionTextBox').val(dataObj.Description);
    
    this.controls.privateCheckBox.setChecked(dataObj.IsPrivate);
    
    this.controls.activePersonalityView.bind(dataObj);
    
    // set ColorScheme to active perosnality view
    Page.seletedColorScheme = dataObj.ColorSchemeIndex;
}
    
PersonalityInfoPopup.prototype.bindUI = function(){        
    PersonalityInfoPopup.superclass.bindUI.apply(this, arguments);
    
    /*
     * Tab Area events
     */
    var tabAreaElement = document.getElementById('tabArea');
    
    $('.tabButton', tabAreaElement).click(function(e){
        if (e.button == 0){
            // deselect selected button and select current
            $('.selectedTabButton', tabAreaElement).removeClass('selectedTabButton');
            $(this).addClass('selectedTabButton');
            
            // select tab content revative to selected button
            $('.selectedTabContent', tabAreaElement).removeClass('selectedTabContent');
            $('.tabContent:eq(' + $(this).attr('index') + ')').addClass('selectedTabContent');
        }
    });
    
    // set event handlers
    this.controls.customizeList.itemStateChanged.push(Page.customizeListItemStatedChangedHandler);        
    this.controls.changeIconList.selectedItemChanged.push(Page.selectedPersonalityChangedHandler);
    
    //focus on textbox
    this.focus('#nameTextBox');
}
    
PersonalityInfoPopup.prototype.bindInternalControls = function(){
    PersonalityInfoPopup.superclass.bindInternalControls.apply(this, arguments);
    
    this.controls.privateCheckBox.bind({
        Text: ControlsResourceStrings.PrivateScope,
        IsChecked: true
    });       
    
    // bind change icon list
    var changeiconListData = {
        ListElements: [
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[0].Images},
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[1].Images},
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[2].Images},
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[3].Images},
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[4].Images},
            {Name: "", BaseIconID: 3, Images: DefaultPersonalities[5].Images}
        ],
        ItemConstructor: 'MiniPersonalityButton',      
        RaiseExecuteCommand: false,
        SelectedIndex: 0,
    };
    this.controls.changeIconList.bind(changeiconListData);
    
    
    // bind color rects
    var dataObj, colorRect;
    for(var i = 0; i < this.controls.colorRects.length; i++) {           
        dataObj = {Color: ColorSchemes[i].DarkColor, SchemeIndex: i};
        
        colorRect = this.controls.colorRects[i];
        colorRect.bind(dataObj);
        colorRect.setClickCallback(Page.colorRectClickHandler);
    }
    
    // bind customize list        
    var customizeListData = {
        ListElements: [
            { ImageName: "0" },
            { ImageName: "1" },
            { ImageName: "2" },
            { ImageName: "3" },
            { ImageName: "4" },
            { ImageName: "5" },
            { ImageName: "6" },
            { ImageName: "7" },
            { ImageName: "8" },
            { ImageName: "9" },
            { ImageName: "10" },
            { ImageName: "11" },
            { ImageName: "12" },
            { ImageName: "13" },
            { ImageName: "14" },
            { ImageName: "15" },
            { ImageName: "16" },
            { ImageName: "17" },
            { ImageName: "18" },
            { ImageName: "19" },
            { ImageName: "20" },
            { ImageName: "21" },
            { ImageName: "22" },                
            { ImageName: "23" },                
            { ImageName: "24" },
            { ImageName: "25" },
            { ImageName: "26" },
            { ImageName: "27" },
            { ImageName: "28" },
            { ImageName: "29" },
            { ImageName: "30" },
            { ImageName: "31" },
            { ImageName: "32" },
            { ImageName: "33" }                            
        ],
        ItemConstructor: 'SelectableImage',      
        SelectedIndecies: [],
    };        
    this.controls.customizeList.bind(customizeListData);
}
    
PersonalityInfoPopup.prototype.selectedPersonalityChangedHandler = function(miniPersonalityButton, selectedIndex) {        
    var defaultPersonality = DefaultPersonalities[selectedIndex];
    
    // set images of default for selected default personality       
    Page.controls.activePersonalityView.removeAllImages();
    Page.controls.activePersonalityView.addImage(defaultPersonality.Images.slice());
    
    // select items in customize list         
    Page.controls.customizeList.selectItems( defaultPersonality.Images.slice() );
}
    
PersonalityInfoPopup.prototype.customizeListItemStatedChangedHandler = function(selectableImage){
    // find image
    var imageIndex = parseInt( selectableImage.imageName );
    
                            
    // add or remove image
    if (selectableImage.isSelected) {
        // select personality in from changeIconList wich has similar attributes
        var i, found = false;
        
        for(i = 0; i < DefaultPersonalities.length; i++) {                
            
            if ( DefaultPersonalities[i].Images.indexOf(imageIndex) != -1 ) {
                // selects default personality, without invoking Page.selectedPersonalityChangedHandler or any other handlers
                Page.controls.changeIconList.scrollToIndex(i, false);
                found = true;
                break;
            }
        }           
       
       // add images to active perosnality view
       Page.controls.activePersonalityView.addImage( imageIndex );
    } else {
        Page.controls.activePersonalityView.removeImage( imageIndex );
    }
}
    
PersonalityInfoPopup.prototype.colorRectClickHandler = function(colorRect) {       

    Page.controls.activePersonalityView.setColorScheme(colorRect.colorShemeIndex);
    Page.seletedColorScheme = colorRect.colorShemeIndex;
}
    
    
    // retuns data gathered from page in JSON
PersonalityInfoPopup.prototype.getUserInputJSON = function() {            

        return JSON.stringify({
            Name: $('#nameTextBox').val(),
            Description: $('#descriptionTextBox').val(),
            IsPrivate: this.controls.privateCheckBox.getChecked(),        
            Images: this.controls.activePersonalityView.getImageIndexies(),
            ColorSchemeIndex: Page.seletedColorScheme
        });
}

var Page = new PersonalityInfoPopup();
