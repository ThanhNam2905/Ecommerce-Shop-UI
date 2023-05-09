
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

const btnCloseCart = document.querySelector('#btn__close-cart');
const cart = document.querySelector('.carts-wrapper');
const btnOpenCart = document.querySelector('#btn__open-cart');
const cartBg = document.querySelector('.cart-bg');

if(btnOpenCart) {
    btnOpenCart.addEventListener('click', () => {
        cart.classList.add('show');
        cartBg.classList.add('show');
    })
}

if(btnCloseCart) {
    btnCloseCart.addEventListener('click', () => {
        cart.classList.remove('show');
        cartBg.classList.remove('show');
    })
}

if(cartBg) {
    cartBg.addEventListener('click', () => {
        cart.classList.remove('show');
        cartBg.classList.remove('show');
    })
}

// ----------- Write JS Shop Page ---------------------------------
const optionMenu = document.querySelector('.select-menu');
const selectBtn = document.querySelector('.select-menu .select-btn');
const options = document.querySelectorAll('.select-menu .select-options li.option');
const selectBtnText = document.querySelector('.select-menu .select__btn--text');

document.addEventListener('click', (e) => {
    if (selectBtn && selectBtn.contains(e.target)) {
        optionMenu.classList.toggle('active');
    } else {
        if (optionMenu && optionMenu.classList.contains('active')) {
            optionMenu.classList.remove('active');
        }
    }
});

options.forEach(option => {
    option.addEventListener("click", () => {
        options.forEach(option => option.classList.remove('selected'));
        let selectedOption = option.querySelector('.option-text');
        selectBtnText.innerText = selectedOption.innerText;
        option.classList.add('selected');

        optionMenu.classList.remove('active')
    })
})

const productDetailImage = document.querySelector('.product-detail__img div img');
const imagesListGallery = document.querySelectorAll('.product-detail__img .images-list-gallery div img');

imagesListGallery.forEach(img => {
    img.addEventListener('click', () => {
        productDetailImage.src = img.src;
    })
})

const btnGridView = document.querySelector('#btn-grid-view');
const btnListView = document.querySelector('#btn-list-view');
const productGridView = document.querySelector('.product-list__grid--view');
const productListView = document.querySelector('.product-list__list--view');

if(btnGridView) {
    btnGridView.addEventListener('click', () => {
        btnGridView.classList.add('active');
        productGridView.classList.add('active');
    
        btnListView.classList.remove('active');
        productListView.classList.remove('active');
    })
}

if(btnListView) {
    btnListView.addEventListener('click', () => {
        btnListView.classList.add('active');
        productListView.classList.add('active');
    
        btnGridView.classList.remove('active');
        productGridView.classList.remove('active');
    })
}

const tabButtons = document.querySelectorAll('.tab__label button.tab__btn');
const contentTabs = document.querySelectorAll('.tab__content .content');

tabButtons.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        tabButtons.forEach(tab => tab.classList.remove('active'));
        tab.classList.add('active');

        const tabLine = document.querySelector('.tab__line');
        tabLine.style.width = e.target.offsetWidth + "px";
        tabLine.style.left = e.target.offsetLeft + "px";

        contentTabs.forEach(content => content.classList.remove('active'))
        contentTabs[index].classList.add('active');
    })
})


// Swiper JS
var swiper = new Swiper('.slider', {
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
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


// ----------- Write JS Home Page 2 ---------------------------------
var swiper = new Swiper(".testimonials-slider", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".brands-slider", {

    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: true,
        },
        640: {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 35,
            centeredSlides: true,
        },
        1280: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
    },
});

const filterBtn2 = document.querySelectorAll('#filter-btn-product-2 button');
const productList2 = document.querySelectorAll('.product-list-2 .product-item');

filterBtn2.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtn2.forEach(btn => btn.classList.remove('btn-clicked'));
        btn.classList.add('btn-clicked');

        let dataItem = btn.getAttribute('data-filter');
        productList2.forEach(item => {
            if (item.getAttribute('data-item') === dataItem || dataItem === 'all') {
                item.classList.remove('hide');
                item.classList.add('active');
            }
            else {
                item.classList.add('hide');
                item.classList.remove('active');
            }
        })
    })
})
