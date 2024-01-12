import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

const heroSlider = document.querySelector('[data-swiper="hero"]');
const heroSliderPagination = document.querySelector('[data-swiper-pagination="hero"]');

const setSliderHero = () => new Swiper(heroSlider, {
  modules: [Pagination, Autoplay],
  pagination: {
    el: heroSliderPagination,
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  loop: true,
  breakpoints: {
    1440: {
      allowTouchMove: false,
    },
  },
});

const initSliderHero = () => {
  if (document.body.contains(heroSlider)) {
    setSliderHero();
  }
};

export {initSliderHero};
