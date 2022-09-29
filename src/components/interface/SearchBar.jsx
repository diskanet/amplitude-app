import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  onChange: PropTypes.func,
  inputValue: PropTypes.string,
};

const defaultProps = {
  onChange: () => {},
  inputValue: "",
};

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

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;
