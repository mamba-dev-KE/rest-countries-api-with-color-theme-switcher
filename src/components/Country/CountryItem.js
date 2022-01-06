import React from "react";

import CountryStats from "./CountryStats";
import { useNavigate } from "react-router-dom";

const CountryItem = ({ isDark, country }) => {
	const navigate = useNavigate();
	return (
		<div
			className={isDark ? `dark-country country` : `country`}
			onClick={() => navigate(`/country/${country.name.toLowerCase()}`)}
		>
			<img className="country__flag" src={country.flags.svg} alt="flag" />
			<div className="country__info">
				<h4 className="country__name">{country.name}</h4>
				<CountryStats country={country} />
			</div>
		</div>
	);
};

export default CountryItem;
