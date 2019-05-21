// var http = require('http');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-type' : 'text/plain'});
//     res.end('Hello World');

// }).listen(8080, '127.0.0.1');

// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req, res){

//     res.writeHead(200, { 'Content-Type':'text/html' });
//     fs.createReadStream(__dirname + '/index.html').pipe(res);

// }).listen(8080, '127.0.0.1');

var http = require('http');

http.createServer(function(req, res){

    res.writeHead(200, { 'Content-Type':'application/json' });
    var obj = {
        name: 'John',
        surname: 'Doe'
    }
    res.end(JSON.stringify(obj));

}).listen(8080, '127.0.0.1');