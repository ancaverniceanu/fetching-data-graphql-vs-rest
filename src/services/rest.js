const fetchCountries = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then((res) => res.json())
    .then((res) => res);
};

export { fetchCountries };
