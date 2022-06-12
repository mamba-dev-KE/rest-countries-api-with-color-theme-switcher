import React from "react";
import { motion } from "framer-motion";

import CountryStats from "./CountryStats.jsx";
import { useNavigate } from "react-router-dom";

const CountryItem = ({ isDark, country }) => {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      layout
      className={isDark ? `dark-country country` : `country`}
      onClick={() => navigate(`/country/${country.name.toLowerCase()}`)}
    >
      <motion.img
        className="country__flag"
        src={country.flags.svg}
        alt={country.name}
      />
      <motion.div className="country__info">
        <motion.h4 className="country__name">{country.name}</motion.h4>
        <CountryStats country={country} />
      </motion.div>
    </motion.div>
  );
};

export default CountryItem;
