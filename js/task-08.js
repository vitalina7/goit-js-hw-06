const formLog = document.querySelector('.login-form');
formLog.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

if (email === '' || password === '') {
    alert('Please, fill this form correctly');
    } else {
        const formData = {
            email,
            password,
        };
    console.log(formData);
    event.currentTarget.reset();
    }
  
}
