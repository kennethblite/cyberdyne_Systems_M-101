<!-- Requirements  -->
<link href="css/ChatmanApp.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ChatmanApp.js" type="text/javascript"></script>

<!-- Template -->
<script id="chatmanAppTemplate" type="text/x-jquery-tmpl">
  <div class="chatmanAppContainer">    
    <div class="chatmanAppImage" style="background-image: url(${ImagePath})">
		  <img class="closeButton" src="images/chatmanAppClose.png" />
    </div>
    <div class="chatmanAppText">
		<div class="chatmanAppName">${AppName}</div>
		<div class="chatmanAppDescription">${AppDescription}</div>
    </div>    
  </div>
</script>