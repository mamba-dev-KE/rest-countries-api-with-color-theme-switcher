import { Search, CountryItem } from '../../components';
import './Country.css';

import { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ColorSchemeContext } from '../../context/context';
import { useCountries } from '../../hooks';

const Country = () => {
  const [search, setSearch] = useState({
    searchTerm: '',
    filterTerm: '',
  });

  const { isDark } = useContext(ColorSchemeContext);
  const { data } = useCountries();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetRegionFilter = () => {
    setSearch((prevState) => ({
      ...prevState,
      filterTerm: '',
    }));
  };

  const filteredCountries = data?.filter((country) =>
    country.name.toLowerCase().includes(search.searchTerm.toLowerCase())
  );
  const regionCountries = data?.filter((country) =>
    country.region.toLowerCase().includes(search.filterTerm.toLowerCase())
  );

  const searchedCountries = filteredCountries?.map((country) => {
    return <CountryItem country={country} key={country.numericCode} />;
  });

  const countriesByRegion = regionCountries?.map((country) => {
    return (
      <CountryItem
        isDark={isDark}
        country={country}
        key={country.numericCode}
      />
    );
  });

  return (
    <>
      <Search
        search={search}
        handleChange={handleChange}
        isDark={isDark}
        resetRegionFilter={resetRegionFilter}
      />
      <motion.div layout className="countries">
        <AnimatePresence>
          {search.filterTerm === '' ? searchedCountries : countriesByRegion}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Country;
