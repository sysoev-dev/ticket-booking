export const UI_ELEMENTS = {
  FILMS_LIST: document.querySelector('.films__list'),
  HEADER_FORM_BUTTON: document.querySelector('.app__header-button-search'),
  HEADER_FORM_INPUT: document.querySelector('.app__header-input'),
  HEADER_FORM: document.querySelector('.app__header-form'),
};

UI_ELEMENTS.HEADER_FORM_BUTTON.addEventListener('click', () => {
  UI_ELEMENTS.HEADER_FORM_INPUT.classList.toggle('app__header-input--active');
});
