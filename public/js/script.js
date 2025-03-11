// navbar fixed
window.onscroll = function() {
    const nav = document.querySelector('#nav');
    const fixedNav = nav.offsetTop;

    if(window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fixed');
    } else {
        nav.classList.remove('navbar-fixed');
    }
}

// hamburger menu
const hamburgerMenu = document.querySelector('#hamburger-menu');
const navMenu = document.querySelector('#nav-menu');

hamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('hamburger-active');
    if(hamburgerMenu.classList.contains('hamburger-active')) {
        navMenu.classList.remove('hidden');
        navMenu.classList.add('block');
    } else {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('block');
    }
});

