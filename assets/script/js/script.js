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

document.addEventListener("DOMContentLoaded", function () {
  var productTopSection = document.getElementById("product-top-section");

  // Menüyü başlangıçta açık yap
  productTopSection.classList.add("active");
});

function producttopsection() {
  var productTopSection = document.getElementById("product-top-section");

  // Menüyü açma ve kapama işlemini kontrol et
  productTopSection.classList.toggle("active");
}



const slider = document.querySelector('.slider-rage');
const selectedRange = document.getElementById('selectedRange');
const thumb1 = document.getElementById('thumb1');
const thumb2 = document.getElementById('thumb2');
const minPriceDisplay = document.getElementById('minPrice');
const maxPriceDisplay = document.getElementById('maxPrice');

maxPriceDisplay.style.color = "var(--primary-color2)";
minPriceDisplay.style.color = "var(--primary-color2)";

const updateSelectedRange = () => {
  const rect = slider.getBoundingClientRect();
  const minValue = (parseInt(thumb1.style.left) / 100) * rect.width || 0;
  const maxValue = (parseInt(thumb2.style.left) / 100) * rect.width || 0;

  selectedRange.style.left = thumb1.style.left;
  selectedRange.style.width = (parseInt(thumb2.style.left) - parseInt(thumb1.style.left)) + '%';

  minPriceDisplay.textContent = `$${minValue.toFixed(2)}`;
  maxPriceDisplay.textContent = `$${maxValue.toFixed(2)}`;
};

const moveThumb = (thumb, position) => {
  thumb.style.left = position + '%';
  updateSelectedRange();
};

const calculateThumbPosition = (clientX) => {
  const rect = slider.getBoundingClientRect();
  return (clientX - rect.left) / rect.width * 100;
};

let isDragging1 = false;
let isDragging2 = false;

thumb1.addEventListener('mousedown', () => { isDragging1 = true; });
thumb2.addEventListener('mousedown', () => { isDragging2 = true; });

document.addEventListener('mouseup', () => {
  isDragging1 = false;
  isDragging2 = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging1 || isDragging2) {
    const position = calculateThumbPosition(e.clientX);

    if (isDragging1) { moveThumb(thumb1, position); }
    if (isDragging2) { moveThumb(thumb2, position); }
  }
});

// Klavye ile slider'ı kontrol etme
document.addEventListener('keydown', (e) => {
  const step = 1; // Klavye ile hareket ettirme adımı

  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
    e.preventDefault(); // Klavye ok tuşlarının varsayılan davranışını engelle

    const currentPosition1 = parseFloat(thumb1.style.left) || 0;
    const currentPosition2 = parseFloat(thumb2.style.left) || 0;

    let newPosition1 = currentPosition1;
    let newPosition2 = currentPosition2;

    if (isDragging1) {
      newPosition1 = Math.max(0, Math.min(100, currentPosition1 + (e.key === 'ArrowLeft' ? -step : step)));
    } else if (isDragging2) {
      newPosition2 = Math.max(0, Math.min(100, currentPosition2 + (e.key === 'ArrowLeft' ? -step : step)));
    }

    moveThumb(thumb1, newPosition1);
    moveThumb(thumb2, newPosition2);
  }
});

window.addEventListener('resize', updateSelectedRange);
window.addEventListener('load', updateSelectedRange);