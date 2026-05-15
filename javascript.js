const  USERNAME_REGEX = /^[a-zA-Z0-9].{6,12}$/;
const  PASWORD_REGEX = /^(?=.*[a-z])(?=.*[0-9]).{6,24}$/;
const  EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const  PHONE_REGEX = /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;





const countries = document.querySelector("#countries");
const userName = document.querySelector("#username");
const paword = document.querySelector("#password");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const phoneCode = document.querySelector('#phone-code')
const confirmPassword = document.querySelector('#confirm-password');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#myForm');

let userNameValidation = false;
let passwordValidation = false;
let emailValidation = false;
let phoneValidation = false;
let confirmValidationPassword = false;
let countriesValidation = false;




// MOSTRAR SOLO EL NOMBRE EN LA LISTA DE PAISES
[...countries].forEach(option => {
    option.innerHtml = option.innerHTML.split("(")[0];
    console.log(option);
});

const validation = (event,validation,element) => {
     const information = event.target.parentElement.children[1];
     formBtn.disabled = !userNameValidation || !passwordValidation || !emailValidation || !phoneValidation || !confirmValidationPassword || !countriesValidation ? true : false;
    // 1er condicional es para validar la expresion regular.
    if (validation) {
        element.classList.add("correct");
        element.classList.remove("incorrect");
        information.classList.remove('show-information');

    }else {
        element.classList.remove("correct");
        element.classList.add("incorrect")
        information.classList.add('show-information');
    }

    // 2do condicional es para evaluar si el input esta vacio y quitar los colores.

     if (event.target.value === ""){

       element.classList.remove("incorrect");
       information.classList.remove('show-information');
 }

};

userName.addEventListener("input", event => {
    userNameValidation = USERNAME_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(userNameValidation);
    validation(event,userNameValidation,userName);
    
});

email.addEventListener("input", event => {
    emailValidation = EMAIL_REGEX.test(event.target.value);
    console.log(event.target.value);
    console.log(emailValidation);
    validation(event,emailValidation,email)
 });


countries.addEventListener("input", event => {
    const optionSelected = [...event.target.children].find(options => options.selected);
    phoneCode.innerHTML = `+${optionSelected.value}`;
    countriesValidation = optionSelected.value === '' ? false : true;
    console.log(countriesValidation);
    countries.classList.add('correct')
    phoneCode.classList.add('correct');
    validation(event,null,null);

});

phone.addEventListener("input", event => {
    phoneValidation = PHONE_REGEX.test(event.target.value);
     const information = event.target.parentElement.parentElement.children[1];
    // 1er condicional es para validar la expresion regular.
    if (phoneValidation) {
        phone.classList.add("correct");
        phone.classList.remove("incorrect");
        information.classList.remove('show-information');

    }else {
        phone.classList.remove("correct");
        phone.classList.add("incorrect")
        information.classList.add('show-information');
    }

    // 2do condicional es para evaluar si el input esta vacio y quitar los colores.

     if (event.target.value === ""){

       element.classList.remove("incorrect");
       information.classList.remove('show-information');
 }



});

paword.addEventListener("input", event => {
    passwordValidation = PASWORD_REGEX.test(event.target.value);
    validation(event,passwordValidation,paword);
});

confirmPassword.addEventListener("input", event => {
    confirmValidationPassword = paword.value === event.target.value;
    validation(event,confirmValidationPassword,confirmPassword);
});


form.addEventListener ('Submit', event => {
    event.preventDefault();
    const usero = {
        userName: userName.value,
        email: email.value,
        phone:`${phoneCode.innetHTML} ${phone.value}`,
        paword: paword.value,

    }
    console.log(usero);
})












