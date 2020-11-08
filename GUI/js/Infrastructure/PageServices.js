function executeCommand(controlName, command, parametrs){
    var suffix = '';
    
    if (controlName && controlName != ''){
        suffix = '.' + controlName;
    }
        
    window.top.ChatmanController.executeControlCommand(Page.name + suffix, command, '' + parametrs);    
}
