// const fs = require('fs');
// let name = "KK";
// let chars = name.split('');
// chars.forEach(function(c){
//     console.log(c);
// });

// fs.readFile('a.txt', function(err, data){
//     console.log('ok');
//     console.log(data);
// });

// console.log(5);

function genericPoemMaker(name, gender, fname, lname){
    console.log(name + " is finer than fine wine.");
    console.log("Alturistic and noble for the modern time");
    console.log(fname + " is actually a duck");
    console.log("Always admirably anorned with the latest style");
    console.log(lname + " was shot by a camera on his birthday");
    console.log("A " + gender +  " of unfortunate tradegies who still manages a perpetual smile");
}

const getUserInput = (firstName, lastName, gender, callback) => {
    var fullName=  firstName + " " + lastName;

    if(typeof callback === "function" ){
        callback(fullName, gender, firstName, lastName)
    }
}

const greetUser = (customerName, sex) => {
    var salutation  = sex && sex === "Man" ? "Mr." : "Mrs";
    console.log("Hello, " + salutation + " " + customerName);
}

getUserInput('Michael', 'Fassbender', "Man", genericPoemMaker);
getUserInput('Bill', 'Gates', "Man", greetUser)