const player = function(name){
    this.name = name;
    this.health = 100;
    
}

player.prototype.attack = function (opponent) {
    opponent.health -= 10;
    console.log(`${this.name} attacked now the opponenet has ${opponent.health}`)
};

var kazuya = new player('Kazuya');
var jin = new player('Jin')

//player.prototype.getHealth = function()
// player.prototype.revenge = function(opponent){
while(jin.health > 0 && kazuya.health > 0) {
player.prototype.kturn = Math.floor((Math.random() * 10) +1);
player.prototype.jturn = Math.floor((Math.random() * 10) +1);
//console.log(jin.jturn)
//console.log(kazuya.kturn);

if (jin.jturn > kazuya.kturn){
    jin.attack(kazuya);
    console.log(kazuya.health)
let difference = jin.jturn - kazuya.kturn;
console.log(`Difference = ${difference}`)

    if(difference > 5)

    jin.attack(kazuya);
    jin.attack(kazuya);

    console.log(kazuya.health) 
}
else if (kazuya.kturn > jin.jturn){
    kazuya.attack(jin);
    console.log(jin.health)
    let difference = kazuya.kturn - jin.jturn;
console.log(`Difference = ${difference}`)

    if(difference > 5)

    kazuya.attack(jin);
    kazuya.attack(jin);

    console.log(jin.health)  
}
else{
    console.log(this.name + " " + this.name + "Draw")
}
}

// //player.prototype.turn = function(opponent){
//     var number = Math.floor((Math.random() * 10) + 1);
    
// };