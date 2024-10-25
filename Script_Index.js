document.addEventListener("DOMContentLoaded", function () {
  const imagenesFondo = [
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
  let indiceActualFondo = 0;

  function cambiarFondo() {
    document.body.style.backgroundImage = imagenesFondo[indiceActualFondo];
    indiceActualFondo = (indiceActualFondo + 1) % imagenesFondo.length;
    console.log("Cambiando fondo a:", imagenesFondo[indiceActualFondo]);
  }

  setInterval(cambiarFondo, 3000);
  cambiarFondo();
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

function mostrarImagen() {
  carrusel.innerHTML = `<img src="${imagenesRodajes[indiceActual]}" alt="Imagen de rodaje">`;
}

function siguienteImagen() {
  indiceActual = (indiceActual + 1) % imagenesRodajes.length;
  mostrarImagen();
}

function anteriorImagen() {
  indiceActual = (indiceActual - 1 + imagenesRodajes.length) % imagenesRodajes.length;
  mostrarImagen();
}

document.getElementById('siguiente').addEventListener('click', siguienteImagen);
document.getElementById('anterior').addEventListener('click', anteriorImagen);
mostrarImagen();
