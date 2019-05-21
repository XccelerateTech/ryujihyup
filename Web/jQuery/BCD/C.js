$('tbody').append(`

    <tr class="row">
        <td>Peter</td>
        <td>123456789</td>
        <td>peter@gmail.com</td>
        </tr>`);

$('#row-submit').append(`<input type="reset" value="clear"/>`);

var change = $('#header h1').html();
change = "Jihyup's contact list application"
$('#header h1').html(change);

//$('#header').html('<h1>Jihyup\'s contact list application</h1>');

$('tbody').css("color", "red");