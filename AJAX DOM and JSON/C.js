// function whoIsInSpace(callback){
// var http = new XMLHttpRequest();

// http.open('GET', "http://api.open-notify.org/astros.json");

// http.onreadystatechange = function() {
//     if(http.readyState != XMLHttpRequest.DONE) {
//         return;
//     } else if(http.status == 200) {
//         var a = callback(http.responseText);
//         var names = [];
//         for (var i=0; i < a.length; i++) {
//             names.push(a[i].name)
//         }
//         // var keys = a.map(function(key){
//         //     return key
//         // })
//     } else {
//         console.log('error occurred' + http.status);
//     }
// }
// http.send();

// }

// whoIsInSpace(function(data){
//     console.log(JSON.parse(data))
// })

// function whoIsInSpace(callback){
//     var http = new XMLHttpRequest();
    
//     http.open('GET', "http://api.open-notify.org/astros.json");
    
//     http.onreadystatechange = function() {
//         if(http.readyState != XMLHttpRequest.DONE) {
//             return;
//         } else if(http.status == 200) {
//             var key = JSON.parse(http.responseText);
//             callback(key.people.map(function(person){
//                 return person.name;
//             }))
//          } else {
//             console.log('error occurred' + http.status);
//         }
//     }
//     http.send();
    
//     }
    
//     whoIsInSpace(function(callback){
//         console.log((callback))
//     })

function whoIsInSpace(callback){
    var http = new XMLHttpRequest();
    
    http.open('GET', "http://api.open-notify.org/astros.json");
    
    http.onreadystatechange = function() {
        if(http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if(http.status == 200) {
            var key = JSON.parse(http.responseText);
            callback(key)
         } else {
            console.log('error occurred' + http.status);
        }
    }
    http.send();
    
    }
    
    whoIsInSpace(function(data){
        console.log((data))
        let newArry = []

        for (let i = 0; i < data.people.length; i ++){
            newArry.push(data.people[i].name)
        }

        console.log(newArry)


    })

    // people.map(function(person){
    //     return person.name;
    // }))