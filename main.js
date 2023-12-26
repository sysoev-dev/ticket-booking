import './style.css';
import { UI_ELEMENTS } from './js/ui';
import { getFilms } from './js/api';

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

function convertGenres(genresArr) {
  return genresArr.map((item) => item.name).join(',');
}

function showMovies() {
  const filmsData = getFilms();

  filmsData.forEach((item) => {
    const filmName = item.name || item.alternativeName;
    const filmRating = item.rating.kp;
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

document.addEventListener('DOMContentLoaded', () => {
  showMovies();
  UI_ELEMENTS.FILMS_LIST.scrollTop = 320;
});
