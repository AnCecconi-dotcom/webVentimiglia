function validateCaptcha() {
    var response = grecaptcha.getResponse();
    if (response.length === 0) {
        alert("Por favor, completa el CAPTCHA.");
        return false; 
    }
    return true;
}

function allowOnlyNumbers(event) {
    const characterCode = (event.which) ? event.which : event.keyCode;
    // Si el caracter ingresado es un numero o la tecla de borrar devuelve true
    if ((characterCode >= 48 && characterCode <= 57) || characterCode === 8) {
        return true;
    }
    return false; //sino false y no permite la entrada
}


function validateContactForm() {
    const emailInputValue = document.getElementById("email").value;
    if (!emailInputValue.includes("@")) {
        alert("Por favor, ingresa un correo electrónico válido");
        return false; // Detiene el envío del formulario
    }

    const phoneInputValue = document.getElementById("phone").value;
    if (!/^\d+$/.test(phoneInputValue)) {
        alert("El número de contacto debe contener solo números");
        return false; // Detiene el envío del formulario
    }

    return true; // Permite el envío del formulario
}
window.onload = function() {
    document.getElementById("form").reset();
}