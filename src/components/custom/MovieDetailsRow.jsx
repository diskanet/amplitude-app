import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  MovieDetailsRow: PropTypes.number,
};

const defaultProps = {
  MovieDetailsRow: 0.0,
};

export const MovieDetailsRow = ({param, }) => {
  return (
    <div className="movie-details__row flex gap-8">
      <h3 className="movie-details__label">Rating:</h3>
      <p className="movie-details__value">
        <span className="rating">8.0</span>
      </p>
    </div>
  );
};

MovieDetailsRow.propTypes = propTypes;
MovieDetailsRow.defaultProps = defaultProps;
