import React, { useContext } from 'react';
import { SearchBar } from './SearchBar';
import { SearchContext } from './SearchContext';

export function SearchTicker() {
  const { search, setSearch, onSearch } = useContext(SearchContext);

  return (
    <SearchBar search={search} setSearch={setSearch} onSearch={onSearch} />
  );
}
