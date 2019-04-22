var express = require('express');
var app = express();

app.use(express.static('flowershop'));

app.listen(8000);