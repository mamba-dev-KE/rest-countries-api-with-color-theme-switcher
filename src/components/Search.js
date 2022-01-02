import React from "react";

const Search = ({ search, handleChange, isDark, resetRegionFilter }) => {
	return (
		<div className="search-container">
			<input
				type="search"
				name="searchTerm"
				value={search.searchTerm}
				onChange={handleChange}
				className={isDark ? "dark-search search" : "search"}
				placeholder="Search for a country"
			/>
			<select
				name="filterTerm"
				value={search.filterTerm}
				onChange={handleChange}
				className={isDark ? "dark-filter filter" : "filter"}
			>
				<option>Filter by region</option>
				<option>Africa</option>
				<option>America</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</select>
			{search.filterTerm && (
				<button onClick={resetRegionFilter}> Clear Region Filter</button>
			)}
		</div>
	);
};

export default Search;
