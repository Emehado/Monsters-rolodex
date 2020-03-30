import React from "react";

const SearchBox = ({ placeholder, handleChange }) => (
  <input
    onChange={handleChange}
    type="search"
    placeholder={placeholder}
    className="form-control m-2 text-center"
  />
);

export default SearchBox;
