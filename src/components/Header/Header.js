import "./Header.css";

const Header = ({ isDark, handleIsDark }) => {
	return (
		<header className={isDark ? `dark-header header` : `header`}>
			<h2 className="logo">Where in the world?</h2>
			{isDark ? (
				<h3 className="dark-mode-icon" onClick={handleIsDark}>
					<i className="fas fa-sun"></i> Light Mode
				</h3>
			) : (
				<h3 className="dark-mode-icon" onClick={handleIsDark}>
					<i className="far fa-moon"></i> Dark Mode
				</h3>
			)}
		</header>
	);
};

export default Header;
