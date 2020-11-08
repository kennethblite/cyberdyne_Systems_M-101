// inherite from Base Control
extend(ProfileLink, BaseControl);
ProfileLink.templateId = "#profileLinkTemplate";

// ProfileLink type function-construstor
function ProfileLink(container){
    ProfileLink.superclass.constructor.apply(this, arguments);
}
