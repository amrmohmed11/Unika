// window.alert("اهلا بك : هذا الموقع تحت التطوير");

// grid buttons event
let all = document.getElementById("all");
let websites = document.getElementById("websites");
let web_design = document.getElementById("web-design");
let apps_development = document.getElementById("apps-development");
let graphic_design = document.getElementById("graphic-design");
let responsive = document.getElementById("responsive");
let buttons = document.querySelectorAll(".grid-button button");

// console.log(buttons)

// get the img container

let all_img = document.querySelectorAll(".grid .img-cont");
let websites_img = document.querySelectorAll(".grid .websites-img");
let web_design_img = document.querySelectorAll(".grid .web-design-img");
let apps_development_img = document.querySelectorAll(
  ".grid .apps-development-img"
);
let graphic_design_img = document.querySelectorAll(".grid .graphic-design-img");
let responsive_img = document.querySelectorAll(".grid .responsive-img");

function removeActiveClass() {
  for (x = 0; x < buttons.length; x++) {
    buttons[x].classList.remove("active");
  }
}
//hide and show img
function hideAndShow() {
  for (i = 0; i < all_img.length; ++i) {
    all_img[i].classList.add("hide");
  }
}

all.onclick = function () {
  removeActiveClass();
  all.classList.add("active");
  for (i = 0; i < all_img.length; ++i) {
    all_img[i].classList.remove("hide");
  }
};
websites.onclick = function () {
  removeActiveClass();
  websites.classList.add("active");
  // all_img.classList.add("hide");
  for (i = 0; i < all_img.length; ++i) {
    all_img[i].classList.add("hide");
  }
  // web_design_img
  for (i = 0; i < websites_img.length; ++i) {
    websites_img[i].classList.remove("hide");
  }
};
web_design.onclick = function () {
  removeActiveClass();
  web_design.classList.add("active");
  hideAndShow();
  for (i = 0; i < web_design_img.length; ++i) {
    web_design_img[i].classList.remove("hide");
  }
};
apps_development.onclick = function () {
  removeActiveClass();
  apps_development.classList.add("active");
  hideAndShow();
  for (i = 0; i < apps_development_img.length; ++i) {
    apps_development_img[i].classList.remove("hide");
  }
};
graphic_design.onclick = function () {
  removeActiveClass();
  graphic_design.classList.add("active");
  hideAndShow();
  for (i = 0; i < graphic_design_img.length; ++i) {
    graphic_design_img[i].classList.remove("hide");
  }
};
responsive.onclick = function () {
  removeActiveClass();
  responsive.classList.add("active");
  hideAndShow();
  for (i = 0; i < responsive_img.length; ++i) {
    responsive_img[i].classList.remove("hide");
  }
};
