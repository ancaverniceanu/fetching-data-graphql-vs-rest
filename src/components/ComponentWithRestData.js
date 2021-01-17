import { useState, useEffect } from 'react';
import { fetchCountries } from '../services/rest';

const ComponentWithRestData = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setCountries(await fetchCountries());
    }
    fetchData();
  }, []);

  const renderCountryOptions = () => {
    return (
      countries &&
      countries.map(({ name, alpha2Code }) => (
        <option key={alpha2Code} value={alpha2Code}>
          {name}
        </option>
      ))
    );
  };

  return (
    <div>
      <select>
        <option defaultValue hidden>
          Select a country
        </option>
        {renderCountryOptions()}
      </select>
    </div>
  );
};

export default ComponentWithRestData;
