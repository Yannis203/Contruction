// Partie slide header photos 
const slides = document.querySelectorAll('.slides img');
let current = 0;

function changeSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
}

setInterval(changeSlide, 5000);
// partie menu hamburger 
const menuHumberger = document.querySelector('.menu-humberger');
const menu = document.querySelector('.onglets');
const liens = document.querySelector('.onglets a');
const body = document.querySelector('body');
menuHumberger.addEventListener('click', ()=>{
    menu.classList.toggle('mobile-menu');
    
})
liens.forEach(link => {
    link.addEventListener('click', ()=>{
        menu.classList.remove('mobile-menu');
    }
     )
}
 )