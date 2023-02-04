import { useContext } from 'react';
import { ColorSchemeContext } from 'context';

export const useDarkMode = () => useContext(ColorSchemeContext);

export default useDarkMode;
