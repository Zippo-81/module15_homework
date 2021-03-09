const info = document.querySelector('.info');

document.querySelector('.btn').addEventListener('click', () => {

  const error = () => {
    info.textContent = 'Невозможно получить ваше местоположение';
  }
  
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const url = `https://api.ipgeolocation.io/timezone?apiKey=32bcd4a6e4b548968e7afcdb682ac679&lat=${latitude}&long=${longitude}`;
        fetch(url)
        .then((response) => {return response.json();})
        .then((obj) => {
            console.log(obj);
            info.innerHTML = `<p>Временная зона: ${obj.timezone}</p><p>Местные дата и время: ${obj.date_time_txt}</p>`;
        })
        .catch(() => {console.log('Ошибка')});
      };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  };
});





