import './style.css';
import { UI_ELEMENTS } from './js/ui';
import { showMovies } from './js/ui';

document.addEventListener('DOMContentLoaded', () => {
  showMovies();
  UI_ELEMENTS.FILMS_LIST.scrollTop = 320;
});
