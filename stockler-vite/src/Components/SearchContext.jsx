import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);
  const [overview, setOverview] = useState({});
  const [searchError, setSearchError] = useState(false);

  const apiUrl = import.meta.env.VITE_API_URL

  const onSearch = () => {
    fetch(`${apiUrl}/ticker/${search.toUpperCase()}`)
      .then(response => response.json())
      .then(data => {
        setOverview(data.overview);
        const formattedData = data.data.map(data => ({
          ...data,
          Date: new Date(data.Date)
        }));
        setDatas(formattedData);
        setSearchError(false);
      })
      .catch(err => {
        setSearchError(true);
        console.log("Search no results with error : ", err);
      });
  };

  return (
    <SearchContext.Provider value={{ search, setSearch, datas, overview, searchError, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
