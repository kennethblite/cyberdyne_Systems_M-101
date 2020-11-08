<!-- Requirements  -->
<link href="css/ActionPopup.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ActionPopup.js" type="text/javascript"></script>

<!-- Template -->
<script id="actionPopupTemplate" type="text/x-jquery-tmpl">
	<ul class="actionPopupList">
		<li class="infoTitle"><div id="TextBlock_1">Name</div></li>
		<li>${Name}</li>
		<li><hr class="line" /></li>
		<li class="infoTitle"><div id="TextBlock_1">Description</div></li>
		<li>${Description}</li>
		<li><hr class="line" /></li>
		<li class="infoTitle"><div id="TextBlock_3">Designer</div></li>
		<li>${Designer}</li>
		<li><hr class="line" /></li>
		<li class="infoTitle"><div id="TextBlock_3">Designed On</div></li>
		<li>${DesignedOn}</li>
		<li><hr class="line" /></li>
		<li>Public!</li>
		<li><span class="linkButton">More info</span></li>
	</ul>
</script>