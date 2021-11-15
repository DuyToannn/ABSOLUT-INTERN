var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    900: {
      slidesPerView: 6,
      spaceBetween: 40
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  
  }
});
  
$('.moreless-button').click(function() {
  $('.moretext').toggle();
  if ($('.moreless-button').text() == "SHOW MORE") {
    $(this).text("SHOW LESS")
  } else {
    $(this).text("SHOW MORE")
  }
});