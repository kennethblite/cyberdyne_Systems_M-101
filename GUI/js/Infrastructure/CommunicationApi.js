window.addEventListener("message", receiveMessage, false);  

var CheckSearchStringHelper = 
{
    previousRequestSource: null,
    previousRequestOrigin: null,
    SetResponce: function(responseValue) 
    {
       this.previousRequestSource.postMessage("[RSP]::" + responseValue, this.previousRequestOrigin);
    }
}

function receiveMessage(event)  
{  
   var s = event.data;
   if (typeof (s) == "undefined")
   {
      return;  
   }
   
   if (s.indexOf('[SCE]::["') == 0) 
   {
       window.top.ChatmanController.executeControlCommand('GlobalCommand', 'SubmitChatmanEvent', s.replace('[SCE]::["', '["'));
       return;
   }
  
   if (s.indexOf('[CSS]::') == 0) 
   {
       CheckSearchStringHelper.previousRequestSource = event.source;
       CheckSearchStringHelper.previousRequestOrigin = event.origin;
       window.top.ChatmanController.executeControlCommand('GlobalCommand', 'CheckSearchString', s.replace('[CSS]::', ''));
       return;
   }
} 



	  
