"use strict";

const findJobAccardion = () => {
  const accardionBox = document.querySelector(".accardion-box");
  let counter = 1;
  for (let i = 0; i < accardionBox.children.length; i++) {
    accardionBox.children[i].addEventListener("click", (e) => {
      if (e.currentTarget.classList.contains("accardion")) {
        if (counter % 2 === 0) {
          accardionBox.children[i].style.height = "5.8rem";
          accardionBox.children[i].style.overflowY = "hidden";
          accardionBox.children[i].style.padding = "0 2.1rem 0 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "180deg";
        } else {
          // accardionBox.children[i].classList.toggle("accardion-active");
          accardionBox.children[i].style.height = "auto";
          accardionBox.children[i].style.overflowY = "visible";
          accardionBox.children[i].style.padding = "0 2.1rem 2.1rem 0";
          accardionBox.children[i].children[0].children[1].style.rotate =
            "0deg";
        }

        counter++;
      }
    });
  }
};

const jobsSlider = () => {
  let slideNum = 0;
  // buttons
  const prevBtn = document.querySelector(".jobs-prev");
  const nextBtn = document.querySelector(".jobs-next");
  // elements
  const sliderBox = document.querySelector(".featured-jobs-slider-box");
  const slideChildLength = sliderBox.children.length;
  nextBtn.addEventListener("click", (e) => {
    slideNum++;
    if (slideNum >= slideChildLength) {
      slideNum = 0;
    }
    sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
  });
  prevBtn.addEventListener("click", (e) => {
    slideNum--;
    if (slideNum < 0) {
      slideNum = slideChildLength - 1;
    }
    sliderBox.style.left = "-" + slideNum * 44.5 + "rem";
  });
};

const articleSlider = () => {
  let slieNum = 0;
  // buttons
  const prevBtn = document.querySelector(".article-prev");
  const nextBtn = document.querySelector(".article-next");

  // elements
  const sliderBox = document.querySelector(".user-articles-slider-box");
  const slideBoxLength = sliderBox.children.length;
  nextBtn.addEventListener("click", () => {
    slieNum++;
    if (slieNum > slideBoxLength - 1) {
      slieNum = 0;
    }
    sliderBox.style.left = "-" + slieNum * 125 + "rem";
  });
  prevBtn.addEventListener("click", () => {
    slieNum--;
    if (slieNum < 0) {
      slieNum = slideBoxLength - 1;
    }
    sliderBox.style.left = "-" + slieNum * 125 + "rem";
  });
};

const clickCallback = (e) => {
  const xIcon = document.querySelector(".cancel-icon");
  const menuIcon = document.querySelector(".menu-icon");
  const header = document.querySelector("header");
  header.classList.toggle("sticky");
  if (header.classList.contains("sticky")) {
    menuIcon.classList.add("display-none");
    xIcon.classList.remove("display-none");
  } else {
    xIcon.classList.add("display-none");
    menuIcon.classList.remove("display-none");
  }
};

const openNavigation = () => {
  const btn = document.querySelector(".menu-btn");

  btn.addEventListener("click", clickCallback);
};

const scrollSection = () => {
  const navigation = document.querySelector(".navigation");
  navigation.addEventListener("click", (e) => {
    e.preventDefault();
    // console.log(e.target.href);  absolute path
    // console.log(e.target.getAttribute("href")); relative path
    const href = e.target.getAttribute("href");
    if (href && href !== "/") {
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
      });
      clickCallback();
    }
  });
};

(() => {
  findJobAccardion();
  jobsSlider();
  articleSlider();
  openNavigation();
  scrollSection();
})();
