document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Función para mostrar una imagen específica
    function showImage(index) {
        items.forEach(item => item.classList.remove('active'));
        items[index].classList.add('active');
    }

    // Función para ir a la siguiente imagen
    function nextImage() {
        currentIndex++;
        if (currentIndex >= items.length) {
            currentIndex = 0;
        }
        showImage(currentIndex);
    }

    // Función para ir a la imagen anterior
    function prevImage() {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = items.length - 1;
        }
        showImage(currentIndex);
    }

    // Eventos de click para los botones
    nextBtn.addEventListener('click', nextImage);
    prevBtn.addEventListener('click', prevImage);
});
