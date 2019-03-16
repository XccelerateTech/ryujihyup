var para = document.getElementsByTagName('p');
for (var i = 0; i < para.length; i++) {
    para[i].addEventListener('click', function(e){
        console.log('I was clicked ' + e.target.id);
    });
}

var h1 = document.getElementsByTagName('h1');
h1[0].addEventListener('click', function(e){
    e.target.innerHTML = "I was clicked!"
    e.target.style.color = 'green'
})

