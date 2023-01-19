

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');

createBtn.addEventListener('click', creatBox)
destroyBtn.addEventListener('click', destroyBox)
inputEl.addEventListener('click', getCurrentInputValue);

function getCurrentInputValue(event) {
  return event.currentTarget.value;
};
function creatBox(amount) {
divEl.innerHTML = '';
for (let i = 0; i < inputEl.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.backgroundColor = `${getRandomHexColor()}`;
    box.style.marginTop = '20px';
  divEl.appendChild(box);
  }
};

function destroyBox() {
divEl.innerHTML = '';
  inputEl.value = '';
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};