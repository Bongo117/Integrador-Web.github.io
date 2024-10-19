

document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const items = Array.from(document.querySelectorAll('.carousel-item'));
    let currentIndex = 0;
    const totalItems = items.length;
    const intervalTime = 3000; // Cambiar imagen cada 3 segundos
    let autoplay;

    // Función para actualizar el carrusel
    function updateCarousel() {
        const width = items[0].clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    // Función para iniciar el autoplay
    function startAutoplay() {
        autoplay = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalItems;
            updateCarousel();
        }, intervalTime);
    }

    // Iniciar el carrusel mostrando la primera imagen
    updateCarousel();

    // Iniciar el autoplay
    startAutoplay();
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
    document.body.style.backgroundImage = images[currentIndex];

    currentIndex = (currentIndex + 1) % images.length; // Volver al inicio al llegar al final
}

// Cambiar el fondo cada 5 segundos 
setInterval(changeBackground, 5000);
changeBackground();


let i = 0;
let imagenes = document.querySelectorAll(".fondo");
let textos = document.querySelectorAll(".pack-texto");

console.log(imagenes)
console.log(textos)

let total = imagenes.length;
let intervalo;

document.addEventListener("DOMContentLoaded", () => {
    imagenes[0].classList.add("activo");
    textos[0].classList.add("activo");
});

function imagenSiguiente() {
    imagenes[i].classList.remove("activo");
    textos[i].classList.remove("activo");
    i = (i+1) % total;
    imagenes[i].classList.add("activo");
    textos[i].classList.add("activo");
    clearInterval(intervalo);
    intervalo = setInterval(imagenSiguiente, 6000);
}

intervalo = setInterval(imagenSiguiente, 6000);
