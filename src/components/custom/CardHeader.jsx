import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

import { genresSelector } from "../../selectors/genre.selectors";

const propTypes = {
  movieTitle: PropTypes.string,
  movieGenre: PropTypes.arrayOf(PropTypes.number),
};

const defaultProps = {
  movieTitle: "Movie title",
  movieGenre: [],
};

export const CardHeader = ({ movieTitle, movieGenre }) => {
  const genres = useSelector(genresSelector);
  const mapGenre = (id) => {
    const { name } = genres.find(({ id: genreId }) => genreId === id);

    return name;
  };

  return (
    <header className="card-header flex flex-col flex-1 gap-8">
      <h2 className="card-header__title">{movieTitle}</h2>
      <p className="card-header__subtitle">
        {movieGenre.map(mapGenre).join(", ")}
      </p>
    </header>
  );
};

CardHeader.propTypes = propTypes;
CardHeader.defaultProps = defaultProps;
