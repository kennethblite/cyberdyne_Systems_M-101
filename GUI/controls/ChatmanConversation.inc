<!-- Requirements  -->
<link href="css/ChatmanConversation.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ChatmanConversation.js" type="text/javascript"></script>

<link rel="stylesheet" type="text/css" href="css/Infrastructure/superfish.css" media="screen">
<script type="text/javascript" src="js/Infrastructure/hoverIntent.js"></script>
<script type="text/javascript" src="js/Infrastructure/superfish.js"></script>
<script type="text/javascript" src="js/Infrastructure/supersubs.js"></script>
  
<!-- #include virtual="CallOut.inc" -->
<!-- #include virtual="ActionButton.inc" -->

<!-- Template -->
<script id="chatmanConversationTemplate" type="text/x-jquery-tmpl">
  
  <div class="chatmanConversationContainer">     
      <div class="calloutsContainer"></div>
      <div class="textBoxLabel">
        Hey Chatman, I want to say:
      </div>

      <form class="textForm">
        <textarea class="textBox"></textarea>
        <div class="pushButtonRed">SAY</div>

        
        <div class="autoQuestions">
          <span class="leftScrollerQuestions"></span>
          <div class="menuContainer">
            <ul class="sf-menu"></ul>
          </div>
          <span class="rightScrollerQuestions"></span>
        </div>
        <div class="whiteOverlaper1"></div>
        <div class="whiteOverlaper2"></div>
        
      </form>
  </div>
</script>