import React, { useReducer, useContext, createContext } from "react";

const initialState = {
  term: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

const searchContext = createContext();

export function ProvideSearch({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <searchContext.Provider value={{ state, dispatch }}>
      {children}
    </searchContext.Provider>
  );
}

export const useSearch = () => {
  return useContext(searchContext);
};

const useProvideSearch = () => {
  const { state, dispatch } = useSearch();
  const searchTerm = (term) => {
    dispatch({
      type: "SET_SEARCH",
      payload: term,
    });
  };
  return {
    state,
    searchTerm,
  };
};

export default useProvideSearch;
