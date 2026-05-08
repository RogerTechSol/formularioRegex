CONST = USERNAME_REGEX = /^[a-zA-Z0-9]+$/;
CONST = PASWORD_REGEX = /^[a-zA-Z0-9]+$/;
CONST = EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
CONST = PHONE_REGEX = /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;





const countries = document.querySelector("#countries");
const userName = document.querySelector("#username");
const paword = document.querySelector("#password");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");



let userNameValidation = false;
let passwordValidation = false;
let emailValidation = false;
let phoneValidation = false;





// MOSTRAR SOLO EL NOMBRE EN LA LISTA DE PAISES
[...countries].forEach(option => {
    option.innerHtml = option.innerHTML.split("(")[0];
    console.log(option);
});



userName.addEventListener("input", event => {
    userNameValidation = USERNAME_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(userNameValidation);
    if (userNameValidation) {
        userName.classList.add("correct");
        else {
            userName.classList.add("incorrect");
        }
    }
});

paword.addEventListener("input", event => {
    passwordValidation = PASWORD_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(passwordValidation);
});

email.addEventListener("input", event => {
    emailValidation = EMAIL_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(emailValidation);
});

phone.addEventListener("input", event => {
    phoneValidation = PHONE_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(phoneValidation);

});













