import Swiper from 'swiper';
import {Grid, Navigation, Pagination } from 'swiper/modules';

const newsSlider = document.querySelector('[data-swiper="news"]');
const buttonPrev = document.querySelector('[data-swiper="news-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="news-button-next"]');
const newsPagination = document.querySelector('[data-swiper="news-pagination"]');

const setSliderNews = () => {
  new Swiper(newsSlider, {
    modules: [Grid, Navigation, Pagination],
    pagination: {
      el: newsPagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        spaceBetween: 32,
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });
};

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();
  }
};

export {initSliderNews};
