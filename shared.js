
var backdrop = document.querySelector('.backdrop');
var navBurger = document.querySelector('.nav-burger');
var mobileNav = document.querySelector('.mobile-nav');
var bodyScroll = document.querySelector('body');

var headerEl = document.querySelector('.main-header__buttonANDlogo');

navBurger.addEventListener('click', mainToggles);

backdrop.addEventListener('click', mainToggles);

function mainToggles() {
    window.scrollTo(0,0);
    navBurger.classList.toggle('nav-burger-active');
    mobileNav.classList.toggle('mobile-nav-active');
    backdrop.classList.toggle('backdrop-active');
    bodyScroll.classList.toggle('stop-scrolling');
    logo.classList.toggle('logo-disappearo');
}

var headerSize = headerEl.offsetHeight;
