document.getElementById("Contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    limpiarErrores();
    let nombre = document.getElementById("nombre");
    let correo = document.getElementById("email");
    let telefono = document.getElementById("telefono");

    let esValido = true; 

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

    if (correo.value.trim() === "") {
        esValido = false;
        correo.style.border = "2px solid red"; 
        mostrarError(correo, "El correo electrónico es obligatorio");
    } else {
        let patronCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
        if (!patronCorreo.test(correo.value.trim())) {
            esValido = false;
            correo.style.border = "2px solid red"; 
            mostrarError(correo, "Por favor, ingresa un correo electrónico válido");
        } else {
            correo.style.border = ""; 
        }
    }

    if (telefono.value.trim() === "") {
        esValido = false;
        telefono.style.border = "2px solid red"; 
        mostrarError(telefono, "El número de teléfono es obligatorio");
    } else {
        let patronTelefono = /^[0-9]+$/; 
        if (!patronTelefono.test(telefono.value.trim())) {
            esValido = false;
            telefono.style.border = "2px solid red"; 
            mostrarError(telefono, "Por favor, ingresa un número de teléfono válido (solo números)");
        } else if (telefono.value.trim().length < 10) {
            esValido = false;
            telefono.style.border = "2px solid red"; 
            mostrarError(telefono, "El número de teléfono debe tener al menos 10 dígitos");
        } else {
            telefono.style.border = ""; 
        }
    }

    if (esValido) {
        mostrarFeedback(nombre, correo, telefono);
        limpiarFormulario(nombre, correo, telefono);
        document.getElementById("datosenviados").style.display = "block"; 
    } else {
        document.getElementById("datosenviados").style.display = "none"; 
    }
});

function mostrarError(elemento, mensaje) { 
    elemento.insertAdjacentHTML('afterend', `<p class="mensajedeerror" style="color: red; font-size: 12px;">${mensaje}</p>`);
}

function limpiarErrores() {
    document.querySelectorAll(".mensajedeerror").forEach(msg => msg.remove());
}

function mostrarFeedback(nombre, correo, telefono) {
    document.getElementById("feedbackNombre").innerText = nombre.value; 
    document.getElementById("feedbackEmail").innerText = correo.value; 
    document.getElementById("feedbackTel").innerText = telefono.value; 
}

function limpiarFormulario(nombre, correo, telefono) {
    nombre.value = "";
    correo.value = ""; 
    telefono.value = ""; 
}
