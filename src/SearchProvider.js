import React, { createContext, useContext, useReducer } from "react";

export const SearchContext = createContext();

export const SearchProvider = ({ reducer, initialState, children }) => (
  <SearchContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </SearchContext.Provider>
);

export const useSearchValue = () => useContext(SearchContext);
