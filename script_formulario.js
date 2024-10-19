document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes anteriores
    limpiarErrores();

    // Obtener valores de los campos
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let message = document.getElementById("message");

    let valid = true;

    // Validar nombre (mínimo 3 caracteres)
    if (name.value.trim().length < 3) {
        valid = false;
        name.style.border = "2px solid red"; // Campo en rojo
        mostrarError(name, "El nombre debe tener al menos 3 caracteres");
    } else {
        name.style.border = ""; // Restablecer estilo
    }

    // Validar email (formato correcto)
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value.trim())) {
        valid = false;
        email.style.border = "2px solid red"; // Campo en rojo
        mostrarError(email, "Por favor, ingresa un correo electrónico válido");
    } else {
        email.style.border = ""; // Restablecer estilo
    }

    // Validar mensaje (mínimo 10 caracteres)
    if (message.value.trim().length < 10) {
        valid = false;
        message.style.border = "2px solid red"; // Campo en rojo
        mostrarError(message, "El mensaje debe tener al menos 10 caracteres");
    } else {
        message.style.border = ""; // Restablecer estilo
    }

    // Si todo es válido, se envía el formulario
    if (valid) {
        document.getElementById("formMessage").innerHTML = "<p style='color:green;'>Formulario enviado correctamente</p>";
        // Aquí puedes agregar el código para enviar el formulario
        // this.submit(); // Descomentar para enviar el formulario
    }
});

// Función para mostrar errores debajo del campo correspondiente
function mostrarError(element, mensaje) {
    element.insertAdjacentHTML('afterend', `<p class="error-message" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

// Función para limpiar errores anteriores
function limpiarErrores() {
    // Eliminar los mensajes de error y restaurar estilos de borde
    let errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(function(msg) {
        msg.remove();
    });
}
