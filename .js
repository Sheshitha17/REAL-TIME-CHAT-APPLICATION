const socket = new WebSocket(`ws://${location.host}`);

const chatBox = document.getElementById('chat-box');
const msgInput = document.getElementById('msg-input');

socket.addEventListener('message', (event) => {
  const message = document.createElement('div');
  message.textContent = event.data;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
  const msg = msgInput.value.trim();
  if (msg) {
    socket.send(msg);
    msgInput.value = '';
  }
}

msgInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
