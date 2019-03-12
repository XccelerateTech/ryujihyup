/*var number = [1, 2, 3, 4, 5]
    number.reverse();
console.log(number)*/


function reversed(number) {
    console.log(number);
    let numberArray = number.toString();
    let splitNumber = numberArray.split('');
    console.log(splitNumber)
    let reversedNumber = splitNumber.reverse();
    console.log(reversedNumber)
}

reversed(12345);