import { Suspense, useContext } from 'react';
import { Route, RouterProvider } from 'react-router-dom';
import { useCountries } from 'hooks';
import { ColorSchemeContext } from './context/ColorScheme';
import { Header, Country, CountryDetails, NotFound } from 'components';
import {
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Country />} />
      <Route path="/country/:id" element={<CountryDetails />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  // const { isLoading, error } = useCountries();
  const { isDark } = useContext(ColorSchemeContext);

  // if (isLoading)
  //   return (
  //     <main id="main" className={isDark ? `dark-content main` : `main`}>
  //       <div style={{ textAlign: 'center', fontSize: '2rem', color: 'tomato' }}>
  //         loading...
  //       </div>
  //     </main>
  //   );

  // if (error)
  //   return (
  //     <main id="main" className={isDark ? `dark-content main` : `main`}>
  //       <div style={{ textAlign: 'center', fontSize: '2rem', color: 'red' }}>
  //         {error.message}
  //       </div>
  //     </main>
  //   );

  return (
    <>
      <Header />
      <main id="main" className={isDark ? `dark-content main` : `main`}>
        <div className={isDark ? `dark-container container` : `container`}>
          <ErrorBoundary fallback={<p>An error occurred...</p>}>
            <Suspense fallback={<p>Loading.......</p>}>
              <RouterProvider router={router} />
            </Suspense>
          </ErrorBoundary>
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
