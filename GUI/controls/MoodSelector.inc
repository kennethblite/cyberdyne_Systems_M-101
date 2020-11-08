<!-- Requirements  -->
<link href="css/MoodSelector.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/MoodSelector.js" type="text/javascript"></script>
<script src="js/Infrastructure/jquery-textfill-0.1.js" type="text/javascript"></script>

<!-- Template -->
<script id="moodSelectorTemplate" type="text/x-jquery-tmpl">
  <div class="moodSelectorContainer">
    <div class="moodSelectorName jtextfill">
      <span>${MoodName}</span>
    </div>
    <div class="moodLevelName"></div>

    <div class="moodLevelImage moodLevel4" moodState="4" bgColor="#f0ccce" color="#c12c31"></div>
    <div class="moodLevelImage moodLevel3" moodState="3" bgColor="#ffe1c3" color="#ff7f00" ></div>    
    <div class="moodLevelImage moodLevel2" moodState="2" bgColor="#fff4c3" color="#d8cb29"></div>
    <div class="moodLevelImage moodLevel1" moodState="1" bgColor="#dbebf6" color="#88bce1"></div>      

  </div>
</script>