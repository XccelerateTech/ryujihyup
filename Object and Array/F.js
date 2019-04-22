//var alphabet = "jabcdefgh";
//
//function transform(number){ 
//
//    var numberArray = number.split(''); 
//
//    var letterArray = numberArray.reduce(function(acc, char){ 
//        acc.push(alphabet[char]); 
//        return acc; 
//    }, []) 
//
//    letterArray.sort();
//
//    var sortedLetterArray = letterArray.join('');
//    return sortedLetterArray;
//
//}
//
//transform('0987654321');

function transform(number){

    var numberArray = number.split('');
    switch(transform){
          case "j":
          console.log(0);
          break;
          case "a":
          console.log(1);
          break;
          case "b":
          console.log(2);
          break;
          case "c":
          console.log(3);
          break;
          case "d":
          console.log(4);
          break;
          case "e":
          console.log(5);
          break;
          case "f":
          console.log(6);
          break;
          case "g":
          console.log(7);
          break;
          case "h":
          console.log(8);
          break;
          case "i":
          console.log(9);
          break;
          
      
      }
      return transform
}

transform("j")
transform

var alphabet="jabcdefghi";

function transform(number) {
    var numberArray = number.split('');
    var alpArray = numberArray.reduce(function(al, num){
        al.push(alphabet[num])
        return al;
    }, [])
    alpArray.sort();
    return alpArray


}

transform('0987654321')