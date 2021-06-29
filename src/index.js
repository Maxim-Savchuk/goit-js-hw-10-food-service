import './sass/main.scss';

import cards from './menu.json';
import itemsTemlate from './templates/cards.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemlate(cards);
menuRef.insertAdjacentHTML('beforeend', markup);

const switchThemeBtn = document.querySelector('#theme-switch-toggle');
switchThemeBtn.addEventListener('click', onThemeBtnClick);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
