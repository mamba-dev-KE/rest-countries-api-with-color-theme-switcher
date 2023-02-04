import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useCountries } from './hooks';
import { ColorSchemeContext } from './context/context';
import { Header, Country, CountryDetails, NotFound } from './components';

const App = () => {
  const { isLoading, isError, error } = useCountries();
  const { isDark } = useContext(ColorSchemeContext);

  if (isLoading)
    return (
      <main id="main" className={isDark ? `dark-content main` : `main`}>
        <div style={{ textAlign: 'center', fontSize: '2rem', color: 'tomato' }}>
          loading...
        </div>
      </main>
    );

  if (isError)
    return (
      <main id="main" className={isDark ? `dark-content main` : `main`}>
        <div style={{ textAlign: 'center', fontSize: '2rem', color: 'red' }}>
          {error.message}
        </div>
      </main>
    );

  return (
    <>
      <Header />
      <main id="main" className={isDark ? `dark-content main` : `main`}>
        <div className={isDark ? `dark-container container` : `container`}>
          <Routes>
            <Route path="/" element={<Country />} />
            <Route path="/country/:id" element={<CountryDetails />} />
            <Route path="*" element={<NotFound />} />
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