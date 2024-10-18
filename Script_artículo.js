document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.imagenescarru');
    const pelis = document.querySelectorAll('.pelis');
    let currentIndex = 0;
    const totalPelis = pelis.length;

    function updateCarousel() {
        pelis.forEach((peli, index) => {
            peli.style.opacity = '0'; 
            if (index === currentIndex) {
                peli.classList.add('activo'); 
                peli.style.opacity = '1'; 
                peli.style.transform = 'translateX(0)'; 
            } else if (index < currentIndex) {
                peli.style.transform = 'translateX(-100%)'; 
            } else {
                peli.style.transform = 'translateX(100%)'; 
            }
        });
        const width = pelis[0].clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    document.getElementById('siguiente').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalPelis; 
        updateCarousel();
    });

    document.getElementById('anterior').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalPelis) % totalPelis; 
        updateCarousel();
    });

    updateCarousel();
});

