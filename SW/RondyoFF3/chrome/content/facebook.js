//facebook chat hooks implementation

CHooksFacebook = function() {
    //mark all tabs as "not found"
    this.UnmarkChatTabs = function(doc) {
        try {
            for (var i = 0; i < doc.aChatTabs.length; i++)
                doc.aChatTabs[i].marked = false;
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }
    //check for chat tab previous present	
    this.FindChatBar = function(doc, tabid) {
        try {
            for (var i = 0; i < doc.aChatTabs.length; i++)
                if (doc.aChatTabs[i].partner_id == tabid)
                return i;
            return -1;
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
        return -1;
    }

    //parse chat tabs
    this.CheckForSessions = function(doc, win) {
        try {
            if (!win.aChatTabs)
                win.aChatTabs = new Array();

            var chatbar = doc.getElementById("fbDockChatTabs"); // chat_tab_bar

            if (!chatbar)
                return;

            this.UnmarkChatTabs(win);

            var tabs = chatbar.childNodes;

            for (var i = 0; i < tabs.length; i++) {
                var titleBar = this.FindTagByClassNameContains(tabs[i], "div", "fbNubFlyoutTitlebar");

                if (!titleBar)
                    return;

                profileLink = this.FindTagByClassNameContains(titleBar, "a", "titlebarLink");

                if (!profileLink)
                    return;

                var tabid = profileLink.innerText;

                var ti = this.FindChatBar(win, tabid);

                if (ti >= 0) {
                    win.aChatTabs[ti].marked = true;
                    win.aChatTabs[ti].opened = true;
                    win.aChatTabs[ti].element = tabs[i];
                }
                else {
                    var newtab = new Object();
                    newtab.tabId = tabid;
                    newtab.partner_id = tabid;
                    newtab.element = tabs[i];

                    newtab.marked = true;
                    newtab.started = false;
                    newtab.history = false;
                    newtab.mhooked = 0;
                    newtab.opened = true;

                    newtab.session_guid = "facebook:FF-" + newtab.tabid;

                    win.aChatTabs.push(newtab);
                }
            }

            var i = 0;
            while (i < win.aChatTabs.length) {
                if (win.aChatTabs[i].marked == false && win.aChatTabs[i].opened == true) {
                    if (win.aChatTabs[i].started == true)
                        this.SendMessage(win.aChatTabs[i], "end", "finish", 0);
                    //doc.aChatTabs.splice(i, 1);
                    win.aChatTabs[i].opened = false;
                }
                else {
                    if (win.aChatTabs[i].opened == true)
                        this.CheckForMessages(doc, win.aChatTabs[i]);
                    i++;
                }
            }

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    //parse messages in appropriate tab				
    this.CheckForMessages = function(doc, tab) {
        var log_msg = "";
        try {
            var tabDiv = tab.element;

            var dc = this.FindDivByClassName(tabDiv, "fbNubFlyoutBodyContent");

            if (!dc) {
                return;
            }

            var cn = dc.getElementsByTagName("div");
            var indexes = new Array();
            var direction = new Array();
            var incomingMsg = false;

            for (var i = 0; i < cn.length; i++) {
                if (cn[i].className.indexOf("fbChatMessageGroup") > -1)
                    incomingMsg = (cn[i].children[0].children[0].title == tab.tabId);
                else
                    if (cn[i].className.indexOf("fbChatMessage") > -1) {
                    if (incomingMsg)
                        direction.push(1);
                    else
                        direction.push(0);

                    indexes.push(i);
                }
            }

            var real_count = indexes.length;

            //Fixes[1.0.2.*]- Lost of first incoming message in FF in facebook
            var lastinput = false;
            if (indexes.length && (direction[real_count - 1] == 1))
                lastinput = true;

            if (tab.history == false) {
                tab.mhooked = real_count;
                if (lastinput && real_count)
                    tab.mhooked -= Rondyo_Wrapper.facebookFML;
            }
            else if (real_count - tab.mhooked > 1) {
                tab.mhooked = real_count;
                if (lastinput && real_count)
                    tab.mhooked -= Rondyo_Wrapper.facebookFML;
            }

            if (real_count == 0)
                tab.mhooked = 0;

            for (var i = tab.mhooked; i < real_count; i++) {
                var type = "none";

                if (direction[i] == 1)
                    type = "input";
                else
                    type = "output";

                var ci = i;
                var dupl = 0;
                var ctype = type;
                var text = this.TextCnt(cn[indexes[i]]);

                while (ci > 0 && type == ctype) {
                    ci--;
                    if (direction[ci] == 1)
                        ctype = "input";
                    else
                        ctype = "output";

                    var ctext = this.TextCnt(cn[indexes[ci]]);

                    if (type == ctype && text == ctext)
                        dupl++;
                }

                if (String(text).length == 0)
                    break;

                if (tab.started == false)
                    this.SendMessage(tab, "start", "start", 0);

                this.SendMessage(tab, type, text, dupl);
            }

            tab.mhooked = i; //ms.length;
            if (i > 0)
                tab.history = true;

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }
    this.IsIncomingMessage = function(element) {

    }
    this.FindTagByClassName = function(sourceElement, tagName, className) {
        var col = sourceElement.getElementsByTagName(tagName);
        var l = col.length;

        for (i = 0; i < l; i++) {
            if (col[i].className == className)
                return col[i];
        }

        return null;
    }
    this.FindTagByClassNameContains = function(sourceElement, tagName, className) {
        var col = sourceElement.getElementsByTagName(tagName);
        var l = col.length;

        for (i = 0; i < l; i++) {
            if (col[i].className.indexOf(className) > -1)
                return col[i];
        }

        return null;
    }
    this.FindDivByClassName = function(tab, className) {
        return this.FindTagByClassName(tab, "div", className);
    }
    this.FindDivByClassNameContains = function(tab, className) {
        return this.FindTagByClassNameContains(tab, "div", className);
    }
    //send message to FilterWnd
    this.SendMessage = function(tab, type, text, dupl) {
        try {
            var message = "";
            var delim = "\1";
            if (type == "start") {
                tab.started = true;
                message += "0" + delim;
            }
            else if (type == "end")
                message += "1" + delim;
            else if (type == "input")
                message += "2" + delim;
            else if (type == "output")
                message += "3" + delim;

            message += tab.session_guid + delim;
            message += tab.partner_name + delim;
            message += text + delim;
            message += String(dupl) + delim;

            Rondyo_Wrapper.SendFHookMessage(null, message);
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    this.Quit = function(win) {
        try {
            if (!win.aChatTabs)
                return;

            for (var i = 0; i < win.aChatTabs.length; i++)
                if (win.aChatTabs[i].started == true)
                this.SendMessage(win.aChatTabs[i], "end", "finish", 0);

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    this.TextCnt = function(elem) {
        //Fixes[1.0.2.*]- line breaks
        //Fixes[1.0.2.*]- smiles on facebook support
        var text = "";
        if (!elem)
            return "";
        var tc = elem;

        if (tc.childNodes.length == 0) {
            text = tc.textContent;
            return text;
        }

        for (var j = 0; j < tc.childNodes.length; j++) {
            if (tc.childNodes[j].tagName) {
                if (tc.childNodes[j].tagName.toLowerCase() == "img")
                    text += tc.childNodes[j].getAttribute("alt");
                if (tc.childNodes[j].tagName.toLowerCase() == "br")
                    text += " "; //"\n";
                if (tc.childNodes[j].tagName.toLowerCase() == "a")
                    text += tc.childNodes[j].textContent;
            }
            else
                text += tc.childNodes[j].textContent;
        }
        return text;
    }
}
