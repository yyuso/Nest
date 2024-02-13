anime({
  targets: '.anime',
  translateY:250
});
var mainSlider = new Swiper(".mainslider", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var productsSlider = new Swiper(".productsSlider", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1920: {
      slidesPerView: 10,
      spaceBetween: 2
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 2
    },
  }
});
