import React from "react";
import CountryStats from "./CountryStats";

const CountryItem = ({ isDark, country }) => {
	return (
		<div className={isDark ? `dark-country country` : `country`}>
			<img className="country__flag" src={country.flags.svg} alt="flag" />
			<div className="country__info">
				<h4 className="country__name">{country.name}</h4>
				<CountryStats country={country} />
			</div>
		</div>
	);
};

export default CountryItem;
