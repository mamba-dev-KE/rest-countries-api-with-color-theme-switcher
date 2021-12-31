import Header from "./components/Header";
import Search from "./components/Search";
import Country from "./components/Country";
import { useState, useEffect } from "react";
import "./index.css";

const App = () => {
	const [countriesData, setCountries] = useState([]);

	useEffect(() => {
		async function getCountries() {
			const response = await fetch("https://restcountries.com/v2/all");
			const data = await response.json();

			setCountries(data);
		}
		getCountries();
	}, []);

	return (
		<div className="container">
			<Header />
			<Search />
			<main className="countries">
				<Country countriesData={countriesData} />
			</main>
		</div>
	);
};

export default App;
