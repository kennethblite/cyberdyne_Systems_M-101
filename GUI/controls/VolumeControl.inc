<!-- Requirements  -->
<link href="css/VolumeControl.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/VolumeControl.js" type="text/javascript"></script>
<!-- Template -->
<script id="volumeControlTemplate" type="text/x-jquery-tmpl">
  <div id="volumeContainer" style="overflow: visible;">
    <img class="speakerImage" {{if IsMuted}}src="images/speakerMute.png"{{else}}src="images/speaker.gif"{{/if}} onclick="speakerImageClick.call(this, event)"/>
    <div id="scaleContainer">
      <div id="onColor" style="left: ${(VolumeLevel * 38) / 100 - 38}px;"></div>
      <div id="scaleGrid" style="background: {{if IsIntro}} url('images/volumeControlScaleGrid.png') {{else}} url('images/scaleGrid1.gif') {{/if}};"></div>
    </div>
    {{if IsIntro}}
    
    {{else}}
        <img class="deviceImage" style="display:inline-block; height: 15px" {{if DefaultAudioDevice=="PC"}}src="images/AUDIO_PC.png"{{else}}src="images/AUDIO_CM.png"{{/if}} onclick="audioImageClick.call(this, event)"/>
        {{/if}}
      </div>
</script>