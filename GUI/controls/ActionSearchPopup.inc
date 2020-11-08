<!-- Requirements  -->
<link href="css/ActionSearchPopup.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ActionSearchPopup.js" type="text/javascript"></script>

<!-- Template -->
<script id="actionSearchPopupTemplate" type="text/x-jquery-tmpl">
	<div id="actionSearchPopupContainer">
		<div>
			<span>Search by: </span>
			<span id="actionSearchWords">
				<span class="selectedSearchWord" val="Name" searchElement="actionSearchTextBox">Name</span>
				<span val="Mood" searchElement="actionSearchSelect">Mood</span>
				<span val="Author" searchElement="actionSearchTextBox">Author</span>
			</span>
		</div>
		
		<div>
			<input id="actionSearchTextBox" type="text" />
      <select id="actionSearchSelect">        
      </select>
			<div id="actionSearchButton" class="pushButtonBlue">SEARCH</div>
		</div>
		
		<div class="smallLink">
			Search our website
		</div>
	</div>
</script>