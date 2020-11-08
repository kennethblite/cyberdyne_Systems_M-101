<!-- Requirements  -->
<link href="css/PersonalityButton.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/PersonalityButton.js" type="text/javascript"></script>
<script src="js/Infrastructure/seqFade.js" type="text/javascript"></script>
<script src="js/Controls/ImageManager.js" type="text/javascript"></script>
<!-- #include virtual="InfoMenu.inc" -->

<!-- Template -->
<script id="personalityButtonTemplate" type="text/x-jquery-tmpl">
  
  <div class="personalityButtonContainer">
    <div class="personalityButton">
      <div class="personalityName">${Name}</div>
      <div class="roundBackground"></div>
      <div class="iconContainer">
        <div class="backImages"></div>
        <img src="images/Personalities/${BaseIconID}.png" class="personalityIcon" />
        <div class="frontImages"></div>
      </div>
      
      <!-- infoMenu like in ActionButton -->
      <div class="personalityInfoButton">
        <ul class="btnActionInfoMenu">
          <li><div id="TextBlock_1">Description</div></li>
          <li>${Description}</li>
          <li><hr class="line" /></li>
          <li><div id="TextBlock_3">Designer</div></li>
          <li>${Designer}</li>
          <li><hr class="line" /></li>
          <li><span class="linkButton">More info</span></li>
        </ul>
      </div>
    </div>
    
    <!-- Cloud -->
    <div class="cloud">
      <span command="ChatClicked" style="top: 27px; left: 15px;">Chat</span>
      <span command="PersonalityEditClicked" style="bottom: 20px; left: 77px; color: #0065b1;">Edit</span>
      <span command="PersonalityDeleteClicked" style="bottom: 20px; right: 70px;">Delete</span>
      <span command="PersonalityCloneClicked"style="top: 27px; right: 15px; color: #dedede;">Clone</span>
    </div>
  </div>
  
</script>
