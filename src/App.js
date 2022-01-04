import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import Loading from "./components/Loading/Loading";

import { useState, useEffect } from "react";

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
		<>
			<Header isDark={isDark} handleIsDark={handleIsDark} />
			<main className={isDark ? `dark-content main` : `main`}>
				<div className={isDark ? `dark-container container` : `container`}>
					{countriesData.length > 0 ? (
						<>
							<Country countriesData={countriesData} isDark={isDark} />
						</>
					) : (
						<Loading />
					)}
				</div>
			</main>
		</>
	);
};

export default App;
