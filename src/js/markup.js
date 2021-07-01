import cards from '../menu.json';
import itemsTemlate from '../templates/cards.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = itemsTemlate(cards);
menuRef.insertAdjacentHTML('beforeend', markup);