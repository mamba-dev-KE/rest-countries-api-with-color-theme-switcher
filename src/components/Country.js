import { useState } from "react";
import CountryStats from "./CountryStats";

const Country = ({ countriesData, isDark }) => {
	const [search, setSearch] = useState("");
	const [regionFilter, setRegionFilter] = useState("");

	const filteredCountries = countriesData.filter((country) =>
		country.name.toLowerCase().includes(search.toLowerCase())
	);

	const regionCountries = countriesData.filter((country) =>
		country.region.toLowerCase().includes(regionFilter.toLowerCase())
	);

	const countryItems = filteredCountries.map((country) => {
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

	const countryItemsByRegion = regionCountries.map((country) => {
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

	const handleSearchChange = (event) => {
		setSearch(event.target.value);
	};

	const handleRegionChange = (event) => {
		setRegionFilter(event.target.value);
	};

	return (
		<>
			<div className="countries" style={{ color: "white" }}>
				<input
					type="search"
					name="searchTerm"
					value={search.searchTerm}
					onChange={handleSearchChange}
					className={isDark ? "dark-search search" : "search"}
					placeholder="Search for a country"
				/>
				<select
					name="filter"
					value={search.searchTerm}
					onChange={handleRegionChange}
					className={isDark ? "dark-filter filter" : "filter"}
					placeholder="Filter by Region"
				>
					<option>Africa</option>
					<option>America</option>
					<option>Asia</option>
					<option>Europe</option>
					<option>Oceania</option>
				</select>
				{regionFilter === "" ? countryItems : countryItemsByRegion}
			</div>
		</>
	);
};

export default Country;
