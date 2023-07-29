import '/js/swiper';

// Top button
window.onscroll = () => {
    toggleTopButton();
  }
  function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
  function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
      document.getElementById('back-to-up').classList.remove('d-none');
    } else {
      document.getElementById('back-to-up').classList.add('d-none');
    }
  }

/* Swiper slider */

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

