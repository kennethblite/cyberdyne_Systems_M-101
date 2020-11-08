<!-- Requirements  -->
<link href="css/ChatmanBrainpowerImage.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ChatmanBrainpowerImage.js" type="text/javascript"></script>
<!-- Template -->
<script id="chatmanBrainpowerImageTemplate" type="text/x-jquery-tmpl">
  <div class="brainpowerImageContainer">
    <div class="roundBackground"></div>
    <div class="brainpowerIconContainer">
      <img src="${ImagePath}" alt="" class="brainpowerViewIcon" />
    </div>
    <div class="smartImageQuestion"></div>
    <div class="brainpowerViewName">{{if Name}}${Name}{{/if}}</div>
  </div>
</script>