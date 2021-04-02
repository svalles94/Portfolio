"use strict";

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var circle = document.querySelector('.circle');
var boxBlue = document.querySelector('.blue');
var boxRed = document.querySelector('.red');
var boxYellow = document.querySelector('.yellow');
var home = document.querySelector('.home'); //Hamburger Menu 

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
}); // HOVER EFFECT FOR SERVICES MENU
//blue circle hover effect

boxBlue.addEventListener('mouseenter', function () {
  circle.style.backgroundColor = "#52b8ff";
  home.style.backgroundColor = "#52b8ff";
});
boxBlue.addEventListener('mouseleave', function () {
  circle.style.backgroundColor = "#d0efff";
  home.style.backgroundColor = "#d0efff";
}); //red circle hover effect

boxRed.addEventListener('mouseenter', function () {
  circle.style.backgroundColor = "#ff5233";
  home.style.backgroundColor = "#ff5233";
});
boxRed.addEventListener('mouseleave', function () {
  circle.style.backgroundColor = "#d0efff";
  home.style.backgroundColor = "#d0efff";
}); // yellow circle hover effect

boxYellow.addEventListener('mouseenter', function () {
  circle.style.backgroundColor = "#ffc853";
  home.style.backgroundColor = "#ffc853";
});
boxYellow.addEventListener('mouseleave', function () {
  circle.style.backgroundColor = "#d0efff";
  home.style.backgroundColor = "#d0efff";
}); //GSAP

window.onload = function () {
  var tl = gsap.timeline();
  var tl2 = gsap.timeline({
    delay: 2,
    repeat: -1,
    repeatDelay: 1.5
  });
  tl.fromTo('.logo', {
    x: -200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1
  }).fromTo('.linkys', {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1
  }, "-=.9").fromTo('.intro', {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1
  }, "-=2").fromTo('.intro2', {
    x: 200,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    delay: .5,
    duration: 1
  }, "-=1");
  tl2.to('.fa-html5', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-html5', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-css3-alt', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-css3-alt', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-wordpress', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-wordpress', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-js-square', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-js-square', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-react', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-react', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-php', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-php', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-sass', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-sass', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-laravel', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-laravel', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.fa-node', {
    y: -30,
    duration: .5,
    ease: 'back'
  }).to('.fa-node', {
    y: 0,
    duration: .5,
    ease: 'back'
  }).to('.images', {
    x: -75,
    duration: .3,
    ease: 'power1'
  }).to('.images', {
    x: 75,
    duration: .3,
    ease: 'power1'
  }).to('.images', {
    x: 0,
    duration: .3,
    ease: 'back'
  });
};