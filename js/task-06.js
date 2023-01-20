const inputName = document.querySelector('#validation-input');
inputName.addEventListener('blur', outOfFocusInput);
function outOfFocusInput(event) {
    inputName.classList.remove('valid');
    inputName.classList.remove('invalid');
    if (event.currentTarget.value.length == inputName.dataset.length) {
    inputName.classList.add('valid');
    }
    else {
        inputName.classList.add('invalid');
    }
    return inputName;
}
