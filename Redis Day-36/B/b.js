const express = require('express');
const redis = require('redis');
const axios = require('axios');
const async = require('async');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

const app = express();

const readTransactionQueue = async.queue(function (txIndex, callback) {
    console.log('Fetching the transaction detail ' + txIndex);
    axios.get('https://blockchain.info/rawtx/' + txIndex)
        .then((response) => {
            client.setex(txIndex, 10 * 60, JSON.stringify(response.data), (err) => {
                if(err) {
                    console.log(err);
                }
                callback();
            });
        });
}, 4);

function readLatestBlock() {
    console.log('checking for the latest block for updates....');

    axios.get('https://blockchain.info/latestblock')
        .then((response) => {
            response.data.txIndexes.forEach(txIndex => {
                client.get(txIndex, (err, reply) => {
                    if(err) {
                        console.log(err);
                    }

                    if (reply === null) {
                        readTransactionQueue.push(txIndex);
                    } else {
                        client.expire(txIndex, 10 * 60, (err) => {
                            if (err) {
                                console.log(err);
                            }
                        });
                    }
                });
            })
            client.set('latestBlock', JSON.stringify(response.data), (err) => {
                if (err) {
                    console.log(err)
                }
            });
        });
        setTimeout(readLatestBlock, 60 * 10000);       
}

readLatestBlock();

app.get('/latestBlock', (err, reply) => {
    client.get('latestBlock', (err, reply) => {
        const latestBlock = JSON.parse(reply);
        Promise.all(
            latestBlock.txIndexes.map(txIndex => {
                return new Promise((resolove, reject) => {
                    client.get(txIndex, (err, reply) => {
                        const transaction = JSON.parse(reply);
                        if(transaction == null) {
                            return reject('Still fetching data.')
                        }
                        resolove(transaction.hash);
                    });
                });
            })
        ).then((hashes) => {
            latestBlock.txHashes = hashes;
            resizeBy.json(latestBlock);
        }).catch(err => {
            resizeBy.status(400).send(err);
        })
    })
});

app.listen(8080);