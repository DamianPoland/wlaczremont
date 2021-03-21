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