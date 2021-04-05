"use strict";

var hamburger = document.querySelector('.hamburger');
var navLinks = document.querySelector('.nav-links');
var links = document.querySelectorAll('.nav-links li');
var body = document.getElementsByTagName("BODY")[0]; //Hamburger Menu 

hamburger.addEventListener('click', function () {
  navLinks.classList.toggle("open");
  links.forEach(function (link) {
    link.classList.toggle("fade");
  });
  body.classList.toggle("fixed-position");
}); //animations

window.onload = function () {
  var tl = gsap.timeline();
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
};