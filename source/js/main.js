import './utils/scroll-lock';
import './utils/focus-lock';
import {CustomSelect} from './vendor/custom-select/custom-select';
import {Form} from './vendor/form-validate/form';
import {initBurgerMenu} from './modules/init-burger-menu';
import {initAccordions} from './modules/init-accordions';
import {initModals} from './modules/init-modals';
import {initSliderHero} from './modules/init-slider-hero';

window.addEventListener('DOMContentLoaded', () => {
  initSliderHero();

  window.addEventListener('load', () => {
    initBurgerMenu();
    initAccordions();
    initModals();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
