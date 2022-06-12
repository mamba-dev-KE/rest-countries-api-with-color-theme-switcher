import { Header, Country, CountryDetails } from "./components";
import NotFound from "./pages/NotFound/NotFound";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useCountries } from "./hooks";

const App = () => {
  const { isLoading, error, data } = useCountries();
  const [isDark, setIsDark] = useState(false);

  const handleIsDark = () => {
    setIsDark((prevState) => !prevState);
  };

  if (isLoading) {
    return <div style={{ textAlign: "center" }}>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <>
      <Header isDark={isDark} handleIsDark={handleIsDark} />
      <main id="main" className={isDark ? `dark-content main` : `main`}>
        <div className={isDark ? `dark-container container` : `container`}>
          <Routes>
            <Route
              path="/"
              element={<Country data={data} isDark={isDark} />}
            ></Route>
            <Route
              path="/country/:id"
              element={<CountryDetails data={data} isDark={isDark} />}
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
