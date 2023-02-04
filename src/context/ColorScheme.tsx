import { ReactNode, createContext, useState } from 'react';

export const ColorSchemeContext = createContext<{
  isDark: boolean;
  toggle: () => void;
}>({ isDark: false, toggle: () => {} });

export const ColorSchemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  const toggle = () => {
    setIsDark(!isDark);
  };

  return (
    <ColorSchemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ColorSchemeContext.Provider>
  );
};
