import { getFilms } from './api';

export const UI_ELEMENTS = {
  FILMS_LIST: document.querySelector('.films__list'),
  HEADER_FORM_BUTTON: document.querySelector('.app__header-button-search'),
  HEADER_FORM_INPUT: document.querySelector('.app__header-input'),
  HEADER_FORM: document.querySelector('.app__header-form'),
};

UI_ELEMENTS.HEADER_FORM_BUTTON.addEventListener('click', () => {
  UI_ELEMENTS.HEADER_FORM_INPUT.classList.toggle('app__header-input--active');
});

function createFilmElement(title, rating, posterUrl, genres) {
  const item = document.createElement('li');
  item.innerHTML = `<p class="films__item__rating">Рейтинг: ${rating}</p>
  <div class="films__item-text">
    <h3 class="films__item__title">${title}</h3>
    <p class="films__item__genres">${genres}</p>
  </div>`;

  item.classList.add('films__item');
  item.style.backgroundImage = `url(${posterUrl})`;

  return item;
}

export function showMovies() {
  const filmsData = getFilms();

  filmsData.forEach((item) => {
    const filmName = item.name || item.alternativeName;
    const filmRating = item.rating.kp.toFixed(2);
    const posterPath = item.poster.previewUrl;
    const filmGenres = convertGenres(item.genres);

    const filmItem = createFilmElement(
      filmName,
      filmRating,
      posterPath,
      filmGenres
    );

    UI_ELEMENTS.FILMS_LIST.append(filmItem);
  });
}

function convertGenres(genresArr) {
  return genresArr.map((item) => item.name).join(',');
}
