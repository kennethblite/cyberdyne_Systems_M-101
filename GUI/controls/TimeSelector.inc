<!-- Requirements  -->
<link href="css/TimeSelector.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/TimeSelector.js" type="text/javascript"></script>

<!-- Template -->
<script id="timeSelectorTemplate" type="text/x-jquery-tmpl">
  <div class="timeSelectorContainer">
    <canvas class="timeSelector" width="82" height="42"></canvas>
    
    <div class="hourChanger">
      <div class="changerUp"></div>
      <div class="changerDown"></div>
    </div>
    <div class="minutesChanger">
      <div class="changerUp"></div>
      <div class="changerDown"></div>
    </div>
    
    <div class="formatChange">
      <div class="formatLine" format="AM">
        <img class="amImage" src="images/sun.png" />
        <span>In&nbsp;the&nbsp;morning&nbsp;(AM)</span>
      </div>
      <div  class="formatLine" format="PM">
        <img class="pmImage" src="images/moon.png" />
        <span>Afternoon&nbsp;(PM)</span>
      </div>      
    </div>
    
  </div>
</script>