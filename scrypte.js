const slides = document.querySelectorAll('.slides img');
let current = 0;

function changeSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(changeSlide, 5000);