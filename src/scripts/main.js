'use strict';

import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([ Navigation, Pagination ]);

const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const forma = document.getElementById('form');

forma.addEventListener('submit', function(event) {
  event.preventDefault();
  forma.reset();
});
