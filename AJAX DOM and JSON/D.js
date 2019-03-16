class User {
    constructor(options) {
        this.firstName = options.name.first;
        this.lastName = options.name.last;
        this.email = options.email;
        this.dateOfBirth = options.dob.date;
    }
}

function randomGen(callback){
    var http = new XMLHttpRequest();
    
    http.open('GET', "https://randomuser.me/api/?results=5");
    
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            var key = JSON.parse(http.responseText);
            callback(key.results.map(function(user){
                return new User(user);
            }))
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
    
    }

randomGen(function(data){
    console.log(data)
});

function randomGen(){
    var http = new XMLHttpRequest();
    
    http.open('GET', "https://randomuser.me/api/?results=5");
    
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            var key = JSON.parse(http.responseText);
            console.log(key.results.map(function(user){
                return new User(user);
            }))
        } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
    
    }

randomGen();