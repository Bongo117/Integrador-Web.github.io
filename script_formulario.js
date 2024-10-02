// scripts.js

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar envío por defecto

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.style.color = "green";
        // Aquí puedes hacer una llamada AJAX o resetear el formulario
        document.getElementById('contactForm').reset();
    }
});
