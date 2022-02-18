import React from "react";
import { motion } from "framer-motion";

import CountryStats from "./CountryStats";
import { useNavigate } from "react-router-dom";

const CountryItem = ({ isDark, country }) => {
	const navigate = useNavigate();
	return (
		<motion.div
			animate={{ opacity: 1, }}
      		initial={{ opacity: 0, }}
      		exit={{ opacity: 0, }}
      		transition={{ duration: 0.2 }}
      		layout
			className={isDark ? `dark-country country` : `country`}
			onClick={() => navigate(`/country/${country.name.toLowerCase()}`)}
		>
			<img
				className="country__flag"
				src={country.flags.svg}
				alt={country.name}
			/>
			<div className="country__info">
				<h4 className="country__name">{country.name}</h4>
				<CountryStats country={country} />
			</div>
		</motion.div>
	);
};

export default CountryItem;
