import type { Country } from 'types';

const CountryStats = ({ country }: { country: Country }) => {
  return (
    <ul className="country__stats">
      <li>
        <span>Population:</span> {country.population.toLocaleString()}
      </li>

      <li>
        <span>Region:</span> {country.region}
      </li>

      <li>
        <span>Capital:</span> {country.capital}
      </li>
    </ul>
  );
};

export default CountryStats;
