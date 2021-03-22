
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



// img slider start 
const start = document.querySelector(".start")

const startArray = [
    "./assets/start/1.jpg",
    "./assets/start/2.jpg",
    "./assets/start/3.jpg",
    "./assets/start/4.jpg",
    "./assets/start/5.jpg",
]

let counter = 1 // 0 is default

const imgSlider = () => {
    setInterval(() => {

        const startFigure = document.querySelector(".start__figure")

        // create figure with img
        const figureS = document.createElement("figure")
        figureS.classList.add("start__figure")
        const imgS = document.createElement("img")
        imgS.classList.add("start__img")
        imgS.src = startArray[counter]
        imgS.alt = "łazienka po remoncie"
        figureS.appendChild(imgS)

        // append figure to DOM
        start.appendChild(figureS)

        // remove old figure
        setTimeout(() => {
            start.removeChild(startFigure)
        }, 3000)

        // increase counter
        counter += 1
        counter === startArray.length ? counter = 0 : null

    }, 4000)
}

imgSlider()



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