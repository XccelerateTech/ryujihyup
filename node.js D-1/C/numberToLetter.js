var number = require('./number');
var letter = require('./randomLetters');




var numberToLetter = function(input){

        var string = "";


    for (var i = 0; i < input; i++){
        string += letter(number())
        
        //String.fromCharCode(96 + i); // where n is 0, 1, 2 ...  // letter(number())
        // i = chr
        // console.log(chr);
        // console.log(i);
    }
    return string;
}



module.exports = numberToLetter;
