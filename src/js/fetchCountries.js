const JSON_BASE_URL = 'https://restcountries.eu/rest/v2';

const fetchCountries = searchQuery => {
  return fetch(`${JSON_BASE_URL}/name/${searchQuery}`).then(response => {
    console.log(response);
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка! Такой страны "${searchQuery}" не существует`);
  });
};

export { fetchCountries };
