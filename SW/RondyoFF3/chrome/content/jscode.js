var Rondyo_Wrapper =
{
	last_url: null,
	check_timeout_id: null,
	aUnloadUrls: new Array(),
	refreshing: false,
	rolled: true,
	FacebookHooks: null,
	GoogleTalkHooks: null,
	//Fixes[1.0.2.*]- time parse interval
	updateinterval:1000,
	//Fixes[1.0.2.*]- Lost of first incoming message in FF in facebook
	facebookFML: 1,//facebookFML: 0, to remove lost of first incoming message in facebook fixes
	//Fixes[1.0.2.*]- Lost of first incoming mesage in GTalk on firefox after popuot chat mode
	googletalkFML: 1,//googletalkFML: 0, to remove lost of first incoming message in GTalk fixes
	
	RondyoSessionId:"CMID",
	
	debug: function(s) 
	{
		return;
		var t = document.getElementById("debug-str");
		if(!t)
			return;
		if(t.value.length > 10000)
			return;
			
		t.value = s + "\n" + t.value;
    },

	//init events listeners
    Init: function() {
        window.addEventListener("load", this.InitEvents, false);
		window.addEventListener("close", this.OnQuit, true);
		window.addEventListener("unload", this.Unload, true);
		
		this.FacebookHooks = new CHooksFacebook();
		this.GoogleTalkHooks = new CHooksGoogleTalk();
    },
	//init events listeners
    InitEvents: function() {
		var appcontent = document.getElementById("appcontent");
		if (appcontent)
			appcontent.addEventListener("DOMContentLoaded", Rondyo_Wrapper.OnPageLoaded, true);
			
		getBrowser().mTabContainer.addEventListener("DOMNodeRemoved", Rondyo_Wrapper.CloseTabEvent, true);
    },
	
	OnError: function(err)
	{
		return;
		if(!this.err)
			alert(err);
		this.err = true;
	},
	
	IsFacebookUrl: function(url)
	{
		if(url.indexOf("http://www.facebook.com") != 0 && url.indexOf("https://facebook.com") != 0)
			return false;
		return true;
	},
	
	IsGoogleTalkUrl: function(url)
	{
		if(url.indexOf("http://mail.google.com/mail") != 0 && url.indexOf("https://mail.google.com/mail") != 0)
			return false;
		return true;
	},
	
	CloseTabEvent: function(aEvent)
	{
		if(Rondyo_Wrapper.IsFacebookUrl(aEvent.target.linkedBrowser.contentDocument.documentURI) || Rondyo_Wrapper.IsGoogleTalkUrl(aEvent.target.linkedBrowser.contentDocument.documentURI))
			Rondyo_Wrapper.OnQuit(aEvent.target.linkedBrowser.contentWindow.wrappedJSObject, true);
	},
	//browser unload event
	Unload: function(aEvent)
	{
		var bFound = false;
        for (var i = 0; i < getBrowser().browsers.length; i++) 
		{
			if(getBrowser().getBrowserAtIndex(i).contentDocument.documentURI == aEvent.originalTarget.documentURI)
			{
				bFound = true;
				break;
			}
        }

		if(!bFound)
			return;
			
		if(!Rondyo_Wrapper.IsFacebookUrl(aEvent.originalTarget.documentURI) && !Rondyo_Wrapper.IsGoogleTalkUrl(aEvent.originalTarget.documentURI))
			return;
			
		Rondyo_Wrapper.aUnloadUrls.push(aEvent.originalTarget.documentURI);
		Rondyo_Wrapper.refreshing = true;
		Rondyo_Wrapper.rolled = false;
	},
	//browser quit event
	OnQuit: function(doc, win, tab)
	{
		if(tab)
		{
			if(this.IsFacebookUrl(doc.documentURI))
				this.FacebookHooks.Quit(win);
				
			if(this.IsGoogleTalkUrl(doc.documentURI))
				this.GoogleTalkHooks.Quit(win);
		}
		else
		{
			for (var i = 0; i < getBrowser().browsers.length; i++) 
				Rondyo_Wrapper.OnQuit(getBrowser().getBrowserAtIndex(i).contentDocument, getBrowser().getBrowserAtIndex(i).contentWindow.wrappedJSObject, true);
		}
	},
	//chekc is page refreshed or not
	UpdateRefreshState: function(aEvent)
	{
		if(Rondyo_Wrapper.aUnloadUrls.length == 0)
			return;
			
		var i = 0;
		while(i < Rondyo_Wrapper.aUnloadUrls.length) 
		{
			var bP = false;
			for (var j = 0; j < getBrowser().browsers.length; j++) 
			{
				if(getBrowser().getBrowserAtIndex(j).contentDocument.documentURI == Rondyo_Wrapper.aUnloadUrls[i])
				{
					bP = true;
					break;
				}
			}
			if(!bP)
				Rondyo_Wrapper.aUnloadUrls.splice(i, 1);
			else
				i++;
        }
		
		var bFound = false;
		for (var i = 0; i < Rondyo_Wrapper.aUnloadUrls.length; i++)
		{
			if(aEvent.originalTarget.documentURI == Rondyo_Wrapper.aUnloadUrls[i])
			{
				Rondyo_Wrapper.aUnloadUrls.splice(i, 1);
				bFound = true;
				break;
			}
		}
		
		if(!bFound && Rondyo_Wrapper.aUnloadUrls.length)
			return;

		if(Rondyo_Wrapper.aUnloadUrls.length == 0)
			Rondyo_Wrapper.refreshing = false;
	},
	//document complete browser event
	OnPageLoaded: function(aEvent) {
		//Fixes[1.0.2.*]- custom messages support
		aEvent.originalTarget.wrappedJSObject.Rondyo_Wrapper = window.Rondyo_Wrapper;
			
		var bFound = false;
		for (var j = 0; j < getBrowser().browsers.length; j++) 
		{
			if(getBrowser().getBrowserAtIndex(j).contentDocument == aEvent.originalTarget)
			{
				bFound = true;
				break;
			}
		}
		
		if(bFound)
		{
			Rondyo_Wrapper.OnDocCompl(aEvent.originalTarget);
			Rondyo_Wrapper.UpdateRefreshState(aEvent);
		}
			
		
    },
	
	//implementation od doc compl event
    OnDocCompl: function(doc) {
        var url = doc.documentURI;

		if(Rondyo_Wrapper.IsFacebookUrl(url) || Rondyo_Wrapper.IsGoogleTalkUrl(url))
		{
			if(Rondyo_Wrapper.check_timeout_id == null || Rondyo_Wrapper.check_timeout_id == undefined)
			{
				Rondyo_Wrapper.check_timeout_id = window.setTimeout(Rondyo_Wrapper.CheckForUpdates, Rondyo_Wrapper.updateinterval);
			}
		}
		else if(Rondyo_Wrapper.monitoring)//if(Rondyo_Wrapper.check_timeout_id != null && Rondyo_Wrapper.check_timeout_id != undefined)
		{
			window.clearTimeout(Rondyo_Wrapper.check_timeout_id);
			delete Rondyo_Wrapper.check_timeout_id;
			Rondyo_Wrapper.check_timeout_id = null;
		}
    },
	//raise in timer and check all opened browser tabs
	CheckForUpdates: function()
	{
		if(Rondyo_Wrapper.refreshing == false)
		{
			for (var i = 0; i < getBrowser().browsers.length; i++) 
			{
			    var browser = getBrowser().getBrowserAtIndex(i);
			    
			    var contentDocument = browser.contentDocument;
			    var contentWindow = browser.contentWindow.wrappedJSObject;
				if(Rondyo_Wrapper.IsFacebookUrl(contentDocument.documentURI))
				{
					Rondyo_Wrapper.FacebookHooks.CheckForSessions(contentDocument, contentWindow);
				}
				
				if(Rondyo_Wrapper.IsGoogleTalkUrl(contentDocument.documentURI))
				{
					Rondyo_Wrapper.GoogleTalkHooks.CheckForSessions(contentDocument, contentWindow);
				}
			}
		}
		window.clearTimeout(Rondyo_Wrapper.check_timeout_id);
		delete Rondyo_Wrapper.check_timeout_id;
		Rondyo_Wrapper.check_timeout_id = window.setTimeout(Rondyo_Wrapper.CheckForUpdates, Rondyo_Wrapper.updateinterval);
	},
	
	convertFromUnicode: function(aSrc)
	{
	   try{
			 var unicodeConverter = Components.classes["@mozilla.org/intl/scriptableunicodeconverter"]
							   .createInstance(Components.interfaces.nsIScriptableUnicodeConverter);
			 unicodeConverter.charset = "UTF-8";
			   return unicodeConverter.ConvertFromUnicode( aSrc );
	   }catch(err){
			Rondyo_Wrapper.OnError(err);
	   }
	   return aSrc;
	},
	
	SendMessageToCore: function(doc, messageId, data)
	{
		//var message = "SMTC!sessionId:" + Rondyo_Wrapper.RondyoSessionId + " messageId:" + messageId + " data:" + data;
		
		var message = "";
		var delim = "\1";
		
		message += Rondyo_Wrapper.RondyoSessionId + "!" + delim;
		message += messageId + delim;
		message += delim;
		message += data + delim;
		
		return Rondyo_Wrapper.SendFHookMessage(doc, message);
	},
	
	//Fixes[1.0.2.*]- custom messages support
	SendFHookMessage: function(doc, mes)
	{
		message = Rondyo_Wrapper.convertFromUnicode(mes);
			
		netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
		const cid = "@Rondyo/Chatman/RondyoFF3;1";
		var obj = Components.classes[cid].createInstance();
		obj = obj.QueryInterface(Components.interfaces.IRondyoFF3);
		var retObj = {};
		obj.SendHookMessage(doc, message, retObj);
		return retObj.value;
	}
	
}

Rondyo_Wrapper.Init();


