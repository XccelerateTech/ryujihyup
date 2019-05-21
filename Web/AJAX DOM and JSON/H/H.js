document.getElementById('learnMore').addEventListener("click", function() {
    let overlay = document.getElementById('overlay')
    overlay.remove();
    document.getElementsByClassName('para')[0].innerHTML = 'welcome to my flower shop';
    document.getElementsByClassName('para')[0].style.backgroundColor = 'blue';
    document.getElementsByClassName('btn')[0].innerHTML = 'buy flowers';
    document.getElementsByClassName('btn')[0].style.backgroundColor = 'red';
});


//     console.log(flower)
// var action = function(){
//     flower.removeEventListener('mouseover', action);
// }

let icons = document.getElementsByClassName('imgs')

for (let icon of icons){
    icon.addEventListener('mouseover', function () {
        icon.style.height = "120px"
        icon.style.width = "120px"
});
    icon.addEventListener('mouseout', function () {
        icon.style.height = "80px"
        icon.style.width = "80px"
    }); 
}