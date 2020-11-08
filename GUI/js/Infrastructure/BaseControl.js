/*
 * Controls base
 * container - variable that identifies container for control to be bound to (required)
 * name - name of this control - used to send controll commands to C# (required if control send its commands)
 */ 
function BaseControl(container, name) {
    this.container = container;
    this.name = name;
    this.control = null;
    this.controls = null; // possible collection of child controls
    
    this.eventNames = []; // collection of control's public event
    this.callbacks = {}; // dictionary control's events callbacks
}

/*
 * Public method to C# - it encapsulates bind, init and bindUI invoke. 
 */
BaseControl.prototype.bind = function() {
    this._bind.apply(this, arguments);
    this.init.call(this, arguments[0]);

    if (this.controls) {
        this.createChildControls.call(this, arguments[0]);
    }

    this.bindUI();
}

/*
* Creates HTML for this control, using it's template, dataObj and jquery template engine
* Than appends created HTML object to container (passed in constructor)
* If bindType == Insert, than pass index in which to insert in 3 parameter
*/
BaseControl.prototype._bind = function(dataObj, bindType) {
    if (!this.constructor.templateId || this.constructor.templateId == "") {
        return;
    }

    // create html objects from template, uses templateId propertie of object constructor function
    if (dataObj) {
        try {
            this.control = $(this.constructor.templateId).tmpl(dataObj);
        } catch (e) {
            // Error
        }
    } else {
        this.control = $(this.constructor.templateId).html();
    }

    this.control = $(this.control);

    if (!bindType) {
        bindType = BindType.UseRebind;
    }

    // add html to container
    var $container = $(this.container);

    switch (bindType) {
        case BindType.UseRebind:
            $container.empty();
        case BindType.Append:
            $container.append(this.control);
            break;
        case BindType.Prepend:
            $container.prepend(this.control);
            break;
        case BindType.Insert:
            if (typeof (arguments[2]) != "undefined" || arguments[2] != null) {
                var insertIndex = arguments[2];
                $container.children().eq(insertIndex).before(this.control);
            } else {
                $container.append(this.control);
            }
            break;
    }
}

/*
 * Virtual method for initalizations
 */
BaseControl.prototype.init = function(dataObj) {

}

/*
 * Virtual method for creating and binding child controls
 */
BaseControl.prototype.createChildControls = function() {

}


/*
 * Virtual method for binding all user interface events
 */
BaseControl.prototype.bindUI = function() {
    
}

/*
 * Adds callback for control's public event
 */
BaseControl.prototype.addCallback = function(eventName, func) {
    if (this.eventNames.indexOf(eventName) != -1) {
        if (!this.callbacks[eventName]) {
            this.callbacks[eventName] = [];
        }

        this.callbacks[eventName].push(func);
    }
}

/*
 * Removes callback from control's public event
 */
BaseControl.prototype.removeCallback = function(eventName, func) {
    if (this.eventNames.indexOf(eventName) != -1) {
        if (func) {
            var callbackIndex = this.eventNames[eventName].indexOf(func);
            this.callbacks[eventName].splice(callbackIndex, 0);
        } else {
            this.callbacks[eventName].length = 0;
        }
    }
}

/*
 * Executes all callbacks for specified event
 */
BaseControl.prototype.invokeCallbacks = function(eventName) {
    if (this.eventNames.indexOf(eventName) != -1) {
        var callbacks = this.callbacks[eventName];

        if (callbacks) {
            for (var i = 0; i < callbacks.length; i++) {
                callbacks[i]();
            }
        }
    }
}

/*
 * Type of binding
 * UseRebind - empties contaienr before adding control
 * Append - append element to container
 * Prepend - prepends element to container
 * Insert - inserts element in specific position
 */
var BindType = {
    UseRebind: 0,
    Append: 1,    
    Prepend: 2,
    Insert: 3
};
