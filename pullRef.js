var mouseY = 0;
var startMouseY = 0;
$('main').on('mousedown', function(ev) {
    mouseY = ev.pageY;
    startMouseY = mouseY;
    $(document).on('mousemove', function(e) {
        if (e.pageY > mouseY) {
            var d = e.pageY - startMouseY;
            console.log("d: " + d);
            if (d >= 200) {
                location.reload();
                $('main').append($('<img/>').attr('src', 'https://www.mormota.ro/skin/frontend/default/polysoft/images/spinner.gif'));
            }
            $('main').css('margin-top', d / 4 + 'px');
        } else
            $(document).unbind("mousemove");


    });
});
$('main').on('mouseup', function() {
    $('main').css('margin-top', '0px');
    $(document).unbind("mousemove");
});
$('main').on('mouseleave', function() {
    $('main').css('margin-top', '0px');
    $(document).unbind("mousemove");
});