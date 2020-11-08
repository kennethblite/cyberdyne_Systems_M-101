/*
* UserProfile page type declaration
*/
// inherite from Base Control
extend(UserProfilePage, BasePage);

function UserProfilePage() {
    UserProfilePage.superclass.constructor.apply(this, arguments);
    this.name = 'UserProfile';
}

UserProfilePage.prototype.setPageMode = function(mode) {
    if (mode == 'ILike') {
        $('#topPart').hide();
        $('#iLikeArea').addClass('iLikeMode');
        $('#profileHeading').css('background-image', "url('images/UserProfilePage/iLikeHeading.png')");
        Page.mode == mode;
    }
}

UserProfilePage.prototype.createControls = function() {
    this.controls.birthdayDatePicker = new DatePicker('#datePickerControl', 'birthdayDatePicker');
    
    this.controls.waitOverlap = new WaitOverlap(document.body);
}

UserProfilePage.prototype.bindInternalControls = function() {
    this.controls.birthdayDatePicker.bind({ Date: new Date().getTime() });
    this.controls.waitOverlap.bind();
}

UserProfilePage.prototype.bindUI = function() {
    UserProfilePage.superclass.bindUI.apply(this, arguments);

    // watermarks binding
    $('#cityTextBox').attr('placeholder', PagesResourcesStrings['cityTextBox']);

    // watermarks for mood words textboxes
    $('#iLikeTable textarea').attr('placeholder', PagesResourcesStrings['moodTextboxesWatermark']);

    // gender image selecting
    $('.genderImage').click(function() {
        $('.genderImage').removeClass('selected');
        $(this).addClass('selected');        
    });

    // set autocomplete
    $('#countriesTextBox').autocomplete({
        source: this.getListOfCountries()
    });

    // focus on textBox
    this.focus('#nameTextBox');
}

UserProfilePage.prototype.getListOfCountries = function() {
    var list = [];

    $('#countryComboBox > option').each(function() {
        if (this.value != "  ") {
            list.push($.trim(this.innerHTML));
        }
    });

    return list;
}

UserProfilePage.prototype.loadData = function(dataObj) {
        $('#nameTextBox').val(dataObj.UserName);
        $('#cityTextBox').val(dataObj.City).removeClass('watermarked');
        $('#zipCodeTextBox').val(dataObj.ZipCode);

        $('div[data="' + dataObj.Gender + '"]').addClass('selected');

        $('#sportsTextBox').val(dataObj.Sports);
        $('#fashionTextBox').val(dataObj.Fashion);
        $('#musicTextBox').val(dataObj.Music);
        $('#celebsTextBox').val(dataObj.Celebs);
        $('#foodTextBox').val(dataObj.Food);
        $('#hobbiesTextBox').val(dataObj.Hobbies);

        $('#sportsNotTextBox').val(dataObj.ButNotSports);
        $('#fashionNotTextBox').val(dataObj.ButNotFashion);
        $('#musicNotTextBox').val(dataObj.ButNotMusic);
        $('#celebsNotTextBox').val(dataObj.ButNotCelebs);
        $('#foodNotTextBox').val(dataObj.ButNotFood);
        $('#hobbiesNotTextBox').val(dataObj.ButNotHobbies);
        $('#countryComboBox').val(dataObj.Country);

        $('#teachersTextBox').val(dataObj.Teachers);
        $('#moviesTextBox').val(dataObj.Movies);
        $('#superheroTextBox').val(dataObj.Superheroes);
        $('#countriesTextBox').val(dataObj.Countries);
        $('#friendshipTextBox').val(dataObj.Friendship);
        $('#animalsTextBox').val(dataObj.Animals);

        $('#teachersButNotTextBox').val(dataObj.ButNotTeachers);
        $('#moviesButNotTextBox').val(dataObj.ButNotMovies);
        
        this.controls.birthdayDatePicker.setDate(timeFromUTC(dataObj.BirthDate));

        if (Page.mode == "ILike") {
            // focus on textBox
            this.focusedElement = $('#sportsTextBox').focus();
            this.focusedElement();
        }
    },

UserProfilePage.prototype.setControlFocus = function(control) {
    $(control).focus().addClass('focusedControl')
              .one('blur', function() {
                  $(this).removeClass('focusedControl');
              });
}

UserProfilePage.prototype.getUserInputJSON = function() {
    var dataObj = {};

    dataObj.Sports = $('#sportsTextBox').val();
    dataObj.Fashion = $('#fashionTextBox').val();
    dataObj.Music = $('#musicTextBox').val();
    dataObj.Celebs = $('#celebsTextBox').val();
    dataObj.Food = $('#foodTextBox').val();
    dataObj.Hobbies = $('#hobbiesTextBox').val();

    dataObj.ButNotSports = $('#sportsNotTextBox').val();
    dataObj.ButNotFashion = $('#fashionNotTextBox').val();
    dataObj.ButNotMusic = $('#musicNotTextBox').val();
    dataObj.ButNotCelebs = $('#celebsNotTextBox').val();
    dataObj.ButNotFood = $('#foodNotTextBox').val();
    dataObj.ButNotHobbies = $('#hobbiesNotTextBox').val();

    dataObj.Teachers = $('#teachersTextBox').val();
    dataObj.Movies = $('#moviesTextBox').val();
    dataObj.Superheroes = $('#superheroTextBox').val();
    dataObj.Countries = $('#countriesTextBox').val();
    dataObj.Friendship = $('#friendshipTextBox').val();
    dataObj.Animals = $('#animalsTextBox').val();

    dataObj.ButNotTeachers = $('#teachersButNotTextBox').val();
    dataObj.ButNotMovies = $('#moviesButNotTextBox').val();

    dataObj.UserName = $('#nameTextBox').val();
    dataObj.Country = $('#countryComboBox').val();
    dataObj.City = $('#cityTextBox').val();
    dataObj.ZipCode = $('#zipCodeTextBox').val();

    dataObj.BirthDate = timeToUTC(this.controls.birthdayDatePicker.getDate());
    dataObj.Gender = $('.genderImage.selected').attr('data');

    return JSON.stringify(dataObj);
}

UserProfilePage.prototype.setImage = function(src) {
    $('#userIcon')[0].src = src;
}

var Page = new UserProfilePage();
