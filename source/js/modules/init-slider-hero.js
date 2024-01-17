import Swiper from 'swiper/bundle';

const heroSlider = document.querySelector('[data-swiper="hero"]');
const heroSliderPagination = document.querySelector('[data-swiper="hero-pagination"]');

const setSliderHero = () => new Swiper(heroSlider, {
  pagination: {
    el: heroSliderPagination,
    clickable: true,
    type: 'bullets',
    bulletElement: 'div',
    bulletClass: 'hero__pagination-bullet',
    bulletActiveClass: 'hero__pagination-bullet--active',
  },
  // autoplay: {
  //   delay: 3000,
  // },
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
