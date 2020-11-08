<!-- Requirements  -->
<link href="css/ChatmanBrainpower.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ChatmanBrainpower.js" type="text/javascript"></script>
<!-- #include virtual="ChatmanBrainpowerImage.inc" -->
<!-- #include virtual="HorizontalBar.inc" -->
<!-- #include virtual="SimpleText.inc" -->

<!-- Template -->
<script id="chatmanBrainpowerTemplate" type="text/x-jquery-tmpl">
  <div class="chatmanBrainpowerContainer">
    <div class="chatmanBrainpowerTop">
      <div class="chatmanBrainpowerImageControl"></div>
      <div class="scoreControl">
        <div class="levelText">
          <b>LEVEL: </b><span class="levelStatus"> {{if OldLevel}} ${OldLevel} {{else}} ${Level} {{/if}}</span>
        </div>
        <div class="scoreText">
          <b>SCORE:</b>
          <div class="scoreTextControl"></div>          
        </div>
        <div class="scoreTextInstructions">Teach me new chitchats or words and questions to make me smarter!</div>
      </div>
    </div>


    <ul class="chatmanBrainpowerBottom">
      <li>
        <div class="newChitChatsHorizontalBarControl"></div>
        <img class="newChitChatImage" src="images/New-chit-chat-callout.png" />
        <div class="newChitChatButton pushButtonBlue">NEW CHITCHAT</div>
        <div class="shareButton pushButtonBlue">SHARE</div>
      </li>
      <li class="newChitChatsText"></li>
      <li>
        <div class="newWordsHorizontalBarControl"></div>
        <img class="newQuestionImage" src="images/New-question-callout.png" />
        <div class="newWordButton pushButtonBlue">NEW WORDS</div>
        <img class="newWordsImage" src="images/New-word-callout.png" />
        <div class="newQuestionsButton pushButtonBlue">NEW QUESTION</div>
      </li>
      <li class="newWordsText"></li>
    </ul>
  </div>
</script>