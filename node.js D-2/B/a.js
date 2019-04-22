var fs = require('fs');


function copy(path){
    var readable = fs.createReadStream(__dirname + path, { encoding: 'utf8', highWaterMark: 32*1024 });
    
    var writeable = fs.createWriteStream(__dirname + '/../greet.txt');
    readable.pipe(writeable);
};

copy('/text.txt')