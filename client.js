const socket = io('http://localhost:3000');

const formContainer = document.querySelector('.formContainer');
const messageInput = document.querySelector('.messageInput');
const messageContainer = document.querySelector('.messageContainer');

socket.on('chat-message', data=>{
    console.log(data)
    appendMsg(data);
})

formContainer.addEventListener('submit', event => {
    event.preventDefault();
    const msg = messageInput.value;
    socket.emit('send-chat-message',msg);
})

const appendMsg = (msg) =>{
    const msgEle = document.createElement('div');
    msgEle.innerText = msg;
    messageContainer.append(msgEle);

}
