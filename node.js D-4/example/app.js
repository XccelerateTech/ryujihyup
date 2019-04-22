// const url = 'https://jsonplaceholder.typicode.com/posts';
// const fetch = require('node-fetch');

// fetch(url)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const fs = require('fs');

function readdir(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, files) => {
            if (err) {
                reject(err);
            } else {
                resolve(files);
            }
        });
    });
}

readdir('./node_modules/node-fetch').then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})