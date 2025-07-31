import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchFilter } from '../../store/slices/pokemonSlice';
import './SearchBar.css';

function SearchBar() {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.pokemon.filters.search);
  
  const handleSearchChange = (e) => {
    dispatch(setSearchFilter(e.target.value));
  };

  const clearSearch = () => {
    dispatch(setSearchFilter(''));
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <div className="search-icon">
          🔍
        </div>
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={searchValue}
          onChange={handleSearchChange}
          className="search-input"
        />
        {searchValue && (
          <button 
            onClick={clearSearch}
            className="clear-search-btn"
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;