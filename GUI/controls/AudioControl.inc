<!-- Requirements  -->
<link href="css/AudioControl.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/AudioControl.js" type="text/javascript"></script>
<!-- #include virtual="SimpleText.inc" -->
<!-- #include virtual="RecorderVolumeControl.inc" -->

<!-- Template -->
<script id="audioTemplate" type="text/x-jquery-tmpl">
  <ul class="audioContainer">
    <li>
      <span class="labelText">Time</span>
      <div class="timerText1"></div>
      <div class="recorderVolumeControl"></div>
    </li>
    
    <!-- Area is required, it is in common styles -->    
    <li class="playerContainer area">
      <span class="recordButton audioButton" title="Record"></span>
      <span class="stopButton audioButton" title="Stop"></span>
      <span class="playButton audioButton" title="Play"></span>
      <span class="audioTimeline">
        <div class="timeProgress"></div>
      </span>
    </li>
    
    <li>
      <div class="importButton pushButtonBlue"><input class="fileDialog" type="file" name="s" />IMPORT</div>
      <div class="soundStatusText"></div>
    </li>
  </ul>
</script>