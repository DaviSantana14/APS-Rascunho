const button = document.querySelector('.menu-nav');
const navbar = document.querySelector('.navbar-escondida');

button.addEventListener('click', function() {
    navbar.classList.toggle('show');
});
