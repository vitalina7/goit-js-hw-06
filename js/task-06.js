const inputName = document.querySelector('#validation-input');
inputName.addEventListener('blur', outOfFocusInput);
function outOfFocusInput(event) {
    if (event.currentTarget.value.length == inputName.dataset.length) {
    inputName.classList.add('valid');
    }
    else {
        inputName.classList.remove('valid');
        inputName.classList.add('invalid');
    }
    return inputName;
}
