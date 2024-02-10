let mobile_menu = document.getElementById(`MobileMenu`)
let nav_classes = mobile_menu.classList
let ham_burger = document.getElementById(`ham_burger`)
let body = document.querySelectorAll(`body`)[0]
let mobile_menu_links = mobile_menu.querySelectorAll(`a`)
ham_burger.addEventListener(`click`, () => {
  mobile_menu.classList.toggle(`hidden`)
  mobile_menu.classList.toggle(`flex`)
})
mobile_menu_links.forEach(link => {
  link.addEventListener(`click`, () => {
    mobile_menu.classList.toggle(`hidden`)
    mobile_menu.classList.toggle(`flex`)
  })
})
setInterval(() => {
  if (body.clientWidth > 751) {
    mobile_menu.classList.add(`hidden`)
    mobile_menu.classList.remove(`flex`)
  }
}, 1)
