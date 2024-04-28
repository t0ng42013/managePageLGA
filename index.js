const btnHamburger = document.getElementById('btnHamburger');
const menuMobile = document.getElementById('menuMobile');




btnHamburger.addEventListener('click', () => {
    menuMobile.classList.toggle('showMenu');
});