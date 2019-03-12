var alphabet = "jabcdefgh";

function transform(number){ 

    var numberArray = number.split(''); 

    var letterArray = numberArray.reduce(function(acc, char){ 
        acc.push(alphabet[char]); 
        return acc; 
    }, []) 

    letterArray.sort();

    var sortedLetterArray = letterArray.join('');
    return sortedLetterArray;

}

transform('0987654321');
