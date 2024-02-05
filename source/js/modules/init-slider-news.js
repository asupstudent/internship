import Swiper from 'swiper';
import {Manipulation, Grid, Navigation, Pagination } from 'swiper/modules';

const newsSlider = document.querySelector('[data-swiper="news"]');
const buttonPrev = document.querySelector('[data-swiper="news-button-prev"]');
const buttonNext = document.querySelector('[data-swiper="news-button-next"]');
const newsPagination = document.querySelector('[data-swiper="news-pagination"]');
const isActive = 'is-active';
const buttonContainer = document.querySelector('[data-news="button-container"]');
const newsButtons = buttonContainer.querySelectorAll('[data-name="news-button"]');
const newsSlide = document.querySelectorAll('[data-news="slide"]');

let slider;

const setSliderNews = () => {
  slider = new Swiper(newsSlider, {
    modules: [Manipulation, Grid, Navigation, Pagination],
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
    observer: true,
    spaceBetween: 20,
    slidesPerView: 'auto',
    grid: {
      rows: 1,
    },
    breakpoints: {
      1440: {
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
      768: {
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      320: {
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });
};

const onNewsButtonClick = (activeButton) => {
  newsButtons.forEach((button) => button.classList.remove(isActive));
  activeButton.classList.add(isActive);
};

const updateNewsSlider = (filter) => {
  slider.slides.forEach((slide) => {
    const slideFilter = slide.dataset.filter;
    const isShowSlide = filter === 'all' || slideFilter === filter;
    if(!isShowSlide) {
      slide.remove();
    }
  });
};

const onButtonContainerClick = (evt) => {
  slider.removeAllSlides();
  slider.appendSlide(newsSlide);
  slider.update();
  const currentButton = evt.target.closest('[data-name="news-button"]');
  if (currentButton) {
    if (!currentButton.classList.contains(isActive)) {
      onNewsButtonClick(currentButton);
    }
  }
  const filter = currentButton.dataset.filter || 'all';
  updateNewsSlider(filter);
};

const initSliderNews = () => {
  if (document.body.contains(newsSlider)) {
    setSliderNews();

    if (buttonContainer && newsButtons) {
      buttonContainer.addEventListener('click', onButtonContainerClick);
    }
  }
};

export {initSliderNews};
