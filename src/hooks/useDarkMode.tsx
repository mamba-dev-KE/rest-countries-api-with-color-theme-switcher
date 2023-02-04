import { useContext } from 'react';
import { ColorSchemeContext } from 'context/context';

const useDarkMode = () => useContext(ColorSchemeContext);

export default useDarkMode;