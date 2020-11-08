<!-- Requirements  -->
<link href="css/ProfileLink.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ProfileLink.js" type="text/javascript"></script>

<!-- Template -->
<script id="profileLinkTemplate" type="text/x-jquery-tmpl">
  <div class="profileLinkContainer">
    <img class="profileIcon" src="{{if Gender=='Male'}} images/ProfileIconBoy.png {{else}} images/ProfileIconGirl.png {{/if}}"  onclick="executeCommand('profileLink', 'NavigateUserProfile', '')" />
    <div class="profileText" onclick="executeCommand('profileLink', 'NavigateUserProfile', '')">Hi ${UserName}!</div>    
  </div>
</script>