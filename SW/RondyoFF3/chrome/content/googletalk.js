//googletalk chat hooks implementation

CHooksGoogleTalk = function() {

    if (!this.aChatTabs)
        this.aChatTabs = new Array();

    //mark all tabs as "not found"
    this.UnmarkChatTabs = function(doc) {
        try {
            for (var i = 0; i < this.aChatTabs.length; i++)
                this.aChatTabs[i].marked = false;
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }
    //check for chat tab previous present	
    this.FindChatBar = function(doc, pname) {
        try {
            for (var i = 0; i < this.aChatTabs.length; i++)
                if (this.aChatTabs[i].name == pname)
                return i;
            return -1;
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
        return -1;
    }

    this.GetElemClassInside = function(pElem, tagname, classname, numorder) {
        try {
            var ch = pElem.childNodes;

            var aClasses = new Array();
            var scl = classname;
            while (scl.length > 0 && scl.indexOf(" ") != -1) {
                var pos = scl.indexOf(" ");
                var s = scl.substring(0, pos);
                aClasses.push(s);
                scl = scl.substring(pos + 1, scl.length);
            }

            if (scl.length > 0)
                aClasses.push(scl);

            for (var i = 0; i < ch.length; i++) {
                var bSuccess = false;
                if (ch[i].tagName && ch[i].tagName.toLowerCase() == tagname && classname == "" && ch[i].className == "")
                    bSuccess = true;

                if (classname != "" && ch[i].tagName && ch[i].tagName.toLowerCase() == tagname) {
                    bSuccess = true;
                    var sic = " " + ch[i].className + " ";
                    for (var t = 0; t < aClasses.length; t++) {
                        if (sic.indexOf(" " + aClasses[t] + " ") == -1) {
                            bSuccess = false;
                            break;
                        }
                    }

                    if (classname.length != ch[i].className.length)
                        bSuccess = false;
                }

                if (bSuccess) {
                    if (numorder == 0)
                        return ch[i];
                    else
                        numorder--;
                }
            }
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }

        return null;
    }
    this.GetElemClassAll = function(pElem, tagname, classname, numorder) {
        try {
            var ch = pElem.getElementsByTagName(tagname);

            classname = classname.toLowerCase();

            for (var i = 0; i < ch.length; i++) {
                if (ch[i].className.toLowerCase() == classname) {
                    return ch[i];
                }
            }
        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }

        return null;
    }
    //parse chat tabs
    this.CheckForSessions = function(doc) {
        try {
            var mainElement = doc.getElementById("mainElement");
            var chatbar;
            var body = doc.body;
            var notFound = false;

            if (mainElement) {
                chatbar = this.GetElemClassInside(mainElement, "div", "dw", 0);

                if (!chatbar)
                    notFound = true;
            }
            else
                notFound = true;

            if (notFound) {
                chatbar = this.GetElemClassInside(body, "div", "dw", 0);
            }

            if (!chatbar)
                return;

            chatbar = this.GetElemClassAll(chatbar, "div", "no", 0);
            if (!chatbar)
                return;

            this.UnmarkChatTabs(doc);

            var tabs = chatbar.childNodes;
            for (var i = 0; i < tabs.length - 1; i++) {
                var tab = tabs[i];

                var nameContainer = this.GetElemClassAll(tab, "div", "Hp", 0);
                if (nameContainer == null)
                    continue;
                
                var pname = nameContainer.innerHTML;

                var ti = this.FindChatBar(doc, pname);
                if (ti >= 0) {
                    this.aChatTabs[ti].marked = true;
                    this.aChatTabs[ti].opened = true;
                    this.aChatTabs[ti].tabdiv = tabs[i];
                }
                else {
                    var newtab = new Object();
                    newtab.name = pname;

                    newtab.marked = true;
                    newtab.started = false;
                    newtab.history = false;
                    newtab.mhooked = 0;
                    newtab.opened = true;

                    newtab.session_guid = "googletalk:" + newtab.name;

                    newtab.tabdiv = tabs[i];

                    this.aChatTabs.push(newtab);
                }
            }

            var i = 0;
            while (i < this.aChatTabs.length) {
                if (this.aChatTabs[i].marked == false && this.aChatTabs[i].opened == true) {
                    if (this.aChatTabs[i].started == true)
                        this.SendMessage(this.aChatTabs[i], "end", "finish", 0);
                    this.aChatTabs[i].opened = false;
                }
                else {
                    if (this.aChatTabs[i].opened == true)
                        this.CheckForMessages(doc, this.aChatTabs[i], false);
                    i++;
                }
            }

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    this.CheckForSessionsSingle = function(doc) {
        try {
            if (!this.aChatTabs)
                this.aChatTabs = new Array();

            var body = doc.body;
            var chatbar = this.GetElemClassInside(body, "div", "", 2);
            if (!chatbar)
                return;


            this.UnmarkChatTabs(doc);

            var j = 0;
            var tab = chatbar;
            for (j = 0; j < 15; j++) {
                var btab = tab;
                tab = this.GetElemClassInside(tab, this.DOMNamePathSingle[j][0], this.DOMNamePathSingle[j][1], 0);
                if (!tab) {
                    if (this.DOMNamePathSingle[j][2] != "") {
                        tab = this.GetElemClassInside(btab, this.DOMNamePathSingle[j][0], this.DOMNamePathSingle[j][2], 0);
                        if (tab)
                            continue;
                    }
                    break;
                }
            }
            if (j < 15) {
                var tab = chatbar;
                for (j = 0; j < 15; j++) {
                    tab = this.GetElemClassInside(tab, this.DOMNamePathLPSingle[j][0], this.DOMNamePathLPSingle[j][1], 0);
                    if (!tab)
                        break;
                }
            }
            if (j < 15)
                return;

            var pname = tab.textContent;

            var ti = this.FindChatBar(doc, pname);
            if (ti >= 0) {
                this.aChatTabs[ti].marked = true;
                this.aChatTabs[ti].opened = true;
                this.aChatTabs[ti].tabdiv = chatbar;
            }
            else {
                var newtab = new Object();
                newtab.partner_name = pname;

                var div = doc.getElementById("loading");
                div = this.GetElemClassInside(div, "div", "cmsg", 0);
                div = this.GetElemClassInside(div, "div", "msg", 0);
                var sn = div.textContent;
                newtab.name = sn.substring(0, sn.indexOf("@"));
                var fr = newtab.name.length;
                while (fr > 0) {
                    if (newtab.name[fr] != ' ')
                        fr--;
                    else
                        break;
                }

                newtab.name = newtab.name.substring(fr + 1, newtab.name.length);

                newtab.marked = true;
                newtab.started = false;
                newtab.history = false;
                newtab.mhooked = 0;
                newtab.opened = true;

                newtab.session_guid = "googletalk:" + newtab.name + "-" + newtab.partner_name;

                newtab.tabdiv = chatbar;

                this.aChatTabs.push(newtab);
            }

            if (!this.rolled && !this.refreshing) {
                var bR = true;
                for (var i = 0; i < this.aChatTabs.length; i++) {
                    if (this.aChatTabs[i].marked == false)
                        bR = false;
                }

                if (bR) {
                    this.rolled = true;
                }
            }

            if (!this.rolled)
                return;

            var i = 0;
            while (i < this.aChatTabs.length) {
                if (this.aChatTabs[i].marked == false && this.aChatTabs[i].opened == true) {
                    if (this.aChatTabs[i].started == true)
                        this.SendMessage(this.aChatTabs[i], "end", "finish", 0);
                    this.aChatTabs[i].opened = false;
                }
                else {
                    if (this.aChatTabs[i].opened == true)
                        this.CheckForMessages(doc, this.aChatTabs[i], true);
                    i++;
                }
            }

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    //parse messages in appropriate tab				
    this.CheckForMessages = function(doc, tab, single) {
        try {
            var mdiv = this.GetElemClassAll(tab.tabdiv, "div", "kf", 0);

            var cn = mdiv.childNodes;
            var ms = new Array();
            for (var i = 0; i < cn.length; i++) {
                if (cn[i].tagName.toLowerCase() == "div" && cn[i].className == "km") {
                    for (var j = 0; j < cn[i].childNodes.length; j++) {
                        ms.push(cn[i].childNodes[j]);
                    }
                }
            }

            //Fixes[1.0.2.*]- Lost of first incoming mesage in GTalk on firefox after popuot chat mode
            var lastinput = false;
            if (ms.length && ms[ms.length - 1].parentNode.getAttribute("chat-dir") == "t") {
                lastinput = true;
            }

            if (tab.history == false) {
                if (single)
                    tab.mhooked = ms.length;
                if (lastinput && ms.length)
                    tab.mhooked = ms.length - Rondyo_Wrapper.googletalkFML;
            }

            if (ms.length - tab.mhooked > 1) {
                tab.mhooked = ms.length;
                if (lastinput && ms.length)
                    tab.mhooked -= Rondyo_Wrapper.googletalkFML;
            }

            if (ms.length == 0)
                tab.mhooked = 0;

            //Rondyo_Wrapper.debug("CheckForMessages: " + String(tab.mhooked) + " - " + String(ms.length));

            for (var i = tab.mhooked; i < ms.length; i++) {
                var type = "none";

                if (ms[i].parentNode.getAttribute("chat-dir") == "t")
                    type = "input";
                else if (ms[i].parentNode.getAttribute("chat-dir") == "f")
                    type = "output";
                else
                    break;

                var text = "";
                if (ms[i].className == "kk") {
                    var tc = this.GetElemClassInside(ms[i], "span", "", 0);
                    text = this.TextCnt(tc);
                }
                else if (ms[i].className == "kl") {
                    text = this.TextCnt(ms[i]);
                }

                var ci = i;
                var dupl = 0;
                var ctype = type;
                while (ci > 0 && type == ctype) {
                    ci--;

                    if (ms[ci].parentNode.getAttribute("chat-dir") == "t")
                        ctype = "input";
                    else if (ms[ci].parentNode.getAttribute("chat-dir") == "f")
                        ctype = "output";
                    else
                        break;

                    var ctext = "";
                    if (ms[ci].className == "kk") {
                        var ctc = this.GetElemClassInside(ms[ci], "span", "", 0);
                        ctext = this.TextCnt(ctc);
                    }
                    else if (ms[ci].className == "kl") {
                        ctext = this.TextCnt(ms[ci]);
                    }

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
    //send message to FilterWnd
    this.SendMessage = function(tab, type, text, dupl) {
        try {
            var delim = "\1";
            var message = "";

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

    this.Quit = function(doc) {
        try {
            if (!this.aChatTabs)
                return;

            for (var i = 0; i < this.aChatTabs.length; i++)
                if (this.aChatTabs[i].started == true)
                this.SendMessage(this.aChatTabs[i], "end", "finish", 0);

        } catch (err) {
            Rondyo_Wrapper.OnError(err);
        }
    }

    this.TextCnt = function(elem) {
        //Fixes[1.0.2.*]- line breaks
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
