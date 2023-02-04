import { Search, CountryItem } from '..';
import { motion, AnimatePresence } from 'framer-motion';
import { useCountries, useDarkMode } from 'hooks';
import { ChangeEvent, useState } from 'react';
import './Country.css';

const Country = () => {
  /* Unified state to manage both searching by name and filtering by region */
  const [search, setSearch] = useState<{
    searchTerm: string;
    filterTerm: string;
  }>({
    searchTerm: '',
    filterTerm: '',
  });

  const { isDark } = useDarkMode();
  const { data: countries } = useCountries();

  const handleChange = (event: ChangeEvent | any) => {
    const { name, value } = event.target;

    setSearch((prevState: { searchTerm: string; filterTerm: string }) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const resetRegionFilter = () => {
    setSearch((prevState: { searchTerm: string; filterTerm: string }) => ({
      ...prevState,
      filterTerm: '',
    }));
  };

  /* Logic for searching for countries by name and returning a new array  of countries that meet condition */
  const filteredCountries = countries?.filter((country) =>
    country.name.toLowerCase().includes(search.searchTerm.toLowerCase())
  );
  //* Logic for filtering countries by region and returning a new array  of countries that meet condition */
  const regionCountries = countries?.filter((country) =>
    country.region.toLowerCase().includes(search.filterTerm.toLowerCase())
  );

  const searchedCountries = filteredCountries?.map((country) => {
    return <CountryItem key={country.numericCode} country={country} />;
  });

  const countriesByRegion = regionCountries?.map((country) => {
    return <CountryItem key={country.numericCode} country={country} />;
  });

  return (
    <>
      <Search
        search={search}
        handleChange={handleChange}
        resetRegionFilter={resetRegionFilter}
      />
      <motion.div className="countries">
        <AnimatePresence>
          {search.filterTerm === '' ? searchedCountries : countriesByRegion}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Country;
