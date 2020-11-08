<!-- Requirements  -->
<link href="css/ToolsBar.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ToolsBar.js" type="text/javascript"></script>

<!-- Template -->
<script id="toolsBarTemplate" type="text/x-jquery-tmpl">
  <div id="toolsBarContainer">
   <div class="topBar">
        <div class="tool" onclick="executeCommand('', 'NavigateOptions', '')" name="options" title="Options">
          <img class="toolImage" src="images/optionsToolBarButton.png" />          
        </div>
        <div class="tool" onclick="executeCommand('', 'NavigateWebSettings', '')" name="website" title="Web site settings">
          <img class="toolImage" src="images/websiteOptionsToolBarButton.png" />
        </div>
        <div class="tool" onclick="executeCommand('', 'NavigateAboutChatman', '')" name="about" title="About Chatman">
          <img class="toolImage" src="images/aboutToolbarButton.png" />
        </div>
        <div class="tool" style="visibility: hidden;">
        </div>
        <div class="tool" style="visibility: hidden;">
        </div>
        <div class="redTriangle"></div>
    </div>

    <div class="bottomBar">
        <div class="tool" onclick="executeCommand('', 'NavigateParentsArea', '')" name="parentsInformation"  title="Information for parents" >
          <img class="toolImage" src="images/toolsBarParents.png" />
        </div>
        <div class="tool" onclick="executeCommand('', 'NavigateChatmanProblemWebSite', '')" name="fixProblems"  title="Fix a problem" >
          <img class="toolImage" src="images/toolsBarFixAProblem.png" />
        </div>      
        <div class="tool" onclick="executeCommand('', 'NavigatePushButtonPage', '')" name="pushButton" title="My head button" >
          <img class="toolImage" src="images/toolsBarPushButton.png"/>
        </div>
        <div class="tool" onclick="executeCommand('', 'NavigateFaqWebSite', '')" name="question" title="Got a question?">
          <img class="toolImage" src="images/toolsBarQuestion.png" />
        </div>
        <div class="tool" onclick="executeCommand('', 'NavigateIntro', '')" name="runIntro"   title="Run Introduction">
          <img class="toolImage" src="images/toolsBarRunIntro.png"/>
        </div>
    </div>
  </div>
</script>