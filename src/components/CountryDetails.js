const CountryDetails = () => {
	return (
		<div>
			{/* <img src={country.flags.svg} /> */}
			<h4>Country Name</h4>
			<ul>
				<li>Native Name:</li>
				<li>Population:</li>
				<li>Region:</li>
				<li>Sub Region:</li>
				<li>Capital:</li>
				<ul>
					<li>Top Level Domain:</li>
					<li>Currencies:</li>
					<li>Languages:</li>
				</ul>
			</ul>
			<div className="border-countries">
				<span>France</span>
				<span>Germany</span>
				<span>Netherlands</span>
			</div>
		</div>
	);
};

export default CountryDetails;
