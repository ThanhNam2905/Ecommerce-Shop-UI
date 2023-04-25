// Get Element from DOM
const filterBtns = document.querySelectorAll('#filter-buttons button');
const productsList = document.querySelectorAll('.product-list .product-item');

const menuBarBtn = document.querySelector('#btn__menu-bar');
const menuNavigation = document.querySelector('.menu-navigation');
const backgroundSub = document.querySelector('#bg-sub');

const navLinkItems = document.querySelectorAll('.nav__link--item');
const dropdownMenuLinkItems = document.querySelectorAll(
    '.dropdown-menu__link--item'
);

navLinkItems.forEach((nav_Item) => {
    nav_Item.addEventListener('click', (event) => {
        const target = event.currentTarget;
        const ele = target.nextElementSibling;

        document.addEventListener('click', (e) => {
            if (nav_Item.contains(e.target)) {
                navLinkItems.forEach((nav_Item) => {
                    nav_Item.classList.remove('active');
                });
                dropdownMenuLinkItems.forEach((dd_Item) => {
                    dd_Item.classList.remove('active');
                });
                nav_Item.classList.toggle('active');
            } else {
                nav_Item.classList.remove('active');
            }
        });
    });
});

dropdownMenuLinkItems.forEach((dd_Item) => {
    dd_Item.addEventListener('click', () => {
        dropdownMenuLinkItems.forEach((dd_Item) => {
            dd_Item.classList.remove('active');
        });
        dd_Item.classList.add('active');
    });
});

// Add a click event button open menu-bar
document.addEventListener('click', (e) => {
    if (menuBarBtn.contains(e.target)) {
        // Click to Toggle button menu-bar
        menuNavigation.classList.toggle('active-clicked');
        backgroundSub.classList.toggle('active');
    } else {
        // Click Outside from Toggle button menu-bar
        if (!menuNavigation.contains(e.target)) {
            if (menuNavigation.classList.contains('active-clicked')) {
                menuNavigation.classList.remove('active-clicked');
                backgroundSub.classList.remove('active');
            }
        }
    }
});

window.addEventListener('resize', (e) => {
    if (window.innerWidth > 991) {
        if (menuNavigation.classList.contains('active-clicked')) {
            menuNavigation.classList.remove('active-clicked');
            backgroundSub.classList.remove('active');
        }
    }
});

// Add a click event to all buttons
filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        filterBtns.forEach((btn) => btn.classList.remove('btn-clicked'));
        btn.classList.add('btn-clicked');

        let dataItem = btn.getAttribute('data-filter');
        productsList.forEach((item) => {
            if (item.getAttribute('data-item') === dataItem || dataItem === 'all') {
                item.classList.remove('hide');
                item.classList.add('active');
            } else {
                item.classList.add('hide');
                item.classList.remove('active');
            }
        });
    });
});

// Swiper JS
var swiper = new Swiper('.slider', {
    spaceBetween: 60,
    centeredSlides: true,
    loop: true,
    // autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false,
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});
