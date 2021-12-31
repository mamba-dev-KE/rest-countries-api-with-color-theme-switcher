import { useState } from "react";

const Search = () => {
	const [search, setSearch] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setSearch((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	return (
		<div>
			<input
				type="text"
				name="searchTerm"
				value={search.searchTerm}
				onChange={handleChange}
			/>
			<p style={{ color: "white" }}>{search.searchTerm}</p>
		</div>
	);
};

export default Search;
