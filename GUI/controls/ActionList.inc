<!-- Requirements  -->
<link href="css/ActionList.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ActionList.js" type="text/javascript"></script>
<!-- #include virtual="ActionButton.inc" -->
<!-- #include virtual="SimpleText.inc" -->

<!-- Template -->
<script id="actionListTemplate" type="text/x-jquery-tmpl">
  <div class="actionListContainer">
    
    <div class="contentTop">
      <span class="chitChatCountText"></span>
      <img class="searchButton" src="images/ChatWithChatmanPage/searchButton.png" role="search" />
      <img class="searchButton" src="images/ChatWithChatmanPage/searchCancelButton.png" role="cancelSearch" />
    </div>
       
    <div class="actionList">      
      <div class="actionListItemsContainer"></div>
    </div>

    <span class="actionListLeftScroller"></span>
    <span class="actionListRightScroller"></span>
    
  </div>
</script>