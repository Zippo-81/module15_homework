const dimentions = document.querySelector('.dimentions');
const pos = document.querySelector('.position');

document.querySelector('.btn').addEventListener('click', () => {
  dimentions.innerHTML = `Ширина экрана: ${window.screen.width} px<br> Высота экрана: ${window.screen.height} px`;

  const error = () => {
    pos.textContent = 'Информация о местоположении недоступна';
  }
  
  const success = (position) => {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude)
    pos.innerHTML = `Широта: ${latitude}<br>Долгота: ${longitude}`;
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
});





