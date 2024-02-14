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


var lastClickedElement = document.querySelector('.clicked');

    function openCity(navsName, clickedElement) {
      // Eğer bir linkse tıklandığında sayfa başına atlamayı engelle
      event.preventDefault();

      // Eski tıklanan öğenin rengini sıfırla
      if (lastClickedElement !== null) {
        lastClickedElement.classList.remove("clicked");
      }

      // Yeni tıklanan öğenin rengini değiştir
      clickedElement.classList.add("clicked");

      // LastClickedElement'i güncelle
      lastClickedElement = clickedElement;

      // Diğer tablardaki içerikleri gizle
      var tabs = document.getElementsByClassName("tabs");
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }

      // Belirtilen tabı göster
      document.getElementById(navsName).style.display = "block";
    }