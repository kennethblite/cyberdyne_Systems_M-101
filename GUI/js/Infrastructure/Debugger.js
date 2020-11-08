$(document).ready(function() {
    $(document).bind('keydown', function(event) {
        if (event.shiftKey && event.ctrlKey && event.which == 68) {
            $(document.body).append($('#debugger').html());
        }
    });
});

window.onerror = function (e){
    window.top.$('#output').append('<div>' + e + '</div>');
}
