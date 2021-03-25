
// AOS
AOS.init({
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
});


// nav
const navBurgerButton = document.querySelector(".burgerMenu")
const navBurgerList = document.querySelector(".nav__list")

// nav open/close when click nav container
navBurgerList.addEventListener("click", () => {
    navBurgerButton.classList.remove("burgerOpen")
    navBurgerList.classList.remove("listOpen")
})

// nav button open/close
navBurgerButton.addEventListener("click", () => {
    navBurgerButton.classList.contains("burgerOpen") ? navBurgerButton.classList.remove("burgerOpen") : navBurgerButton.classList.add("burgerOpen")
    navBurgerList.classList.contains("listOpen") ? navBurgerList.classList.remove("listOpen") : navBurgerList.classList.add("listOpen")
})


// swipper
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Pagination
    pagination: { el: '.swiper-pagination', },

    // Navigation arrows
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev', },

    // Scrollbar
    scrollbar: { el: '.swiper-scrollbar', },

    // Autoplay
    speed: 1000,
    autoplay: { delay: 2000 },

    // Default parameters
    slidesPerView: 1,
    spaceBetween: 16,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 500px
        500: { slidesPerView: 2 },
        // when window width is >= 640px
        800: { slidesPerView: 3 }
    }
});