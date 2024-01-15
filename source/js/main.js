import {initBurgerMenu} from './modules/burger/init-burger-menu';
import {initAccordions} from './vendor/accordions/init-accordion';
import {initSliderHero} from './modules/sliders/init-slider-hero';


window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
  });
});
