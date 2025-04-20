const openMenu = () => {
    const burgerIcon = document.querySelector('.hamburger-menu');
    const menuList = document.querySelector('.mobile-list');
    const menuContainer = document.querySelector('.mobile-header-menu');
    
    burgerIcon.addEventListener('click', () => {
        menuContainer.classList.toggle('open-menu');
        menuList.classList.toggle('show-menu');
        burgerIcon.classList.toggle('is-active');
    })
    menuList.addEventListener('click', () => {
        if (window.innerWidth <= 700) {
            menuContainer.classList.toggle('open-menu');
        }
        menuList.classList.toggle('show-menu');
        burgerIcon.classList.toggle('is-active');
    })
};

export default openMenu;