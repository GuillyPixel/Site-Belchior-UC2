document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.carousel-slide');
  const slides = document.querySelectorAll('.carousel-item');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const intervalTime = 3000; // Tempo entre as trocas de imagem (em ms)
  let slideInterval;

  function goToSlide(index) {
      slide.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[index].classList.add('active');
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      goToSlide(currentIndex);
  }

  function startCarousel() {
      slideInterval = setInterval(nextSlide, intervalTime);
  }

  function stopCarousel() {
      clearInterval(slideInterval);
  }

  goToSlide(currentIndex);
  startCarousel();

  // Optional: Add event listeners for dots if you want to make them clickable
  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          currentIndex = index;
          goToSlide(currentIndex);
          stopCarousel();
          startCarousel();
      });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const sideMenu = document.getElementById('side-menu');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideMenu.classList.add('open');
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('open');
    });

    // Fechar o menu ao clicar fora dele (opcional)
    document.addEventListener('click', (event) => {
        if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
            sideMenu.classList.remove('open');
        }
    });
});
