const message = document.querySelector('.chat__message');
const questionButton = document.querySelector('.chat__questionButton');
const locationButton = document.querySelector('.chat__locationButton');
const bottomBLock = document.querySelector('.chat__bottomBLock');

const uri = "wss://echo.websocket.org/";
let websocket = new WebSocket(uri);


questionButton.addEventListener('click', () => {

  if(message.value === '') {
    alert('Вы ничего не ввели');
    return false;
  };

  websocket.onopen = function() {
    console.log('connected');
  };
  websocket.onerror = function() {
    console.log('error');
  };
  websocket.onmessage = function(evt) {
    writeToScreen(evt.data, 'answer');
  };
  websocket.send(message.value);
  writeToScreen(message.value, type = 'question');
  message.value = '';
});



locationButton.addEventListener('click', () => {
  const error = () => {
    alert('Невозможно получить ваше местоположение');
  };
  
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
  
    let mapLink = `<a href="https://www.openstreetmap.org/#map=18/${latitude}/${longitude}" target="_blank">Ссылка на карту</a>`;
    writeToScreen(mapLink,'question');
  }
  navigator.geolocation.getCurrentPosition(success, error);
});


function writeToScreen(message,type) {
  let p = document.createElement("p");
  if (type === 'question') {
    p.classList.add('chat__question');
    message = 'You: ' + message;
  }
  else {
    p.classList.add('chat__answer');
    message = 'Server: ' + message;
  };
  p.innerHTML = message;
  bottomBLock.appendChild(p);
}

