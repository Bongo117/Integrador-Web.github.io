document.addEventListener("DOMContentLoaded", function() {
    const images = [
        'url("img/espacio.png")',
        'url("img/1.jpg")',
        'url("img/2.jpg")',
        'url("img/4.jpg")',
        'url("img/5.jpg")',
        'url("img/8.jpg")',
        'url("img/10.jpg")',
        'url("img/Halcón milenario.png")',
        'url("img/fondo1.jpeg")',
    ];

    let currentIndex = 0;

    // Función para cambiar el fondo
    function changeBackground() {
        // Cambiar el fondo del body
        document.body.style.backgroundImage = images[currentIndex];

        currentIndex = (currentIndex + 1) % images.length; // Volver al inicio al llegar al final
        console.log("Cambiando fondo a:", images[currentIndex]);
    }

    // Cambiar el fondo cada 5 segundos 
    setInterval(changeBackground, 3000);

    // Cambiar el fondo al cargar la página por primera vez
    changeBackground();
});
