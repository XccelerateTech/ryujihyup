function processArray(array, cb) {
    var emptyArray = [];

    // for(let elem of array){
    //     emptyArray.push(cb(elem))
    //     console.log(emptyArray)
    // }

    array.forEach(a => {
        emptyArray.push(cb(a));
        console.log(emptyArray)
    });

    // return emptyArray
}


var myArray = [4, 8, 2, 7, 5];
processArray(myArray, (a => {
    return a * 2;
}));



// function processArray(array) {
//     var emptyArray = [];
//     var result = array * 2
//     console.log(result)
// }

// var myArray = [4, 8, 2, 7, 5];
// myArray.forEach(processArray);

// console.log('Hello')