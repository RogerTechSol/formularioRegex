// Ajustadas expresiones para cumplir con los mínimos y máximos de tus textos
const USERNAME_REGEX = /^[a-zA-Z0-9]{6,12}$/;
const PASWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,10}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const PHONE_REGEX = /^\d+$/; // Solo debe contener números

const countries = document.querySelector("#countries");
const userName = document.querySelector("#username");
const paword = document.querySelector("#password");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const phoneCode = document.querySelector('#phone-code');
const confirmPassword = document.querySelector('#confirm-password');
const formBtn = document.querySelector('#form-btn');
const form = document.querySelector('#myForm');

let userNameValidation = false;
let passwordValidation = false;
let emailValidation = false;
let phoneValidation = false;
let confirmValidationPassword = false;
let countriesValidation = false;

// MOSTRAR SOLO EL NOMBRE EN LA LISTA DE PAISES (Corregido innerHTML)
[...countries].forEach(option => {
    if (option.value !== "") {
        option.innerHTML = option.innerHTML.split("(")[0].trim();
    }
});

// TU FUNCIÓN ORIGINAL (Protegida de errores si element o information faltan)
const validation = (event, validationResult, element) => {
    // Busca el párrafo de información dentro del mismo contenedor
    const information = event.target.parentElement.querySelector('.information') || 
                        event.target.parentElement.parentElement.querySelector('.information');
    
    // Evalúa si el formulario completo es válido para activar el botón
    formBtn.disabled = !userNameValidation || !passwordValidation || !emailValidation || !phoneValidation || !confirmValidationPassword || !countriesValidation;

    if (element) {
        // 1er condicional es para validar la expresion regular.
        if (validationResult) {
            element.classList.add("correct");
            element.classList.remove("incorrect");
            if (information) information.classList.remove('show-information');
        } else {
            element.classList.remove("correct");
            element.classList.add("incorrect");
            if (information) information.classList.add('show-information');
        }

        // 2do condicional es para evaluar si el input esta vacio y quitar los colores.
        if (event.target.value === "") {
            element.classList.remove("incorrect", "correct");
            if (information) information.classList.remove('show-information');
        }
    }
};

userName.addEventListener("input", event => {
    userNameValidation = USERNAME_REGEX.test(event.target.value);
    validation(event, userNameValidation, userName);
});

email.addEventListener("input", event => {
    emailValidation = EMAIL_REGEX.test(event.target.value);
    validation(event, emailValidation, email);
});

countries.addEventListener("input", event => {
    const optionSelected = [...event.target.children].find(options => options.selected);
    phoneCode.innerHTML = `+${optionSelected.value}`;
    countriesValidation = optionSelected.value !== '';
    
    if (countriesValidation) {
        countries.classList.add('correct');
        countries.classList.remove('incorrect');
    } else {
        countries.classList.remove('correct');
    }
    validation(event, countriesValidation, null);
});

phone.addEventListener("input", event => {
    phoneValidation = PHONE_REGEX.test(event.target.value);
    validation(event, phoneValidation, phone);
});

paword.addEventListener("input", event => {
    passwordValidation = PASWORD_REGEX.test(event.target.value);
    validation(event, passwordValidation, paword);
});

confirmPassword.addEventListener("input", event => {
    confirmValidationPassword = (paword.value === event.target.value && event.target.value !== "");
    validation(event, confirmValidationPassword, confirmPassword);
});


form.addEventListener('submit', event => {
    // 1. Detenemos la recarga de la página (¡Esto está perfecto!)
    event.preventDefault(); 
    
    // 2. Capturamos los datos
    const usero = {
        userName: userName.value,
        email: email.value,
        phone: `${phoneCode.innerHTML} ${phone.value}`, 
        paword: paword.value,
    };
    
    // 3. Mostramos una alerta visual en pantalla para comprobar que sí funciona
    alert(`¡Registro exitoso!\n\nUsuario: ${usero.userName}\nEmail: ${usero.email}\nTeléfono: ${usero.phone}`);
    
    // Lo seguimos imprimiendo en consola por si la tienes abierta
    console.log("Datos capturados:", usero);

    // 4. Limpiamos el formulario para que quede como nuevo
    form.reset();
    phoneCode.innerHTML = "+##";
    formBtn.disabled = true; // Volvemos a bloquear el botón
    
    // 5. Reiniciamos todas nuestras variables de validación
    userNameValidation = false;
    passwordValidation = false;
    emailValidation = false;
    phoneValidation = false;
    confirmValidationPassword = false;
    countriesValidation = false;
    
    // 6. Le quitamos los bordes verdes a todos los inputs
    [userName, email, phone, paword, confirmPassword, countries].forEach(el => {
        el.classList.remove('correct', 'incorrect');
    });
});





