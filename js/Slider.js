import Slide from "./Slide";

export default class Slider {
  constructor(
    slideList,
    imageSelector,
    titleSelector,
    dotsSelector,
    time = 3000,
    active = 0
  ) {
    this.image = document.querySelector(imageSelector);
    this.title = document.querySelector(titleSelector);
    this.dots = [...document.querySelectorAll(dotsSelector)];
    this.time = time;
    this.active = active;
    this.slides = [];

    for (const slide of slideList) {
      this.slides.push(new Slide(slide.img, slide.text));
    }
    window.addEventListener("keydown", (e) => keyChangeSlide(e));
  }
}
