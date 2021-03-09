const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  let buttons = btn.querySelectorAll('.btn_icon');
  buttons.forEach(el => el.classList.toggle('btn_icon--hide'));
})