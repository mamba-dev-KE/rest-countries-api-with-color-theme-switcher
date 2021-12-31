import CountryStats from "./CountryStats";

const Country = ({ countriesData, isDark }) => {
	const countryItems = countriesData.map((country) => {
		return (
			<div
				className={isDark ? `dark-country country` : `country`}
				key={country.numericCode}
			>
				<img className="country__flag" src={country.flags.svg} alt="flag" />
				<div className="country__info">
					<h4 className="country__name">{country.name}</h4>
					<CountryStats country={country} />
				</div>
			</div>
		);
	});

	return (
		<div className="countries" style={{ color: "white" }}>
			{countryItems}
		</div>
	);
};

export default Country;
