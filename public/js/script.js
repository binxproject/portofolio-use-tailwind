// navbar fixed
// scroll to top
window.onscroll = function() {
    const nav = document.querySelector('#nav');
    const fixedNav = nav.offsetTop;
    const scrollToTop = document.querySelector('#scroll-to-top');

    if(window.pageYOffset > fixedNav) {
        nav.classList.add('navbar-fixed');
        scrollToTop.classList.remove('hidden');
        scrollToTop.classList.add('flex');
    } else {
        nav.classList.remove('navbar-fixed');
        scrollToTop.classList.remove('flex');
        scrollToTop.classList.add('hidden');
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


// menutup nav menu dan hamburger menu ketika diklik diluar elemen
window.addEventListener('click', function(e) {
    if(e.target != hamburgerMenu && e.target != navMenu) {
        hamburgerMenu.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
});


// dark mode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');
const htmlDarkMode = document.querySelector('html');

if(localStorage.getItem('theme') === 'dark') {
    htmlDarkMode.classList.add('dark');
    darkModeIcon.src = 'public/img/theme/on-button.png';
}

darkModeToggle.addEventListener('click', function() {
    htmlDarkMode.classList.toggle('dark');

    if(htmlDarkMode.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
        darkModeIcon.src = 'public/img/theme/on-button.png';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeIcon.src = 'public/img/theme/off-button.png';
    }
})
