const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.classList.add("active");
    });
  });

  cards.forEach((card) => {
    card.addEventListener('mouseout', () => {
      card.classList.remove("active");
    });
  });

  /**
   * Animation on scroll
   */
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });