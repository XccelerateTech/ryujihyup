const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) =>{
    socket.on('disconnect', ()=>{
        console.log('A user has left')
    });

    socket.on('subscribe', (room)=>{
        chatroom = room;
        socket.join(room);
        console.log(`A user has connected to room ${room}`);
    });

    socket.on('chat message', function(msg){
        console.log(`Message: ${msg}`)
        io.to(chatroom).emit('chat message', msg);
    })
})

http.listen(8080);