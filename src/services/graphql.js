const fetchCountries = () => {
  return fetch('https://countries-274616.ew.r.appspot.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: `
        query {
          Country {
            name
            alpha2Code
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data.Country);
};

export { fetchCountries };
