import React from "react";
import "../style/SearchBar.css";

const SearchBar = ({ value, onChange, placeholder = "Search posts..." }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;