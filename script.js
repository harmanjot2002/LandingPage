"use strict";
// fixing safari flex gap
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// added items into cart by clicking + and - sign
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
let number = document.querySelector(".number");

let count = 0;
plus.addEventListener("click", function () {
  count++;
  number.textContent = count;
});
minus.addEventListener("click", function () {
  if (Number(number.textContent) > 0) {
    count--;
    number.textContent = count;
  }
});
// main images changes when user click on thumbnail
const images = document.querySelectorAll(".hero-image");
const overlayImages = document.querySelectorAll(".overlay-img");
const thumbnails = document.querySelectorAll(".thumbnail");
const overlayThumbnails = document.querySelectorAll(".overlay-thumb");
const overlayContainer = document.querySelector(".img-container");
const closeBtn = document.querySelector(".closeBtn");
const leftArrow = document.querySelector("#arrow--previous");
const previousBtn = document.querySelector("#mobile--previous");
const nextBtn = document.querySelector("#mobile--next");
const rightArrow = document.querySelector("#arrow--next");
const overAllOverlay = document.querySelector(".overlay");

thumbnails.forEach(function (thumb, idx) {
  thumb.addEventListener("click", function () {
    removeThumbNailActive();
    removeSlide();
    thumb.classList.add("thumbnail-active");
    images[idx].classList.add("slide");
  });
});
// remove active thumbnail
function removeThumbNailActive() {
  thumbnails.forEach(function (thumb) {
    thumb.classList.remove("thumbnail-active");
  });
}
// remove active image
function removeSlide() {
  images.forEach(function (image) {
    image.classList.remove("slide");
  });
}
// on click on main image ,new slide with  images arrows
images.forEach(function (img) {
  img.addEventListener("click", function () {
    overlayContainer.classList.add("active");
    overAllOverlay.classList.add("active");
    removeThumbNailActive();
  });
});
closeBtn.addEventListener("click", function () {
  overlayContainer.classList.remove("active");
  overAllOverlay.classList.remove("active");
});
// make image slides whith arrow button
let activeSlide = 0;

rightArrow.addEventListener("click", function (e) {
  activeSlide++;
  if (activeSlide > overlayImages.length - 1) {
    activeSlide = overlayImages.length - 1;
  }
  removeImgActive();
  removeOverlayThumb();
  overlayThumbnails[activeSlide].classList.add("thumbnail-active");
});
leftArrow.addEventListener("click", function () {
  if (activeSlide > 0) {
    activeSlide--;
  } else {
    activeSlide = 0;
  }
  removeImgActive();
  removeOverlayThumb();
  overlayThumbnails[activeSlide].classList.add("thumbnail-active");
});
// when screen size is less than 776 this function will work for images slides

let activeSlideMobile = 0;

nextBtn.addEventListener("click", function (e) {
  activeSlideMobile++;
  if (activeSlideMobile > images.length - 1) {
    activeSlideMobile = images.length - 1;
  }
  removeSlideMobile();
  removeImgActiveMobile();
});
previousBtn.addEventListener("click", function () {
  if (activeSlideMobile > 0) {
    activeSlideMobile--;
  } else {
    activeSlideMobile = 0;
  }
  removeSlideMobile();
  removeImgActiveMobile();
});
function removeImgActiveMobile() {
  images.forEach(function (img) {
    img.classList.remove("slide");
    images[activeSlideMobile].classList.add("mobile--slide");
  });
}
function removeSlideMobile() {
  images.forEach(function (image) {
    image.classList.remove("mobile--slide");
  });
}
// mobile images slider ends
function removeImgActive() {
  overlayImages.forEach(function (img) {
    img.classList.remove("shown");
    overlayImages[activeSlide].classList.add("shown");
  });
}
function removeOverlayThumb() {
  overlayThumbnails.forEach(function (thumb) {
    thumb.classList.remove("thumbnail-active");
  });
}
// cart number
const cartNumberOfItems = document.querySelector(".superscript");
const addToCart = document.querySelector(".btn--left");
const totalItems = document.querySelector(".quantity");
const priceOneItem = document.querySelector(".item--price").textContent;
const totalPrice = document.querySelector(".total");

let string = priceOneItem.replace(/[^\w ]/, "");

addToCart.addEventListener("click", function () {
  cartNumberOfItems.textContent = number.textContent;
  totalItems.textContent = number.textContent;
  totalPrice.textContent = Number(number.textContent) * Number(string);
});
// cart container icon on/off on just hover
const cartContainer = document.querySelectorAll(".cart-container");
const filled = document.querySelector("#filled");
const empty = document.querySelector("#empty");

const cartShow = document.querySelector(".cart--link");

// hover effect Cart-container

function generateEvent(e) {
  if (Number(cartNumberOfItems.textContent > 0)) {
    filled.classList.toggle("showCart");
    empty.classList.remove("showCart");
  } else {
    empty.classList.toggle("showCart");
    filled.classList.remove("showCart");
  }
}
function degenerateEvent() {
  empty.classList.remove("showCart");
  filled.classList.remove("showCart");
}
// click effect
cartShow.addEventListener("click", function (e) {
  generateEvent();
  // cartShow.removeEventListener("mouseenter", generateEvent);
  // cartShow.removeEventListener("mouseleave", degenerateEvent);
});
// cartShow.addEventListener("mouseenter", generateEvent);

// cartShow.addEventListener("mouseleave", degenerateEvent);

// close cart container on click somewhere outside  container
window.addEventListener("click", function (e) {
  const click = e.target.closest(".cart-container");
  const cartBtn = e.target.closest(".cart--show");
  const subScript = e.target.closest(".cartContainer");

  if (click || cartBtn) {
    false;
  } else {
    filled.classList.remove("showCart");
    empty.classList.remove("showCart");
  }
});
// delete button in cart container
const deleteBtn = document.querySelector(".delete");

deleteBtn.addEventListener("click", function () {
  filled.classList.remove("showCart");
  empty.classList.add("showCart");
  cartNumberOfItems.textContent = 0;
});
// main navigation list change active class

const navigationBtn = document.querySelectorAll(".main-navigation-link");

navigationBtn.forEach(function (btn, idx) {
  btn.addEventListener("click", function () {
    removeActiveBtn();
    btn.classList.add("nav-active");
  });
});

function removeActiveBtn() {
  navigationBtn.forEach(function (navLink) {
    navLink.classList.remove("nav-active");
  });
}
// mobile navigation
const barBtn = document.querySelector(".open");
const closBtn = document.querySelector(".close");
const buttons = document.querySelector(".navigation-btn");
const openNavigation = document.querySelector(".main-navigation");
const menuBtn = document.querySelectorAll(".menu-btn");
const logoBar = document.querySelector(".logo--bars");
const innerLogo = document.querySelector(".logo--inner");
const logo = document.querySelector(".logo");

barBtn.addEventListener("click", function () {
  openNavigation.classList.add("active");
  logoBar.classList.add("hidden");
  closBtn.style.display = "block";
  innerLogo.style.display = "none";
});
closBtn.addEventListener("click", function () {
  openNavigation.classList.remove("active");
  logoBar.classList.remove("hidden");
  closBtn.style.display = "none";
  innerLogo.style.display = "block";
});
// for removing mobile screen