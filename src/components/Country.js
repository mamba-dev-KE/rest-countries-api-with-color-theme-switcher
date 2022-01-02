import { useState } from "react";
import CountryItem from "./CountryItem";
import Search from "./Search";

const Country = ({ countriesData, isDark }) => {
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
	const filteredCountries = countriesData.filter((country) =>
		country.name.toLowerCase().includes(search.searchTerm.toLowerCase())
	);
	//* Logic for filtering countries by region and returning a new array  of countries that meet condition */
	const regionCountries = countriesData.filter((country) =>
		country.region.toLowerCase().includes(search.filterTerm.toLowerCase())
	);

	/* Creating countries using the array of search items */
	const searchedCountries = filteredCountries.map((country) => {
		return (
			<CountryItem
				isDark={isDark}
				country={country}
				key={country.numericCode}
			/>
		);
	});

	/* Creating countries using the array of search items */
	const countriesByRegion = regionCountries.map((country) => {
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
			<div className="countries" style={{ color: "white" }}>
				{search.filterTerm === "" ? searchedCountries : countriesByRegion}
			</div>
		</>
	);
};

export default Country;
