<!-- Requirements  -->
<link href="css/ActionButton.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ActionButton.js" type="text/javascript"></script>
<!-- #include virtual="ActionCloud.inc" -->
<!-- #include virtual="InfoMenu.inc" -->

<!-- Template -->
<script id="actionButtonTemplate" type="text/x-jquery-tmpl">
	<div class="actionButtonContainer  {{if IsLong}}actionButtonLong{{/if}} ">
		<div class="actionButton">
  		<div class="btnActionInfo"></div>
			<span class="actionName" title="${Description}">${Name}</span>      
		</div>
    <div class="moodIconContainer" style="background: url('images/Moods/Small/${MoodName}.png') no-repeat;">
     
    </div>
	</div>
</script>