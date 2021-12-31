import { useState } from "react";

const Search = ({ isDark }) => {
	const [search, setSearch] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSearch((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	return (
		<div className="form-data">
			{/* <i className="fas fa-search"></i> */}
			<input
				type="search"
				name="searchTerm"
				value={search.searchTerm}
				onChange={handleChange}
				className={isDark ? "dark-search search" : "search"}
				placeholder="Search for a country"
			/>

			<select
				name="filter"
				value={search.searchTerm}
				onChange={handleChange}
				className={isDark ? "dark-filter filter" : "filter"}
				placeholder="Filter by Region"
			>
				<option>Africa</option>
				<option>America</option>
				<option>Asia</option>
				<option>Europe</option>
				<option>Oceania</option>
			</select>

			<p style={{ color: "white" }}>{search.searchTerm}</p>
		</div>
	);
};

export default Search;
