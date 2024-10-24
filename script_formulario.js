document.getElementById("Contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();

  
    let name = document.getElementById("nombre");
    let email = document.getElementById("email");
    let message = document.getElementById("mensaje");

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

    if (valid) {
        document.getElementById("Contactomsj").innerHTML = "<p style='color:green;'>Formulario enviado correctamente</p>";
    }
});
formMessage.style.display = "block";  // Asegura que el mensaje sea visible


function mostrarError(element, mensaje) {
    element.insertAdjacentHTML('afterend', `<p class="mensajedeerror" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

function limpiarErrores() {
    let errorMessages = document.querySelectorAll(".mensajedeerror");
    errorMessages.forEach(function(msg) {
        msg.remove();
    });
}
