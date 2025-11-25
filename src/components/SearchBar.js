import React from "react";
import "../style/SearchBar.css";

/**
 * A search bar component for filtering posts.
 * 
 * Props:
 *  - value: current search input value
 *  - onChange: function from parent to handle input changes  
 *  - placeholder:  placeholder text for the input  
 **/

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