import React from "react";

export const SearchBar = ({ onChange, inputValue }) => {
  return (
    <form action="" className="search-bar inline-block">
      <input
        type="search"
        className="search-field flex ph-16"
        placeholder="Write movie name..."
        onChange={onChange}
        value={inputValue}
      />
    </form>
  );
};
