document.addEventListener('DOMContentLoaded', function () {
    const carouselImages = document.querySelector('.carousel-images');
    const pelis = document.querySelectorAll('.pelis, .pelis-2, .pelis-3');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    let currentIndex = 0;

    
    prevButton.id = 'prev';
    prevButton.innerHTML = '&#10094;';
    nextButton.id = 'next';
    nextButton.innerHTML = '&#10095;';
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);

  
    function updateCarousel() {
        const width = pelis[0].clientWidth;
        carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
    }

   
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : pelis.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < pelis.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    
    window.addEventListener('resize', updateCarousel);

   
    updateCarousel();
});
