import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  movieTitle: PropTypes.string,
  movieGenre: PropTypes.string,
};

const defaultProps = {
  movieTitle: "Movie title",
  movieGenre: "Genre1, genre2, genre3",
};

export const CardHeader = ({ movieTitle, movieGenre }) => {
  return (
    <header className="card-header flex flex-col flex-1 gap-8">
      <h2 className="card-header__title">{movieTitle}</h2>
      <p className="card-header__subtitle">{movieGenre}</p>
    </header>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
