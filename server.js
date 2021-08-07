const io = require('socket.io')(3000)

io.on('connection', socket => {
    console.log("user")
    socket.emit('chat-message', 'hey');

    socket.on('send-chat-message', msg=>{
        socket.broadcast.emit('chat-message', msg);
    })
});