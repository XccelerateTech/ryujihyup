var marks = [

    { mark: 99 }, { mark: 80 }, { mark: 60 }, { mark: 70 }, { mark: 50 },

    { mark: 67.6 }, { mark: 62.4 }, { mark: 87.5 }, { mark: 55 }
    ]




    var score = marks.map(function(newMark){
        return newMark.mark
    });
    console.log(score)
    



var average = score.reduce((total, amount, index, array) => {
    total += amount;
    if(index === array.length-1) {
        return total/array.length;
    }else {
        return total;
    }
});

console.log(Math.round(average))