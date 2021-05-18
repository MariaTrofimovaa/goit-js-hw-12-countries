import refs from './countries.js';
import countriesList from '../templates/country-list.hbs';
import updateCountryMarkup from '../templates/countries.hbs';

import { alert, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

function makeMarkup(data) {
  if (data.length > 1 && data.length <= 10) {
    refs.container.innerHTML = countriesList(data);
  } else if (data.length > 10) {
    alert({
      text: 'Too may matches found. Please enter a more specific query.',
    });
  } else {
    refs.container.innerHTML = data.map(country => updateCountryMarkup(country));
  }
}

function renderError() {
  error({
    text: 'Wrong entry! Try again',
  });
}

export { makeMarkup, renderError };
