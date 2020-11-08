<!-- Requirements  -->
<link href="css/MiniPersonalityButton.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/MiniPersonalityButton.js" type="text/javascript"></script>
<script src="js/Controls/ImageManager.js" type="text/javascript"></script>
<!-- Template -->
<script id="miniPersonalityButtonTemplate" type="text/x-jquery-tmpl">
    <div class="miniPersonalityButton">
      <div class="personalityName">${Name}</div>      
      <div class="roundBackground"></div>
      <div class="miniPersonalityIconContainer">
        <div class="backImages"></div>
        <img src="images/Personalities/${BaseIconID}.png" alt="" class="miniPersonalityIcon" />
        <div class="frontImages"></div>
      </div>      
    </div>
</script>