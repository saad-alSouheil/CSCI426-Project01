import React from "react";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ padding: "8px", width: "250px", marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
