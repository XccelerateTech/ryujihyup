var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

/*var result = players.filter(function(player){
    return player.club === "FC Barcelona";
});

result*/

/*var names = []
for (var i = 0; i < players.length; i++) {
    names.push(players[i].name)
}*/ //Number 1

var names = players.map(function(player){
    return player.name
}); // Number 2
console.log(names)