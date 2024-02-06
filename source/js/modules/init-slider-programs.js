import Swiper from 'swiper';
import { Scrollbar, Navigation } from 'swiper/modules';

const sliderPrograms = document.querySelector('[data-swiper="programs"]');
const buttonPrev = document.querySelector('[data-swiper="programs-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="programs-button-next"]');
const scrollbar = document.querySelector('[data-swiper="programs-scrollbar"]');

const setSliderPrograms = () => {
  new Swiper(sliderPrograms, {
    modules: [Scrollbar, Navigation],
    keyboard: true,
    scrollbar: {
      el: scrollbar,
      draggable: true,
      dragSize: 392,
    },
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },
    slidesPerView: 'auto',
    breakpoints: {
      1440: {
        spaceBetween: 32,
        allowTouchMove: false,
      },
      768: {
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        spaceBetween: 15,
        scrollbar: {
          el: '',
          enabled: false,
        },
      },
    },
  });
};

const initSliderPrograms = () => {
  if (document.body.contains(sliderPrograms)) {
    setSliderPrograms();
  }
};

export {initSliderPrograms};
