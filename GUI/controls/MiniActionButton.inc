<!-- Requirements  -->
<link href="css/MiniActionButton.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/MiniActionButton.js" type="text/javascript"></script>
<!-- Template -->
<script id="miniActionButtonTemplate" type="text/x-jquery-tmpl">
  <div class="miniActionButtonContainer {{if IsLong}}miniActionButtonLong{{/if}} ">
    <div class="miniActionButton">
      <!-- info menu -->
      <!--<ul class="btnActionInfoMenu">
        <li class="infoTitle"><div id="TextBlock_1">Description</div></li>
        <li>${Description}</li>
        <li><hr class="line" /></li>
        <li class="infoTitle"><div id="TextBlock_3">Designer</div></li>
        <li>${Designer}</li>
        <li><hr class="line" /></li>
        <li>Public!</li>
        <li><span class="linkButton">More info</span></li>
      </ul>-->
      <!-- rest -->
      <div class="btnActionInfo"></div>
      <span class="miniActionName">${Name}</span>      
    </div>
  </div>
</script>