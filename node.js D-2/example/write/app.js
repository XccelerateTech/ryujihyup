var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 128*1024});


readable.on('data', function(chunk){
    console.log(chunk.length);
});

// var fs = require('fs');

// var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 128*1024});

// var writeable = fs.createWriteStream(__dirname + '/textcopy.txt')

// readable.on('data', function(chunk){
//     writeable.write(chunk);
// });

var fs = require('fs');

var readable = fs.createReadStream(__dirname + '/text.txt', { encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/../greet.txt');

readable.pipe(writeable);