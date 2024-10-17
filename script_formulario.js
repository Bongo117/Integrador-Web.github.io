// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const formMensaje = document.getElementById('formMensaje');

    if (nombre === "" || email === "" || mensaje === "") {
        formMensaje.textContent = "Por favor, rellena todos los campos.";
        formMensaje.style.color = "rojo";
    } else {
        formMensaje.textContent = "Mensaje enviado con éxito.";
        formMensaje.style.color = "verde";
        // Aquí puedes hacer una llamada AJAX o resetear el formulario
        document.getElementById('contactForm').reset();
    }
});
