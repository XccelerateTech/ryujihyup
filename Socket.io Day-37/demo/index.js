const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html');
});
// Method 1//
// io.on('connection', (socket)=>{
//     console.log('A user has connected to our sever');

//     socket.on('disconnect', ()=>{
//         console.log('A user has left the server.');
//     });

//     socket.on('chat message', function(msg){
//         console.log(`Message: ${msg}`);
//         io.emit('chat message', msg)
//     });
// });

// io.of('/namespace1').on('connection', (socket)=>{
//         console.log('A user has connected to our sever, namespace1');
    
//         socket.on('disconnect', ()=>{
//             console.log('A user has left namespace1.');
//         });
    
//         socket.on('chat message', function(msg){
//             console.log(`Message: ${msg} to namespace 1`);
//             io.of('/namespace1').emit('chat message', msg)
//         });
//     })

// Method 2//

// let one = io.of('/namespace1');
// one.max_connections = 3;
// one.current_connections = 0;

// one.on('connection', (socket)=>{
//         console.log('A user has connected to our sever, namespace1');
    
//         socket.on('disconnect', ()=>{
//             console.log('A user has left namespace1.');
//         });
    
//         socket.on('chat message', function(msg){
//             console.log(`Message: ${msg} to namespace 1`);
//             io.of('/namespace1').emit('chat message', msg)
//         });
//     })


// let two = io.of('/namespace1');
// two.max_connections = 3;
// two.current_connections = 0;

// two.on('connection', (socket)=>{
//     console.log('A user has connected to our sever, namespace2');
    
//         socket.on('disconnect', ()=>{
//             console.log('A user has left namespace2.');
//         });
    
//         socket.on('chat message', function(msg){
//             console.log(`Message: ${msg} to namespace 2`);
//             io.of('/namespace1').emit('chat message', msg)
//         });
// })

// Method 3//

// let one = io.of('/namespace1');
// one.max_connections = 3;
// one.current_connections = 0;

// one.on('connection', (socket)=>{
//     if (one.current_connections >= one.max_connections) {
//         socket.emit('disconnect', 'I\'m sorry, too many connections');
//         socket.disconnect();
//     } else {
//         one.current_connections ++
//         console.log(one.current_connections);
//         console.log('A user connected to namespace1')
        
//         socket.on('subscribe', (room) =>{
//         chatroom = room;
//         socket.join(room);
//         console.log(`A user has connected to room ${room}`);
//         });
//         socket.on('chat message', function(msg){
//             console.log('message: ' + msg);

//             // let query = knex.insert

//             io.to(chatroom).emit('chat message', msg);
//         })
//     }
    


//     socket.on('disconnect', ()=>{
//         console.log('A user has left')
//     });

// });

//Method 4//
io.on('connection', (socket)=>{
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
    });
});

http.listen(3030)