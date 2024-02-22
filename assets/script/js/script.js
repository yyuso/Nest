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
  slidesPerView: 10,
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

var swiper = new Swiper(".mydailybestsells", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    1920: {
      slidesPerView: 4,
      spaceBetween: 2
    },
    333: {
      slidesPerView: 1,
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


function popup() {
  var div = document.getElementById("PopupMenu");
  if (div.classList.contains("active")) {
      div.classList.remove("active");
     var pass_icon = document.getElementsByClassName("fa-circle-xmark")[0];
      pass_icon.classList.remove("fa-circle-xmark");
      pass_icon.classList.add("fa-bars");
  } else {
      div.classList.add("active");
      
       var pass_icon = document.getElementsByClassName("fa-bars")[0];
      pass_icon.classList.remove("fa-bars");
      pass_icon.classList.add("fa-circle-xmark");
  }
}

    // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function producttopsection(){
  var div = document.getElementById("product-top-section");
  if (div.classList.contains("active")) {
              div.classList.remove("active");
          } else {
              div.classList.add("active");
          }
}

