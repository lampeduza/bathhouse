var header = document.querySelector('.header');
var toggle = document.querySelector('.header__toggle');

header.classList.remove('header--nojs');

var open = function () {
  header.classList.toggle('header--opened');
};

var close = function () {
  header.classList.toggle('header--opened');
}

toggle.addEventListener('click', open);
toggle.removeEventListener('click', close);

