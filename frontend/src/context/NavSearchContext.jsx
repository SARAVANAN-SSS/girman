import { createContext, useState } from 'react';

export const NavSearchContext = createContext();

export const NavSearchProvider = ({ children }) => {
  const [navSearchValue, setNavSearchValue] = useState('');

  return (
    <NavSearchContext.Provider value={{ navSearchValue, setNavSearchValue }}>
      {children}
    </NavSearchContext.Provider>
  );
};
