document.getElementById("Contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();

    // Obtener valores de los campos
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email"); // Cambiado a 'correo'
    let telefono = document.getElementById("telefono"); // Campo para el teléfono

    let esValido = true; // Cambiado a 'esValido'

    // Validar nombre
    if (nombre.value.trim() === "") {
        esValido = false;
        nombre.style.border = "2px solid red"; 
        mostrarError(nombre, "El nombre es obligatorio");
    } else if (nombre.value.trim().length < 3) {
        esValido = false;
        nombre.style.border = "2px solid red";
        mostrarError(nombre, "El nombre debe tener al menos 3 caracteres");
    } else {
        nombre.style.border = ""; 
    }

    // Validar correo
    if (correo.value.trim() === "") {
        esValido = false;
        correo.style.border = "2px solid red"; 
        mostrarError(correo, "El correo electrónico es obligatorio");
    } else {
        let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Cambiado a 'patronCorreo'
        if (!patronCorreo.test(correo.value.trim())) {
            esValido = false;
            correo.style.border = "2px solid red"; 
            mostrarError(correo, "Por favor, ingresa un correo electrónico válido");
        } else {
            correo.style.border = ""; 
        }
    }

    // Validar número de teléfono
    if (telefono.value.trim() === "") {
        esValido = false;
        telefono.style.border = "2px solid red"; 
        mostrarError(telefono, "El número de teléfono es obligatorio");
    } else {
        let patronTelefono = /^[0-9]+$/; // Permite solo dígitos
        if (!patronTelefono.test(telefono.value.trim())) {
            esValido = false;
            telefono.style.border = "2px solid red"; 
            mostrarError(telefono, "Por favor, ingresa un número de teléfono válido (solo numeros)");
        } else if (telefono.value.trim().length < 10) {
            esValido = false;
            telefono.style.border = "2px solid red"; 
            mostrarError(telefono, "El número de teléfono debe tener al menos 10 dígitos");
        } else {
            telefono.style.border = ""; 
        }
    }

    // Si todo es válido, mostrar mensaje y datos enviados
    if (esValido) {
        // Mostrar mensaje de éxito con estilo mejorado
        document.getElementById("Contactomsj").innerHTML = `<p style="font-weight: bold; text-shadow: 3px 3px 10px black;">Formulario enviado correctamente</p>`;
        
        // Crear y mostrar los datos enviados
        let datosEnviadosHTML = `
        <div style="background-color: black; color: #FFD700; border: 2px solid #FFD700; padding: 15px; border-radius: 10px; box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.7);">
            <h3 style="text-align: center; color: #FFD700; font-family: 'Starjedi', sans-serif;">Datos enviados:</h3>
            <p><strong>Nombre:</strong> <span style="font-family: Arial, sans-serif;">${nombre.value}</span></p>
            <p><strong>Correo Electrónico:</strong> <span style="font-family: Arial, sans-serif;">${correo.value}</span></p>
            <p><strong>Teléfono:</strong> <span style="font-family: Arial, sans-serif;">${telefono.value}</span></p>
        </div>
        `;
        
        // Insertar los datos enviados en el contenedor
        document.getElementById("datosEnviados").innerHTML = datosEnviadosHTML;

        // Limpiar los campos del formulario
        nombre.value = "";
        correo.value = ""; // Limpiar el campo de correo
        telefono.value = ""; // Limpiar el campo de teléfono
    }
});

// Función para mostrar errores debajo del campo correspondiente
function mostrarError(elemento, mensaje) { // Cambiado a 'elemento'
    elemento.insertAdjacentHTML('afterend', `<p class="mensajedeerror" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

// Función para limpiar errores anteriores
function limpiarErrores() {
    let mensajesDeError = document.querySelectorAll(".mensajedeerror"); // Cambiado a 'mensajesDeError'
    mensajesDeError.forEach(function(msg) {
        msg.remove();
    });
}
