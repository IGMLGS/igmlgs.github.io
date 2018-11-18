let socket = io.connect('http://localhost:5000')

let sendButton = document.getElementById('send')

let messageBox = document.getElementById('messageBox')

sendButton.addEventListener('click', () => {

    let text = document.getElementById('text')

    socket.emit('newMessage', text.value)

    text.value = ''

})

socket.on('newMessage', refreshMessage)

function refreshMessage(text) {

    console.log('new message')

    let message = document.createElement('p')
    message.innerHTML = text
    message.className = 'message'

    messageBox.appendChild(message)

}