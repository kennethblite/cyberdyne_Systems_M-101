<!-- Requirements  -->
<link href="css/ActionCloud.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ActionCloud.js" type="text/javascript"></script>
<script src="js/Infrastructure/seqFade.js" type="text/javascript"></script>
<!-- Template -->
<script id="actionCloud" type="text/x-jquery-tmpl">
  <div id="cloud">
    <span id="editLink" command="EditActionClicked" style="top: 27px; left: 110px;">Edit</span>
    <span id="shareLink" command="ShareActionClicked" style="top: 27px; left: 20px;">Share</span>
    <span command="PlayActionClicked" style="top: 27px; right: 20px;">Play</span>
    <span command="CloneActionClicked" style="bottom: 15px; left: 80px;">Clone </span>
    <span command="DeleteActionClicked" style="bottom: 15px; right: 75px;">Delete</span>    
  </div>
  
  <div id="moodImage">    
    <div class="moodName">
      <div class="moodNameText">
        <span id="moodText" class="nameWrapper"></span>
      </div>
    </div>
  </div>   
</script>