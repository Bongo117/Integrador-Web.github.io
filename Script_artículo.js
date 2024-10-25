document.addEventListener('DOMContentLoaded', function () {
    const imagenesCarrusel = document.querySelector('.imagenescarru');
    const peliculas = document.querySelectorAll('.pelis');
    let indiceActual = 0;
    const totalPelis = peliculas.length;

    function actualizarCarrusel() {
        peliculas.forEach((peli, index) => {
            peli.style.opacity = '0'; 
            if (index === indiceActual) {
                peli.classList.add('activo'); 
                peli.style.opacity = '1'; 
                peli.style.transform = 'translateX(0)'; 
            } else if (index < indiceActual) {
                peli.style.transform = 'translateX(-100%)'; 
            } else {
                peli.style.transform = 'translateX(100%)'; 
            }
        });
        const ancho = peliculas[0].clientWidth;
        imagenesCarrusel.style.transform = `translateX(-${indiceActual * ancho}px)`;
    }

    document.getElementById('siguiente').addEventListener('click', () => {
        indiceActual = (indiceActual + 1) % totalPelis; 
        actualizarCarrusel();
    });

    document.getElementById('anterior').addEventListener('click', () => {
        indiceActual = (indiceActual - 1 + totalPelis) % totalPelis; 
        actualizarCarrusel();
    });

    actualizarCarrusel();
});
