/*
 * Base for all pages and popups type declaration
 */
function BasePage() {
    this.name = null;
    this.controls = {};
    this.focusedElement = null;
}

/*
 * Binds page
 */
BasePage.prototype.bind = function(urlArgs) {
    this.init(urlArgs);
    this.setPageMode(urlArgs.mode);    
    this.createControls();
    this.bindInternalControls();
    this.bindUI();
}

/*
* Initialize the page
*/
BasePage.prototype.init = function(urlArgs) {

}

/*
 * Sets the page load state
 */
BasePage.prototype.setPageMode = function(mode) {
    
}

/*
* Creates controls for this page (external and internal)
*/
BasePage.prototype.createControls = function() {

}

/*
 * Binds internal (not connected to C#) controls
 */
BasePage.prototype.bindInternalControls = function() {

}

/*
 * Bind user interface behaviour and events
 */
BasePage.prototype.bindUI = function() {
    this.initTabKeyBehaviour();
    
    // backspace handling - denies browser go back
    document.body.onkeydown = function(e) {
        var tagName = event.srcElement.tagName.toUpperCase();
        if (e.keyCode == 8 && tagName != 'INPUT' && tagName != 'TEXTAREA') {
            return false;
        }
    }
}

/*
 * C# loads data to page using this function
 */
BasePage.prototype.loadData = function(dataObj) {

}

/*
 * Set focus on the page
 */
BasePage.prototype.focus = function(elem) {
    if (elem) {
        this.focusedElement = elem;
    }

    if (this.focusedElement) {
        $(this.focusedElement).focus();
    }
}

/*
 * Executes when page is not shown and not unloaded
 */
BasePage.prototype.pageHiddingHandler = function() {
    executeCommand('', 'PageHidding', '');
}

/*
 * Initializes custom tab behaviour (because standart way is not working properly in our webkit)
 */
BasePage.prototype.initTabKeyBehaviour = function() {
    var indexies = [];
    var currentIndex = 0;
    var maxIndex = 0;


    $('[tabindex]').each(function(index, element) {
        indexies.push(parseInt(this.getAttribute('tabindex')));
    }).keydown(function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();
            return false;
        }
    }).keypress(function(e) {
        if (e.keyCode == 9) {
            e.preventDefault();

            var index = currentIndex;
            do {
                if (e.shiftKey) {
                    --index;
                } else {
                    ++index;
                }

                if (index > indexies.length - 1) {
                    index = 0;
                }
                if (index < 0) {
                    index = indexies.length - 1;
                }

                if (!$('[tabindex=' + indexies[index] + ']').attr('disabled')) {
                    currentIndex = index;
                    break;
                }
            } while (index != currentIndex);

            Page.focus($('[tabindex=' + indexies[currentIndex] + ']'));
            return false;
        }
    }).click(function(e) {
        currentIndex = indexies.indexOf(parseInt(this.getAttribute('tabindex')));
    }).focus(function(e) {
        currentIndex = indexies.indexOf(parseInt(this.getAttribute('tabindex')));
        Page.focusedElement = this;
    });

    indexies.sort(function(a, b) {
        return a - b;
    });
}

// brigs page to its inital state
BasePage.prototype.reload = function() {
}
