import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import { makeMarkup, renderError } from './markup.js';
// import countriesList from '../templates/country-list.hbs';
// import updateCountryMarkup from '../templates/countries.hbs';

// import { alert, error } from '@pnotify/core';
// import '@pnotify/core/dist/PNotify.css';
// import '@pnotify/core/dist/BrightTheme.css';

const refs = {
  input: document.querySelector('input'),
  container: document.querySelector('.container'),
};

refs.input.addEventListener(
  'input',
  debounce(event => {
    refs.container.innerHTML = '';
    const inputValue = event.target.value;
    if (!inputValue) return;
    fetchCountries(inputValue).then(makeMarkup).catch(renderError);
  }, 500),
);
export default refs;

// function makeMarkup(data) {
//   if (data.length > 1 && data.length <= 10) {
//     refs.container.innerHTML = countriesList(data);
//   } else if (data.length > 10) {
//     alert({
//       text: 'Too may matches found. Please enter a more specific query.',
//     });
//   } else {
//     refs.container.innerHTML = data.map(country => updateCountryMarkup(country));
//   }
// }

// function renderError() {
//   error({
//     text: 'Wrong entry! Try again',
//   });
// }
