document.getElementById("Contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();

    // Obtener valores de los campos
    let name = document.getElementById("nombre");
    let email = document.getElementById("email");
    let message = document.getElementById("mensaje");

    let valid = true;

    // Validar nombre
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

    // Si todo es válido, mostrar mensaje y datos enviados
    if (valid) {
        // Mostrar mensaje de éxito con estilo mejorado
        document.getElementById("Contactomsj").innerHTML = `<p style=" font-weight: bold; text-shadow: 3px 3px 10px black;">Formulario enviado correctamente</p>`;
        
        // Crear y mostrar los datos enviados
        let datosEnviadosHTML = `
        <div style="background-color: black; color: #FFD700; border: 2px solid #FFD700; padding: 15px; border-radius: 10px; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);">
            <h3 style="text-align: center; color: #FFD700; font-family: 'Starjedi', sans-serif;">Datos enviados:</h3>
            <p><strong>Nombre:</strong> <span style="font-family: Arial, sans-serif;;">${name.value}</span></p>
            <p><strong>Correo Electrónico:</strong> <span style="font-family: Arial, sans-serif;">${email.value}</span></p>
            <p><strong>Mensaje:</strong> <span style="font-family: Arial, sans-serif;">${message.value}</span></p>
        </div>
    `;
    
        
        // Insertar los datos enviados en el contenedor
        document.getElementById("datosEnviados").innerHTML = datosEnviadosHTML;

        // Limpiar los campos del formulario
        name.value = "";
        email.value = "";
        message.value = "";
    }
});

// Función para mostrar errores debajo del campo correspondiente
function mostrarError(element, mensaje) {
    element.insertAdjacentHTML('afterend', `<p class="mensajedeerror" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

// Función para limpiar errores anteriores
function limpiarErrores() {
    let errorMessages = document.querySelectorAll(".mensajedeerror");
    errorMessages.forEach(function(msg) {
        msg.remove();
    });
}
