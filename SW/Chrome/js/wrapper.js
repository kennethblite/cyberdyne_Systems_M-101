var Rondyo_Wrapper = {
	
updateInterval: 500,
	
OnError: function(err) {
},
	
SendFHookMessage: function(doc, message) {
	document.getElementById("rondyoHookMessageElement").SendHookMessage(null, message, false);
},
	
Init: function() {
	window.addEventListener("unload", Rondyo_Wrapper.OnQuit, true);
	Rondyo_Wrapper.CheckForUpdates();
},
	
CheckForUpdates: function() {
	Rondyo_Wrapper.Hooks.CheckForSessions(document, window);
	setTimeout(Rondyo_Wrapper.CheckForUpdates, Rondyo_Wrapper.updateInterval);
}
	
}

var inserted = false;

function insertElement() {
	if (document.body)
		if (!inserted) {
			inserted = true;
			var element = document.createElement("object");
			element.type = "application/x-hook-msg";
			element.id = "rondyoHookMessageElement";
			element.width = 0;
			element.height = 0;
			document.body.appendChild(element);
		}
}

var host = window.location.hostname;

if (host == "mail.google.com") {
	document.addEventListener("DOMNodeInserted", insertElement);
	document.addEventListener("DOMContentLoaded", insertElement);
	Rondyo_Wrapper.googletalkFML = 1;
	Rondyo_Wrapper.Hooks = new CHooksGoogleTalk();
	Rondyo_Wrapper.OnQuit = function(event) {
		Rondyo_Wrapper.Hooks.Quit(document);
	};
	Rondyo_Wrapper.Init();
}
else if (host == "www.facebook.com" || host == "facebook.com") {
	document.addEventListener("DOMNodeInserted", insertElement);
	document.addEventListener("DOMContentLoaded", insertElement);
	Rondyo_Wrapper.facebookFML = 1;
	Rondyo_Wrapper.Hooks = new CHooksFacebook();
	Rondyo_Wrapper.OnQuit = function(event) {
		Rondyo_Wrapper.Hooks.Quit(window);
	};
	Rondyo_Wrapper.Init();
}
else if (host.indexOf("mychatman.co") > -1) {
	document.addEventListener("DOMNodeInserted", insertElement);
	document.addEventListener("DOMContentLoaded", insertElement);
}
