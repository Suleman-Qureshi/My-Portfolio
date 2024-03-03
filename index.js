let mobile_menu = document.getElementById(`MobileMenu`);
let nav_classes = mobile_menu.classList;
let ham_burger = document.getElementById(`ham_burger`);
let body = document.querySelectorAll(`body`)[0];
let mobile_menu_links = mobile_menu.querySelectorAll(`a`);
let my_img = document.querySelectorAll(".my_img");
let img_div = document.getElementById(`img_page_1`);
let custom_css_1 = document.getElementById("C-CSS-1");
let Tailwind_css_1 = document.getElementById("Tailwind-CSS-1");
let Tailwind_css_2 = document.getElementById("Tailwind-CSS-2");
let Tailwind_css_3 = document.getElementById("Tailwind-CSS-3");
let Tailwind_css_4 = document.getElementById("Tailwind-CSS-4");
let Tailwind_css_5 = document.getElementById("Tailwind-CSS-5");
let React_1 = document.getElementById("React-1");
let React_2 = document.getElementById("React-2");
let Porfolio_btn_1 = document.getElementById("P-btn-1");
let Porfolio_btn_2 = document.getElementById("P-btn-2");
let Porfolio_btn_3 = document.getElementById("P-btn-3");
let Porfolio_btn_4 = document.getElementById("P-btn-4");
my_img.forEach((img) => {
  console.log(img);
  img.addEventListener(`mousedown`, () => {
    img_div.classList.remove(`hidden`);
    img_div.classList.add(`flex`);
    img_div.classList.add(`animation-1`);
  });
  img.addEventListener(`mouseup`, () => {
    img_div.classList.remove(`flex`);
    img_div.classList.add(`hidden`);
  });
});
ham_burger.addEventListener(`click`, () => {
  mobile_menu.classList.toggle(`hidden`);
  mobile_menu.classList.toggle(`flex`);
});
mobile_menu_links.forEach((link) => {
  link.addEventListener(`click`, () => {
    mobile_menu.classList.toggle(`hidden`);
    mobile_menu.classList.toggle(`flex`);
  });
});
setInterval(() => {
  if (body.clientWidth > 751) {
    mobile_menu.classList.add(`hidden`);
    mobile_menu.classList.remove(`flex`);
  }
}, 1);
Porfolio_btn_1.addEventListener(`click`, () => {
  Porfolio_btn_1.classList.add("text-lime-500");
  Porfolio_btn_2.classList.remove("text-lime-500");
  Porfolio_btn_3.classList.remove("text-lime-500");
  Porfolio_btn_4.classList.remove("text-lime-500");
  custom_css_1.classList.remove("hidden");
  Tailwind_css_1.classList.remove("hidden");
  Tailwind_css_2.classList.remove("hidden");
  Tailwind_css_3.classList.remove("hidden");
  Tailwind_css_4.classList.remove("hidden");
  Tailwind_css_5.classList.remove("hidden");
  React_1.classList.remove("hidden");
  React_2.classList.remove("hidden");
});
Porfolio_btn_2.addEventListener(`click`, () => {
  Porfolio_btn_1.classList.remove("text-lime-500");
  Porfolio_btn_2.classList.add("text-lime-500");
  Porfolio_btn_3.classList.remove("text-lime-500");
  Porfolio_btn_4.classList.remove("text-lime-500");
  custom_css_1.classList.remove("hidden");
  Tailwind_css_1.classList.add("hidden");
  Tailwind_css_2.classList.add("hidden");
  Tailwind_css_3.classList.add("hidden");
  Tailwind_css_4.classList.add("hidden");
  Tailwind_css_5.classList.add("hidden");
  React_1.classList.add("hidden");
  React_2.classList.add("hidden");
});
Porfolio_btn_3.addEventListener(`click`, () => {
  Porfolio_btn_1.classList.remove("text-lime-500");
  Porfolio_btn_2.classList.remove("text-lime-500");
  Porfolio_btn_3.classList.add("text-lime-500");
  Porfolio_btn_4.classList.remove("text-lime-500");
  custom_css_1.classList.add("hidden");
  Tailwind_css_1.classList.remove("hidden");
  Tailwind_css_2.classList.remove("hidden");
  Tailwind_css_3.classList.remove("hidden");
  Tailwind_css_4.classList.remove("hidden");
  Tailwind_css_5.classList.remove("hidden");
  React_1.classList.add("hidden");
  React_2.classList.add("hidden");
});
Porfolio_btn_4.addEventListener(`click`, () => {
  Porfolio_btn_1.classList.remove("text-lime-500");
  Porfolio_btn_2.classList.remove("text-lime-500");
  Porfolio_btn_3.classList.remove("text-lime-500");
  Porfolio_btn_4.classList.add("text-lime-500");
  custom_css_1.classList.add("hidden");
  Tailwind_css_1.classList.add("hidden");
  Tailwind_css_2.classList.add("hidden");
  Tailwind_css_3.classList.add("hidden");
  Tailwind_css_4.classList.add("hidden");
  Tailwind_css_5.classList.add("hidden");
  React_1.classList.remove("hidden");
  React_2.classList.remove("hidden");
});
