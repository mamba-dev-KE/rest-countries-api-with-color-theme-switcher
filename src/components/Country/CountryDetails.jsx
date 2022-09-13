import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { ColorSchemeContext } from '../../context/context';
import Back from '../Back/Back';
import { useCountries } from '../../hooks';

const CountryDetails = () => {
  const [currentCountry, setCurrentCountry] = useState([]);
  const { isDark } = useContext(ColorSchemeContext);
  const { data } = useCountries();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${id}?fullText=true`)
      .then((res) => {
        const data = res.data;
        setCurrentCountry(data);
        console.log(data);
      });
  }, [id]);

  const countryDisplay = currentCountry?.map((item) => {
    const languages = item?.languages.map((language) => language.name);
    const borderCountries = item?.borders.map((borderCountry) => {
      const borderCodes = borderCountry;
      const neighborCountries = data?.filter(
        (country) =>
          country.alpha3Code.toLowerCase() === borderCodes.toLowerCase()
      );

      return neighborCountries;
    });

    const borderCountryContainer = borderCountries.map((country) => (
      <button className="border-btn">
        <Link to="">{country[0].name}</Link>
      </button>
    ));

    return (
      <>
        <section className="country-details-section" key={item?.name}>
          <img className="country-details-flag" src={item?.flags.svg} alt="" />
          <div
            className={
              isDark ? 'dark-country-info country-info' : 'country-info'
            }
          >
            <div className="wrapper">
              <h4 className="country-details-name">{item?.name}</h4>
              <ul className="country-details-main">
                <li>
                  <span>Native Name:</span> {item?.nativeName}
                </li>
                <li>
                  <span>Population:</span> {item?.population.toLocaleString()}
                </li>
                <li>
                  <span>Region:</span> {item?.region}
                </li>
                <li>
                  <span>Sub Region:</span> {item?.subregion}
                </li>
                <li>
                  <span>Capital:</span> {item?.capital}
                </li>
              </ul>
            </div>
            <ul className="country-details-other">
              <li>
                <span>Top Level Domain:</span> {item?.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span> {item?.currencies[0].name}
              </li>
              <li>
                <span>Languages:</span> {languages?.join(', ')}
              </li>
            </ul>
          </div>
        </section>
        <div className="border-countries">
          <div className="btn-group">
            <span className="border-countries-title">Border Countries:</span>
            {borderCountryContainer}
          </div>
        </div>
      </>
    );
  });

  return (
    <div className="country-details">
      <Back isDark={isDark} />
      {countryDisplay}
    </div>
  );
};

export default CountryDetails;
