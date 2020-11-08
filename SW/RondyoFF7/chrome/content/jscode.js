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
    updateinterval: 1000,
    //Fixes[1.0.2.*]- Lost of first incoming message in FF in facebook
    facebookFML: 1, //facebookFML: 0, to remove lost of first incoming message in facebook fixes
    //Fixes[1.0.2.*]- Lost of first incoming mesage in GTalk on firefox after popuot chat mode
    googletalkFML: 1, //googletalkFML: 0, to remove lost of first incoming message in GTalk fixes

    RondyoSessionId: "CMID",

    //init events listeners
    Init: function() {
        this.FacebookHooks = new CHooksFacebook();
        this.GoogleTalkHooks = new CHooksGoogleTalk();

        window.addEventListener("load", Rondyo_Wrapper.InitEvents, false);
        //window.addEventListener("close", this.OnQuit, true);
        //window.addEventListener("unload", this.Unload, true);

        setTimeout("Rondyo_Wrapper.CheckForUpdates()", 1000);
    },

    InitEvents: function() {
		var appcontent = document.getElementById("appcontent");
		if (appcontent)
			appcontent.addEventListener("DOMContentLoaded", Rondyo_Wrapper.OnPageLoaded, true);
			
		//getBrowser().mTabContainer.addEventListener("DOMNodeRemoved", Rondyo_Wrapper.CloseTabEvent, true);
    },

//    CheckForUpdates: function() {
//        var browser = getBrowser().getBrowserAtIndex(0);
//        browser.contentDocument.title += "1";
//        //alert('loaded');
//        setTimeout("Rondyo_Wrapper.CheckForUpdates()", 2000);
//    },

	//raise in timer and check all opened browser tabs
	CheckForUpdates: function()
	{
		if(Rondyo_Wrapper.refreshing == false)
		{
			for (var i = 0; i < getBrowser().browsers.length; i++) 
			{
			    var browser = getBrowser().getBrowserAtIndex(i);
			    
                if(!browser.contentDocument || !browser.contentWindow || !browser.contentWindow.wrappedJSObject){
                    continue;
                }
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
		
        //var browser = getBrowser().getBrowserAtIndex(0);
        //browser.contentDocument.title += "1";

        //setTimeout("Rondyo_Wrapper.CheckForUpdates()", 2000);
        
        if(Rondyo_Wrapper.check_timeout_id != null)
		    clearTimeout(Rondyo_Wrapper.check_timeout_id);
		    
		Rondyo_Wrapper.check_timeout_id = window.setTimeout(Rondyo_Wrapper.CheckForUpdates, Rondyo_Wrapper.updateinterval);
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

	//document complete browser event
	OnPageLoaded: function(aEvent) {
	    //console.log("page loaded");
		//Fixes[1.0.2.*]- custom messages support
        if(aEvent.originalTarget.wrappedJSObject){
            aEvent.originalTarget.wrappedJSObject.Rondyo_Wrapper = window.Rondyo_Wrapper;
        }
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

/*	
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
	},
*/	
    SendFHookMessage: function(doc, mes)
     {
      message = Rondyo_Wrapper.convertFromUnicode(mes); 
      netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      const cid = "@Rondyo/Chatman/RondyoFF3;1";
      var obj = Components.classes[cid].createInstance();
      obj = obj.QueryInterface(Components.interfaces.IRondyoFF3);
      var retObj = {};
      var url = {};
      if (doc == null)
          url="";
      else url=doc.URL
      obj.SendHookMessage(url, message, retObj);
            
      return retObj.value;
     },	
	
	OnError: function(err)
	{
		return;
		if(!this.err)
			alert(err);
		this.err = true;
	},
}

Rondyo_Wrapper.Init();