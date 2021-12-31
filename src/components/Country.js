const Country = ({ countriesData }) => {
	const countryItems = countriesData.map((country) => {
		return (
			<div className="country" key={country.numericCode}>
				<img className="country__flag" src={country.flags.svg} alt="flag" />
				<div className="country__info">
					<h4 className="country__name">{country.name}</h4>
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
