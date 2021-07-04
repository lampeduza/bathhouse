// for gallery.html
let sliders = document.querySelectorAll('.photos__section');

for (let i = 0; i < sliders.length; i++) {
  init_slider(sliders[i]);
}

function init_slider(slider) {
  let slide = slider.querySelectorAll('.photos__item');

  let next = slider.querySelector('.photos__button--next');
  let previous = slider.querySelector('.photos__button--previous');
  let dots = slider.querySelectorAll(".rectangle-list__item");

  let i = 0;

  next.addEventListener('click', function () {
    slide[i].classList.remove('photos__item--active');
    dots[i].classList.remove('rectangle-list__item--active');
    i = (i + 1) % slide.length; // (*1)
    slide[i].classList.add('photos__item--active');
    dots[i].classList.add('rectangle-list__item--active');
  });

  previous.addEventListener('click', function () {
    slide[i].classList.remove('photos__item--active');
    dots[i].classList.remove('rectangle-list__item--active');
    i = (i - 1) % slide.length; // (*1)

    if (i < 0) {
      i = slide.length - 1;
    }

    slide[i].classList.add('photos__item--active');
    dots[i].classList.add('rectangle-list__item--active');
  });
}
