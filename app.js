'use strict';

const hero = document.querySelector('.hero');
const heroImg = document.querySelector('.hero img');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-item a');
const navItems2 = document.querySelectorAll('.nav-item');



const tl = gsap.timeline();

tl.fromTo(hero, {height: "0%"}, {height: "80%", duration:0.7, ease: "power2.inOut"})
.fromTo(hero, {width: "100%"}, {width: "80%", duration:1.2, ease: "power2.inOut"})
.from(heroImg, {boxShadow: "0px 0px #ffffff", duration: 0.7}, "-=0.7")
.fromTo(slider, {x: "-100%"}, {x:"0%", duration: 1.2, ease: "power2.inOut"}, "-=1.2")
.fromTo(logo, {opacity:0, x: 30}, {opacity: 1, x: 0, duration: 0.5}, "-=0.5")
.fromTo(hamburger, {opacity:0, x: 30}, {opacity: 1, x: 0, duration: 0.5}, "-=0.5")
.fromTo(headline, {opacity:0, x: 30}, {opacity: 1, x: 0, duration: 0.5}, "-=0.5");


//animacion en mouserover
headline.addEventListener('mouseover', () => {
    gsap.to(headline, {x: 50, duration:1, ease: "power1.out"});
});

headline.addEventListener('mouseout', () => {
    gsap.to(headline, {x: 0, duration:1, ease: "power1.out"});
})


//agregar clase active a los links
for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener('click', function () {
      let current = document.querySelector('.active');
      current.classList.remove('active');
      this.classList.add('active');    
    });
}



//animacion de nav, links e icono de menu hamburguesa
let navAnimation = gsap.to(navLinks, {x: 0, y: 0, duration:1, ease: "power1.out", paused:true});

hamburger.addEventListener('click', () => {
    if(!navLinks.classList.contains('show-nav')){
        navAnimation.play();
        navLinks.classList.add('show-nav');
        let tl2 = gsap.timeline();
        tl2.to(".line2", {x: 8, duration:1, ease: "power1.out"})
        .to(".line3", {x: 22, duration:1, ease: "power1.out"}, "-=1")
        .fromTo(navItems2, {y: 200, opacity: 0}, {y:0, opacity: 1, duration: 2, ease: "back.inOut(1.7)", stagger: 0.1}, "-=1.5");
    } else {
        navAnimation.reverse();
        navLinks.classList.remove('show-nav');
        let tl3 = gsap.timeline();
        tl3.to(".line2", {x: 0, duration:1, ease: "power1.out"})
        .to(".line3", {x: 0, duration:1, ease: "power1.out"}, "-=1")
        .fromTo(navItems2, {y: 0, opacity: 1}, {y:200, opacity: 0, duration: 2, ease: "back.inOut(1.7)"}, "-=1.5");
    }
});




