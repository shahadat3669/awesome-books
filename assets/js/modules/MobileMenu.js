const hamburger = document.querySelector('#navbar-hamburger');
const navMenu = document.querySelector('.navbar-menu');

const mobileMenu = () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
};

const closeMenu = () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
};

export { mobileMenu, closeMenu };
