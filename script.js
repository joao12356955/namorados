// script.js
let attempts = 0;
const maxAttempts = 2;

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Valid credentials
    const validUsers = [
        { username: 'Joao', password: '061023' },
        { username: 'Fernanda', password: '061023' }
    ];

    if (attempts >= maxAttempts) {
        message.textContent = 'Número máximo de tentativas alcançado. Acesso bloqueado.';
        return;
    }

    const isValidUser = validUsers.some(user => user.username === username && user.password === password);

    if (isValidUser) {
        message.style.color = 'green';
        message.textContent = 'Login bem-sucedido!';
        // Redirect to another page
        window.location.href = 'index.html';
    } else {
        attempts++;
        message.style.color = 'red';
        message.textContent = `Credenciais inválidas. Tentativas restantes: ${maxAttempts - attempts}`;
    }

    if (attempts >= maxAttempts) {
        document.getElementById('username').disabled = true;
        document.getElementById('password').disabled = true;
        document.querySelector('button').disabled = true;
    }
});
