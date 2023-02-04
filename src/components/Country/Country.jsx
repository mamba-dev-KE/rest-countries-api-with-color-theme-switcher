import { Search, CountryItem } from "../../components";
import "./Country.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Country = ({ countries, isDark }) => {
  /* Unified state to manage both searching by name and filtering by region */
  const [search, setSearch] = useState({
    searchTerm: "",
    filterTerm: "",
  });

  /* Function that handles the event from search and region select */
  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /* Reset region filter logic */
  const resetRegionFilter = () => {
    setSearch((prevState) => ({
      ...prevState,
      filterTerm: "",
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

  /* Creating countries using the array of search items */
  const searchedCountries = filteredCountries?.map((country) => {
    return (
      <CountryItem
        isDark={isDark}
        country={country}
        key={country.numericCode}
      />
    );
  });

  /* Creating countries using the array of search items */
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
          {search.filterTerm === "" ? searchedCountries : countriesByRegion}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Country;
