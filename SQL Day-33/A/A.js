const fs = require('fs');
const CSVReadableStream = require('csv-reader');
const knex = require('knex')({
    client: 'postgresql',
    connection: {
        database: "postgres",
        user: "Ann",
        password: ""
    }
});

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

async function test(){
    
    let rows = [];

    inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', async function (row) {
        rows.push(row);
        console.log(rows)
    })
    .on('end', async (data) => {
        knex.transaction(async (trx)=>{
            for (let row of rows) {
                let [action, name, quantity] = row;                
                if (action === 'BUY') {
                    await trx('stock')
                    .whereIn('citrus_id', function(){
                        return this.select('id')
                            .from('citrus')
                            .where('name', '=', name);
                    })
                    .increment('quantity', quantity);
                } else if (action === 'SELL'){
                    await trx('stock')
                    .whereIn('citrus_id', function(){
                        return this.select('id')
                            .from('citrus')
                            .where('name', '=', name);
                    })
                    .decrement('quantity', quantity);
                } else if (rows[0].quantity < quantity){
                    throw new Error(`Not enought ${name} to sell!`)
                }
            }
        })
    });
}

test();


// const fs = require('fs');
// const CSVReadableStream = require('csv-reader');
// const knex = require('knex')({
//     client: 'postgresql',
//     connection: {
//         database: "postgres",
//         user: "Ann",
//         password: ""
//     }
// });

// var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

// async function test(){
    
//     let rows = [];

//     inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
//     .on('data', async function (row) {
//         rows.push(row);
//         console.log(rows)
//     })
//     .on('end', async function (data) {
//         knex.transaction((trx)=>{
//             for (let row of rows) {
//                 let [action, name, quantity] = row;
//                 let query = trx('stock')
//                 .innerJoin('citrus', 'stock.citrus_id', 'citrus.id')
//                 .where({'citrus.name' : name})
//                 query.then((data) => {
//                     console.log(data)
                
//                     if (action === 'BUY') {
//                     let query1 = trx
//                     .update()
//                     }
//                 })
//             }       
//         })
//     });
// }

// test();