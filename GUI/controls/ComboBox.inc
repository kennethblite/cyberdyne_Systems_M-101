<!-- Requirements  -->
<link href="css/ComboBox.css" rel="stylesheet" type="text/css" />
<script src="js/Controls/ComboBox.js" type="text/javascript"></script>

<!-- Template -->
<script id="comboBoxTemplate" type="text/x-jquery-tmpl">
  <span class="comboBoxContainer">
    <select class="comboBox">
      {{each Items}}
        <option>${$value.Value}</option>
      {{/each}}
    </select>
  </span>
</script>