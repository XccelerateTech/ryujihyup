// var number = require('./number');
// var letter = require('./numberToLetter');

// number(5);
// letter();


//function = return a letter given a number

var letter = function(i){

    return String.fromCharCode(96 + i);

}

module.exports = letter;