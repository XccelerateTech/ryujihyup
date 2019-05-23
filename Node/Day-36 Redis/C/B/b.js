const redis = require('redis');

const client = redis.createClient({
    host: 'localhost',
    port: 6379,
});

function scheduleGetJob(){
    setTimeout(getJob, 5000);
}

function getJob(){
    client.rpop('messageQueue', (err, hugeDog) => {
        if (err) {
            console.log(err);
            scheduleGetJob();
            return;
        }

        if (hugeDog === null) {
            console.log('No jobs here');
            scheduleGetJob();
            return ;
        }
        console.log(hugeDog)

        const job = JSON.parse(hugeDog);
        console.log(hugeDog)

        console.log('Processing job, msg: ' + job.msg + ' date: ' + job.date); setTimeout(function () {
            console.log('Job Done! Ready for a different job')
            scheduleGetJob();
        }, 10000);
    });
}

scheduleGetJob();