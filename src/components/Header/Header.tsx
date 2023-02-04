import { useDarkMode } from 'hooks';
import './Header.css';

const Header = () => {
  const { isDark, toggle } = useDarkMode();

  return (
    <header className={isDark ? `dark-header header` : `header`}>
      <div className="header-container">
        <h2 className="logo">Where in the world?</h2>
        {isDark ? (
          <h3 className="dark-mode-icon" onClick={toggle}>
            <i className="fas fa-sun"></i> Light Mode
          </h3>
        ) : (
          <h3 className="dark-mode-icon" onClick={toggle}>
            <i className="fas fa-moon"></i> Dark Mode
          </h3>
        )}
      </div>
    </header>
  );
};

export default Header;
