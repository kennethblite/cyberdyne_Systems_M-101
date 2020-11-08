// FUNCTION that converts from utc time
function timeToUTC(time) {
    var d = new Date();
    return time - d.getTimezoneOffset() * 60000;
}

function timeFromUTC(time) {
    var d = new Date();
    return time + d.getTimezoneOffset() * 60000;
}

// returs URL vars in object
function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = decodeURI(hash[1]);
    }
    return vars;
}

/*
* function that implements iheritance
* Adds constructor and superclass properties to each object
*/
function extend(Child, Parent) {

    var F = function() { };
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    Child.superclass = Parent.prototype;
}

/*
 * returns localized day string (exp: 1st, 2nd, 3th...)
 */
var IsEnglishLocale = true;

function getDayString(dayOfMonth) {
    var dayString = dayOfMonth.toString();

    if (IsEnglishLocale) {
        var ending = "th";

        if (dayString[dayString.length - 1] == "1" && (!(dayString[0] == "1" && dayOfMonth != 1)))
            ending = "st";
        else if (dayString[dayString.length - 1] == "2" && !(dayString[0] == "1"))
            ending = "nd";
        else if (dayString[dayString.length - 1] == "3" && !(dayString[0] == "1"))
            ending = "rd";

        return dayString + ending;
    }
    else
        return dayString;
}
