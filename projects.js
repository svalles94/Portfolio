const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

//Hamburger Menu 
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    })
});


//animations

window.onload = function() {
    let tl = gsap.timeline();
    tl.fromTo('.logo', {
        x: -200,
        opacity: 0,
    
    }, {
        x:0,
        opacity:1,
        delay: .5,
        duration: 1, 
    })
    .fromTo('.linkys', {
        x: 200,
        opacity: 0,
    
    }, {
        x:0,
        opacity:1,
        delay: .5,
        duration: 1, 
    }, "-=.9")
    .fromTo('.intro', {
        x: 200,
        opacity: 0,
    
    }, {
        x:0,
        opacity:1,
        delay: .5,
        duration: 1, 
    }, "-=2")
    .fromTo('.intro2', {
        x: 200,
        opacity: 0,
    
    }, {
        x:0,
        opacity:1,
        delay: .5,
        duration: 1, 
    }, "-=1")}