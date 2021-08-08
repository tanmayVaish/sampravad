const socket = io('http://localhost:3000');

const formContainer = document.querySelector('.formContainer');
const messageInput = document.querySelector('.messageInput');
const messageContainer = document.querySelector('.messageContainer');

const appendMsg1 = (msg) => {
    const msgEle = document.createElement('div');
    msgEle.classList.add('messageType1');
    msgEle.innerText = msg;
    messageContainer.append(msgEle);
}
const appendMsg2 = (msg) => {
    const msgEle = document.createElement('div');
    msgEle.classList.add('messageType2');
    msgEle.innerText = msg;
    messageContainer.append(msgEle);
}

const name = prompt("Username");
appendMsg1('YOU JOINED');

socket.emit('new-user', name);

socket.on('chat-message', data => {
    appendMsg2(`${data.name}: ${data.msg}`);
})
socket.on('user-connected', name => {
    appendMsg1(`${name} connected`);
})
socket.on('user-disconnected', name => {
    appendMsg1(`${name} disconnected`);
})


formContainer.addEventListener('submit', event => {
    event.preventDefault();
    const msg = messageInput.value;
    socket.emit('send-chat-message', msg);
    appendMsg2(`You: ${msg}`);
})