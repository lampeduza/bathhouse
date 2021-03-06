// for index.html
let sliders = document.querySelectorAll('.description__gallery');

for (let i = 0; i < sliders.length; i++) {
  init_slider(sliders[i]);
}

function init_slider(slider) {
  let slide = slider.querySelectorAll('.gallery__slider-item');

  let next = slider.querySelector('.gallery__button--next');
  let previous = slider.querySelector('.gallery__button--previous');
  let dots = slider.querySelectorAll(".rectangle-list__item");

  let i = 0;

  next.addEventListener('click', function () {
    slide[i].classList.remove('gallery__slider-item--active');
    dots[i].classList.remove('rectangle-list__item--active');
    i = (i + 1) % slide.length; // (*1)
    slide[i].classList.add('gallery__slider-item--active');
    dots[i].classList.add('rectangle-list__item--active');
  });

  previous.addEventListener('click', function () {
    slide[i].classList.remove('gallery__slider-item--active');
    dots[i].classList.remove('rectangle-list__item--active');
    i = (i - 1) % slide.length; // (*1)

    if (i < 0) {
      i = slide.length - 1;
    }

    slide[i].classList.add('gallery__slider-item--active');
    dots[i].classList.add('rectangle-list__item--active');
  });
}
