
let outer = true;

$('.color-square-mini').click(function() {
    if (outer) {
        drawColor = $(this).css('background-color');
        $('#big-circle').css({'background-color':drawColor});
    } else {
        fillColor = $(this).css('background-color');
        $('#small-circle').css({'background-color':fillColor});
    }
});

$('#small-circle').click(function() {
    outer = false;
});

$('#big-circle').click(function() {
    outer = true;
});