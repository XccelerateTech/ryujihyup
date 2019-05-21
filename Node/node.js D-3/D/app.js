var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());

app.post('/', (req, res) => {
    console.log(req.body)
    var sum = req.body.arr
    console.log(sum);
    var result = sum.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
    })
    console.log(result);

    res.json({sum: result})
});

app.listen(8000);