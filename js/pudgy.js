const swiper = new Swiper('.swiper', {
    loop: true,
    autoheight: true,
    centeredSlides: true,
    grabCursor: true,
    slidesPerView: 1,
    breakpoints: {
        // when window width is >= 576px
        576: {
            slidesPerView: 3
        }
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        depth: 400,
        slideShadows: false,
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
    }
  });