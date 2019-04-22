var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/'){
    res.writeHead(200, { 'Content-Type':'text/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/flowershop.css') {
        res.writeHead(200, {'Content-Type' : 'text/css'});
        fs.createReadStream(__dirname + '/flowershop.css').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');