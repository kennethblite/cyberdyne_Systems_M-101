<!-- Requirements  -->
<link href="css/myChatmanStatus.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/MyChatmanStatus.js" type="text/javascript"></script>

<!-- Template -->
<script id="myChatmanStatusTemplate" type="text/x-jquery-tmpl">
  <div class="myChatmanStatusContainer">    
    <div class="underText">
        <a class="myChatmanLink"><img src="images/MyChatmanCom.png" /></a>
      {{if ShowConnect}}
        <div class="connectButton pushButtonRed">CONNECT</div>
        <div class="shareButton pushButtonBlue">SHARE</div>
      {{/if}}

      {{if ShowRegister}}
        <div class="registerButton pushButtonRed">CONNECT</div>
        <div class="shareButton pushButtonBlue">SHARE</div>
      {{/if}}
      
      {{if ShowText}}
        <div class="moneyPanel">          
          <span class="text">${Text}</span>
        </div>
      {{/if}}      
     </div>
    
    <div class="promoTextControl"></div>
  </div>
</script>