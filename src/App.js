import Header from "./components/Header";
import Country from "./components/Country";
import Loading from "./components/Loading";
import CountryDetails from "./components/CountryDetails";

import { useState, useEffect } from "react";
// import {
// 	BrowserRouter as Router,
// 	Switch,
// 	Route,
// 	Link,
// 	Routes,
// } from "react-router-dom";

const App = () => {
	const [countriesData, setCountries] = useState([]);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		async function getCountries() {
			const response = await fetch("https://restcountries.com/v2/all");
			const data = await response.json();

			setCountries(data);
		}
		getCountries();
	}, []);

	const handleIsDark = () => {
		setIsDark((prevState) => !prevState);
	};

	return (
		<div className={isDark ? `dark-main container` : `container`}>
			{countriesData.length > 0 ? (
				<>
					<Header isDark={isDark} handleIsDark={handleIsDark} />
					<Country countriesData={countriesData} isDark={isDark} />
				</>
			) : (
				<Loading />
			)}
		</div>
	);
};

export default App;
