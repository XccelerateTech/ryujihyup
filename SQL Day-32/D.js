const fs = require('fs');
const CSVReadableStream = require('csv-reader');
const pg = require('pg');

var config = {
    user: 'Ann',
    database: 'postgres',
    password: '', //whatever your password is, the default is postgres or password, try both
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

var client = new pg.Client(config);

var inputStream = fs.createReadStream('transaction_record.csv', 'utf8');

async function test(){
    await client.connect();
    
    let rows = [];

    inputStream.pipe(CSVReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', async function (row) {
        rows.push(row);
        console.log(rows)
    })
    .on('end', async function (data) {
        await client.query('BEGIN');
        try{
            for (let row of rows) {
                let [action, name, quantity] = row;
                if (action === 'BUY') {
                    let result = await client.query(`
                    UPDATE stock SET quantity = quantity + $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`, [quantity, name]);
                    console.log(`You have bought ${quantity} of ${name}!`);
                }
                else if(action === 'SELL') {
                    let result = await client.query(`
                    UPDATE stock SET quantity = quantity - $1
                    FROM citrus
                    WHERE stock.citrus_id = citrus.id AND name = $2`,
                    [quantity, name]);
                    console.log(`You have sold ${quantity} of ${name}!`)
                }
                else if (result.rows[0].quantity < quantity) {
                    throw new Error(`Not enough ${name} to sell!`);
                }
            }
            await client.query('COMMIT');
        }
        catch (e){
            await client.query('ROLLBACK')
            console.log(e)
        }
    });
}

test();