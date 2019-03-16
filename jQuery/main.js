$('#clickable-div').on("click",function(){
    alert("I am clicked");
});
// The code below activates the 'click' event. 
$('#clickable-div').trigger("click");

$('#input').on("blur",function(){
    alert("Hey you didnt finish typing");
});

$('#input').trigger("blur");
