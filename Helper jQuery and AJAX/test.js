$(function(){
    var serializedInput = $('#form').serializeArray();
    // serializedInput is a javascript object
    /*
        [
            {name:"name",value:"John"},
            {name:"email",value:"john@example.com"},
            {name:"tel",value:12345678}
        ]
    */
    // It worked for both POST and GET request.
    $.ajax({
        type:'POST',
        url:"test",
        data: serializedInput,
        dataType: "json",
        success: function(data){
            // Success handler
        },
        error: function(data){
            // error handler
        }
    });

    // You can also stringify the javascript object to a JSON string.
    JSON.stringify(serializeInput);
});