document.addEventListener("DOMContentLoaded", function () {
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
  function changeBackground() {
    document.body.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    console.log("Cambiando fondo a:", images[currentIndex]);
  }
  setInterval(changeBackground, 3000);
  changeBackground();
});
const imagenesRodajes = [
  "img/rodaje5.jpg.jfif",
  "img/rodaje1.jpg.jfif",
  "img/rodaje2.jpg.jfif",
  "img/rodaje3.jpg.jfif",
  "img/rodaje4.jpg.jfif"
  
];

let indiceActual = 0;
const carrusel = document.getElementById('carrusel');

// Función para mostrar la imagen actual
function mostrarImagen() {
  carrusel.innerHTML = `<img src="${imagenesRodajes[indiceActual]}" alt="Imagen de rodaje">`;
}

// Función para avanzar a la siguiente imagen
function siguienteImagen() {
  indiceActual = (indiceActual + 1) % imagenesRodajes.length;
  mostrarImagen();
}

// Función para retroceder a la imagen anterior
function anteriorImagen() {
  indiceActual = (indiceActual - 1 + imagenesRodajes.length) % imagenesRodajes.length;
  mostrarImagen();
}

// Event listeners para los botones
document.getElementById('siguiente').addEventListener('click', siguienteImagen);
document.getElementById('anterior').addEventListener('click', anteriorImagen);

// Mostrar la primera imagen al cargar la página
mostrarImagen();