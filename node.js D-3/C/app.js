var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.end('Hello World Test')
})

app.post('/', (req, res) => {
    console.log('Hello Wolrd!');
    console.log(req.body.name)
    console.log(req.body.age)

        res.send("Hello");


});

app.listen(8000);