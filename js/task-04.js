let counterValue=0;
const decremBtn=document.querySelector('[data-action=decrement]');
const incremBtn=document.querySelector('[data-action=increment]');
const totalValue=document.querySelector("#value");

decremBtn.addEventListener('click', () => {
    counterValue -= 1;
   totalValue.textContent = counterValue;
});
incremBtn.addEventListener('click', () => {
    counterValue += 1;
  totalValue.textContent = counterValue;
});
console.log('totalValue');