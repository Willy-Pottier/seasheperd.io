document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.burger-menu svg');
    const closeMenuBtn = document.querySelector('.menucontainer svg');
    const menuContainer = document.querySelector('.menucontainer');

    openMenuBtn.addEventListener('click', function() {
        menuContainer.style.display = 'flex';
    });

    closeMenuBtn.addEventListener('click', function() {
        menuContainer.style.display = 'none';
    });
});
