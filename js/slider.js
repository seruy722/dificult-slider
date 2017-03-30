"use strict";

let btnLeft = document.getElementById("left");
let btnRight = document.getElementById("right");
let pagination = document.querySelectorAll(".pagination>li");
const img = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg"];
let carousel = document.getElementById("carousel");
let slideIndex;
let prevInd;
let slideWidth = 748;
let carouselShift = 748;
let slideCounter = 0;
let numberOfSlides = carousel.children.length;
let counter = 0;

btnRight.onclick = () => {
  let prevInd;
  counter++;
  slideCounter++;
  slideIndex = counter % numberOfSlides;
  let active = document.querySelector(".active");
  if (slideCounter >= numberOfSlides) {
    slideIndex === 0
      ? (prevInd = numberOfSlides - 1)
      : (prevInd = slideIndex - 1);
    carousel.lastElementChild.previousElementSibling.innerHTML = `<img src="${img[prevInd]}">`;
    carousel.lastElementChild.innerHTML = `<img src="${img[slideIndex]}">`;
    carousel.style.transform = `translateX(-${carouselShift - slideWidth * 2}px)`;
    carousel.style.transitionDuration = "";

    setTimeout(
      function() {
        carousel.style.transform = `translateX(-${carouselShift - slideWidth}px)`;
        carousel.style.transitionDuration = ".2s";
      },
      0
    );
    slideCounter--;
    return;
  } else {
    carousel.style.transform = `translateX(-${carouselShift}px)`;
    carousel.style.transitionDuration = ".2s";
    carouselShift += slideWidth;
  }
};

btnLeft.onclick = () => {
  let prevInd;
  counter--;
  slideCounter--;
  let slideIndexL = counter % numberOfSlides;
  let active = document.querySelector(".active");
  let imgInd = slideIndexL;
  if (slideCounter < 0) {
    slideIndexL = Math.abs(slideIndexL);
    if (slideIndexL === 2) {
      prevInd = 2;
      imgInd = 1;
    }
    if (slideIndexL === 1) {
      prevInd = 0;
      imgInd = 2;
    }
    if (slideIndexL === 0) {
      prevInd = 1;
      imgInd = 0;
    }
    carousel.firstElementChild.nextElementSibling.innerHTML = `<img src="${img[prevInd]}">`;
    carousel.firstElementChild.innerHTML = `<img src="${img[imgInd]}">`;
    carousel.style.transform = `translateX(${slideWidth - 748 * 2}px)`;
    carousel.style.transitionDuration = "";

    setTimeout(
      function() {
        carousel.style.transform = `translateX(${slideWidth - 748}px)`;
        carousel.style.transitionDuration = ".2s";
      },
      0
    );
    slideCounter++;
    return;
  } else {
    carouselShift -= slideWidth;
    carousel.style.transform = `translateX(-${carouselShift - slideWidth}px)`;
    carousel.style.transitionDuration = ".2s";
  }
};
