const button = document.querySelector('.gg-menu-round');
const navbar = document.querySelector('.navbar-escondida');

button.addEventListener('click', function() {
    navbar.classList.toggle('show');
});
