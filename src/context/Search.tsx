import { ChangeEvent, ReactNode, createContext, useState } from 'react';

export const SearchContext = createContext<{
  search: string;
  onChange: (e: ChangeEvent) => void;
}>({ search: '', onChange: () => {} });

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [search, setSearch] = useState<string>('');

  const onChange = (e: ChangeEvent) => {
    setSearch(e.currentTarget.value as string);
  };

  return (
    <SearchContext.Provider value={{ search, onChange }}>
      {children}
    </SearchContext.Provider>
  );
};
