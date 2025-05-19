// TAB функционал
function openService(evt, serviceName) {
  // Бүх табуудыг хаах
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  // Бүх таб товчнуудын идэвхтэй статусыг хасах
  const tablinks = document.getElementsByClassName("tablinks");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  
  // Одоогийн табыг харуулах
  document.getElementById(serviceName).style.display = "block";
  // Товчны идэвхтэй статус өгөх
  evt.currentTarget.classList.add("active");
}

// Эхний табыг ачаалгын үед идэвхжүүлэх
document.addEventListener("DOMContentLoaded", () => {
  const firstTab = document.querySelector(".tablinks");
  if (firstTab) firstTab.click();
});

// CAROUSEL (Үнийн жагсаалт) функц
let carouselIndex = 0;

function showCarouselSlide(n) {
  const slides = document.getElementsByClassName("carousel-item");
  if (slides.length === 0) return;
  
  if (n >= slides.length) {
    carouselIndex = 0;
  } else if (n < 0) {
    carouselIndex = slides.length - 1;
  } else {
    carouselIndex = n;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[carouselIndex].style.display = "block";
}

function plusCarouselSlide(n) {
  showCarouselSlide(carouselIndex + n);
}

// Эхний carousel зураг харуулах
document.addEventListener("DOMContentLoaded", () => {
  showCarouselSlide(carouselIndex);
});

// SLIDE (Галерейн слайдер) функц
let slideIndex = 0;

function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;
  
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = n;
  }
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

function plusSlides(n) {
  showSlides(slideIndex + n);
}

// Эхний slide-г харуулах
document.addEventListener("DOMContentLoaded", () => {
  showSlides(slideIndex);
});

// Холбоо барих маягт илгээх (Амжилтын мессеж харуулах)
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form && successMessage) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Энд серверт илгээх код нэмэх боломжтой
    successMessage.style.display = 'block';
    form.reset();
    
    // 3 секундын дараа амжилтын мессежийг хаах
    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 3000);
  });
}
