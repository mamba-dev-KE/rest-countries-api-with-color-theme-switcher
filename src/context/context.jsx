import { createContext, useState } from 'react';

export const ColorSchemeContext = createContext();

export const ColorSchemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState('light');

  const handleIsDark = () => {
    setIsDark((prevState) => !prevState);
  };

  return (
    <ColorSchemeContext.Provider value={{ isDark, handleIsDark }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
