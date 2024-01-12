import {iosVhFix} from './utils/ios-vh-fix';
import {initSliderHero} from './modules/sliders/init-slider-hero';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  initSliderHero();

  window.addEventListener('load', () => {

  });
});
