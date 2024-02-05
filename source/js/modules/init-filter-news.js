const isActive = 'is-active';
const buttonContainer = document.querySelector('[data-news="button-container"]');
const newsBtns = buttonContainer.querySelectorAll('[data-name="news-button"]');

const onNewsButtonClick = (activeButton) => {
  newsBtns.forEach((button) => button.classList.remove(isActive));
  activeButton.classList.add(isActive);
};

const onButtonContainerClick = (evt) => {
  const currentButton = evt.target.closest('[data-name="news-button"]');
  if (currentButton) {
    if (!currentButton.classList.contains(isActive)) {
      onNewsButtonClick(currentButton);
    }
  }
};

export const initNewsFilter = () => {
  if (buttonContainer && newsBtns) {
    buttonContainer.addEventListener('click', onButtonContainerClick);
  }
};
