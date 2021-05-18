import { fetchCountries } from './fetchCountries.js';
import debounce from 'lodash.debounce';
import { makeMarkup, renderError } from './markup.js';

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
