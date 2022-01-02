import React from "react";
import "./Search.css";

const Search = ({ search, handleChange, isDark, resetRegionFilter }) => {
	return (
		<div className="search-container">
			<div className={isDark ? "dark-search-item search-item" : "search-item"}>
				<i className="fas fa-search"></i>
				<input
					type="search"
					name="searchTerm"
					value={search.searchTerm}
					onChange={handleChange}
					className={isDark ? "dark-search search" : "search"}
					placeholder="Search for a country..."
				/>
			</div>
			<select
				name="filterTerm"
				value={search.filterTerm}
				onChange={handleChange}
				className={isDark ? "dark-filter filter" : "filter"}
			>
				<option className="option">Filter by region</option>
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
