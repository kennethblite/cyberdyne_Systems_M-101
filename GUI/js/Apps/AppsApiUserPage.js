var MyPage = {
    init: function(){
        Chatman.registerMainApplicationControl(MyPage);
    },
    
    setText: function(text){
        $('#textBox').val(text);
    }
}

MyPage.init();
