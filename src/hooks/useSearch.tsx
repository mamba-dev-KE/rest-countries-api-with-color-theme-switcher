import { SearchContext } from 'context';
import { useContext } from 'react';

export const useSearch = () => useContext(SearchContext);
