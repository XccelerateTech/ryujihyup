var fs = require('fs');

// function readdir(path) {
//     return new Promise((resolve, reject) => {
//         fs.readdir(path, (err, files) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(files);
//             }
//         });
//     });
// }

fs.stat('./project_A/README.md', (err, stats) => {
    if (err) {
      console.error(err)
      return
    }
  
    stats.isFile() //true
    stats.isDirectory() //false
    stats.isSymbolicLink() //false
    stats.size //1024000 //= 1MB
  })

// var readDir = function (dir, calback) {
//     fs.readdir(dir, function (err, files) {
//         fs.stat(dir + "./project_A" + file, function (err, stats) {
//             if (err) {
//                 console.log(err);
//                 return; // exit here since stats will be undefined
//             }

//             if (stats.isFile()) {
//                 calback(dir + "/" + file);
//             }
//             if (stats.isDirectory()) {
//                 walk(file, calback);

//             }
//         });
//     })
// }