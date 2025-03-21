
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.main-lists-ul');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('hidden'); 
});