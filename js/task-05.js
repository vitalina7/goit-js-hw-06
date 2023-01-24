const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
inputName.addEventListener('input', changeName);
function changeName(event) {
    outputName.textContent = event.currentTarget.value;
    if (!event.currentTarget.value){
        outputName.textContent = "Anonymous";
}
    }

