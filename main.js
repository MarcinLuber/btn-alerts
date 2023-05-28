const errorBtn = document.querySelector('#btn-error');
const successBtn = document.querySelector('#btn-success');
const infoBtn = document.querySelector('#btn-info');
const alerts = document.querySelector('.informations');

function createNotification(message, type = 'info') {
    const alert = document.createElement('div');
    const colorRoll = ['blue', 'red', 'yellow', 'purple', 'black', 'orange,', 'green']
    const i = Math.floor(Math.random() * 7 + 0);
    alert.style.color = colorRoll[i]
    alert.classList.add('alert', `alert--${type}`);
    alert.innerText = message;

    alerts.appendChild(alert);

    setTimeout(() => {
        alert.remove();
    }, 3000)
}

errorBtn.addEventListener('click', () => createNotification('Coś poszło nie tak', 'error'));
successBtn.addEventListener('click', () => createNotification('To jest wspaniałe!', 'success'));
infoBtn.addEventListener('click', () => createNotification('Troche informacji.', 'info'));