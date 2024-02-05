const isActive = 'is-active';
const buttonContainer = document.querySelector('[data-news="button-container"]');
const newsButtons = buttonContainer.querySelectorAll('[data-name="news-button"]');
const newsSlides = document.querySelectorAll('[data-news="slide"]');

const onNewsButtonClick = (activeButton) => {
  newsButtons.forEach((button) => button.classList.remove(isActive));
  activeButton.classList.add(isActive);
};

const updateNewsSlider = (filter) => {
  newsSlides.forEach((slide) => {
    const slideFilter = slide.dataset.filter;
    const isShowSlide = filter === 'all' || slideFilter === filter;
    // eslint-disable-next-line no-console
    console.log(isShowSlide);
  });
};

const onButtonContainerClick = (evt) => {
  const currentButton = evt.target.closest('[data-name="news-button"]');
  if (currentButton) {
    if (!currentButton.classList.contains(isActive)) {
      onNewsButtonClick(currentButton);
    }
  }
  const filter = currentButton.dataset.filter || 'all';
  updateNewsSlider(filter);
};

export const initNewsFilter = () => {
  if (buttonContainer && newsButtons) {
    buttonContainer.addEventListener('click', onButtonContainerClick);
  }
};
