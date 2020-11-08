<!-- Requirements  -->
<link href="css/ReminderControl.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ReminderControl.js" type="text/javascript"></script>

<!-- Template -->
<script id="reminderControlTemplate" type="text/x-jquery-tmpl">
  <div class="reminderControlContainer">
	  <div class="remindControlImage" style="background-image: url('images/ReminderPage/25x25/${ImageId}.png');" rect></div>
	  <div class="remindDescription" rect="">${Description}</div>
    <div class="reminderCloud">
      <span class="remindEdit">Edit</span>
      <span class="remindDelete">Delete</span>
    </div>
	  <div class="remindDate" rect>${Date}</div>
	  <div class="remindTime" rect>${Time}<img src="images/{{if IsDay}}sun{{else}}moon{{/if}}.png" class="remindersTimeOfDayImage" /></div>
	  <div class="remindRecurrence" rect>${RecurranceType}</div>
  </div>  
</script>