<!-- Requirements  -->
<link href="%APPPATH%/AppControls/ChatmanFigure/ChatmanFigure.css" rel="stylesheet" type="text/css" />
<script src="%APPPATH%/AppControls/ChatmanFigure/ChatmanFigure.js" type="text/javascript"></script>

<!-- Template -->
<script id="chatmanFigureTemplate" type="text/x-jquery-tmpl">
  <div class="chatmanFigureContainer">
    <img class="leftEyeBack" src="%APPPATH%/AppControls/ChatmanFigure/images/Image72.png"></img>
    <img class="rightEyeBack" src="%APPPATH%/AppControls/ChatmanFigure/images/Image75.png"></img>
    
    <img class="leftEye" src="%APPPATH%/AppControls/ChatmanFigure/images/EyeLeft.png"></img>
    <img class="rightEye" src="%APPPATH%/AppControls/ChatmanFigure/images/EyeRight.png"></img>
    
    <img class="leftHand" src="%APPPATH%/AppControls/ChatmanFigure/images/Image78.png"></img>
    <img class="rightHand" src="%APPPATH%/AppControls/ChatmanFigure/images/Image79.png"></img>

    <div class="leftEar"></div>
    <div class="rightEar"></div>    

    <div class="eyelidsContainer">
      <img class="leftEyelid" src="%APPPATH%/AppControls/ChatmanFigure/images/Image69.png"></img>
      <img class="rightEyelid" src="%APPPATH%/AppControls/ChatmanFigure/images/Image70.png"></img>
    </div>

    <img class="chatmanBody" src="%APPPATH%/AppControls/ChatmanFigure/images/Image84.png"></img>
    <div class="eyeClicker" clickCommand="EyesClick" bodyPart="Eyes"></div>    
    
    <div class="mouth" clickCommand="MouthClick" bodyPart="Mouth"></div>
    
    <!-- Clickable areas -->
    <div class="leftHandClicker" clickCommand="HandsClick" bodyPart="Hands"></div>
    <div class="rightHandClicker" clickCommand="HandsClick" bodyPart="Hands"></div>
    
    <div class="leftEarClicker" clickCommand="EarsClick" bodyPart="Ears"></div>
    <div class="rightEarClicker" clickCommand="EarsClick" bodyPart="Ears"></div>  
  </div>
</script>