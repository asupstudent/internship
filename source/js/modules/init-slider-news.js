import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const newsSlider = document.querySelector('[data-swiper="news"]');
const buttonPrev = document.querySelector('[data-swiper="news-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="news-button-next"]');
const newsPagination = document.querySelector('[data-swiper="news-pagination"]');

const setSliderNews = () => {
  new Swiper(newsSlider, {
    modules: [Navigation, Pagination],
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
    slidesPerView: 3,
    spaceBetween: 32,
  });
};

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();
  }
};

export {initSliderNews};
