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
