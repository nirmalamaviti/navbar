document.addEventListener('DOMContentLoaded', function() {
    const showMenuButton = document.getElementById('showMenuButton');
    const hideMenuButton = document.getElementById('hideMenuButton');
    const navLinks = document.querySelector('.navlinks');

    hideMenuButton.style.display = 'none';
    navLinks.style.display = 'none';

    showMenuButton.addEventListener('click', function() {
        showMenuButton.style.display = 'none';
        hideMenuButton.style.display = 'block';
        navLinks.style.display = 'block';
    });

    hideMenuButton.addEventListener('click', function() {
        showMenuButton.style.display = 'block';
        hideMenuButton.style.display = 'none';
        navLinks.style.display = 'none';
    });
});
