const body = document.querySelector('.widget');
const btnRef = document.querySelector('.change-color');
const text = document.querySelector('.color');
btnRef.addEventListener('click', ()=>getRandomHexColor());
function getRandomHexColor() {
  const newColor = "#" + Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0);
  body.style.backgroundColor = newColor;
  text.textContent = newColor
}


