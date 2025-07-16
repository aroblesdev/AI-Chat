async function enviarMensaje() {
    const input = document.getElementById('user-input');
    const mensaje = input.value;
    if (!mensaje) return;

    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML += `<div class="user">Tú: ${mensaje}</div>`;

    const res = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: mensaje })
    });

    const data = await res.json();
    chatBox.innerHTML += `<div class="bot">Bot: ${data.response}</div>`;
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
}