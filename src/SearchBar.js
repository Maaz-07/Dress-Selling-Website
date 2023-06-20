import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search..." />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default SearchBar;
