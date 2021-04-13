const form = document.querySelector('form');
const username = document.querySelector('username');
const email = document.querySelector('email');
const password = document.querySelector('password');
const password2 = document.querySelector('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.nodeValue.trim();
    const emailValue = email.nodeValue.trim();
    const passwordValue = password.nodeValue.trim();
    const password2nameValue = password2.nodeValue.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'user cannot be blank');
    } else {
        setSuccessFor(username);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement; 
    const small = formControl.querySelector('small');

    // add error message inside small
    small.innerText = message;
} 