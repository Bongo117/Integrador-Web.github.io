document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes anteriores
    limpiarErrores();

    // Obtener valores de los campos
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let valid = true;
    
    if (name.value.trim() === "") {
        valid = false;
        name.style.border = "2px solid red"; 
        mostrarError(name, "El nombre es obligatorio");
    } else if (name.value.trim().length < 3) {
        valid = false;
        name.style.border = "2px solid red";
        mostrarError(name, "El nombre debe tener al menos 3 caracteres");
    } else {
        name.style.border = ""; 
    }

    // Validar email
    if (email.value.trim() === "") {
        valid = false;
        email.style.border = "2px solid red"; 
        mostrarError(email, "El correo electrónico es obligatorio");
    } else {
        let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email.value.trim())) {
            valid = false;
            email.style.border = "2px solid red"; 
            mostrarError(email, "Por favor, ingresa un correo electrónico válido");
        } else {
            email.style.border = ""; 
        }
    }

    // Validar mensaje
    if (message.value.trim() === "") {
        valid = false;
        message.style.border = "2px solid red"; 
        mostrarError(message, "El mensaje es obligatorio");
    } else if (message.value.trim().length < 10) {
        valid = false;
        message.style.border = "2px solid red"; 
        mostrarError(message, "El mensaje debe tener al menos 10 caracteres");
    } else {
        message.style.border = ""; 
    }

    // Si todo es válido, se envía el formulario
    if (valid) {
        document.getElementById("formMessage").innerHTML = "<p style='color:green;'>Formulario enviado correctamente</p>";
    }
});

const images = [

    'url("img/fondo2.jpg")',
    'url("img/fondo3.jpg")',
    'url("img/fondo4.jpg")',
    'url("img/fondo5.jpg")',
    
];

let currentIndex = 0;

// Función para cambiar el fondo
function changeBackground() {
    // Cambiar el fondo del body
    document.body.style.backgroundImage = images[currentIndex];

    currentIndex = (currentIndex + 1) % images.length; // Volver al inicio al llegar al final
}

// Cambiar el fondo cada 5 segundos 
setInterval(changeBackground, 5000);

// Cambiar el fondo al cargar la página por primera vez
changeBackground();

// Función para mostrar errores debajo del campo correspondiente
function mostrarError(element, mensaje) {
    element.insertAdjacentHTML('afterend', `<p class="error-message" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

// Función para limpiar errores anteriores
function limpiarErrores() {
    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(msg) {
        msg.remove();
    });
}
