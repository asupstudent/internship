import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const slider = document.querySelector('[data-swiper="slider"]');
const sliderPagination = document.querySelector('[data-swiper-pagination="slider"]');

// eslint-disable-next-line no-unused-vars
const swiper = new Swiper(slider, {
  modules: [Pagination],
  pagination: {
    el: sliderPagination,
    clickable: true,
  },
  loop: true,
});
