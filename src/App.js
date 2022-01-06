import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import CountryDetails from "./components/Country/CountryDetails";
import NotFound from "./pages/NotFound/NotFound";

import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
	const [countriesData, setCountries] = useState([]);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		axios.get(`https://restcountries.com/v2/all`).then((res) => {
			const data = res.data;
			setCountries(data);
		});
	}, []);

	const handleIsDark = () => {
		setIsDark((prevState) => !prevState);
	};

	return (
		<>
			<Header isDark={isDark} handleIsDark={handleIsDark} />

			<main id="main" className={isDark ? `dark-content main` : `main`}>
				<div className={isDark ? `dark-container container` : `container`}>
					<Routes>
						<Route
							path="/"
							element={
								<Country countriesData={countriesData} isDark={isDark} />
							}
						></Route>
						<Route
							path="/country/:id"
							element={<CountryDetails isDark={isDark} />}
						/>
						<Route path="*" element={<NotFound isDark={isDark} />} />
					</Routes>
				</div>
				<a href="#main" className="scroll-up">
					<i
						className={
							isDark ? `dark-fas fas fa-chevron-up` : `fas fa-chevron-up`
						}
					></i>
				</a>
			</main>
		</>
	);
};

export default App;
