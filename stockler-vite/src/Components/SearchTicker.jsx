import React, { useContext } from 'react';
import { SearchBar } from './SearchBar';
import { SearchContext } from './SearchContext';
import { useNavigate } from 'react-router-dom';

export function SearchTicker() {
  const { search, setSearch, onSearch } = useContext(SearchContext);
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch();
    navigate('/stocks');
  };

  return (
    <SearchBar search={search} setSearch={setSearch} onSearch={handleSearch} />
  );
}
