import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MOVIE_PAGE } from "../../constants";
import { CardHeader, CardPoster } from "../custom";

const propTypes = {
  poster: PropTypes.string,
  movieTitle: PropTypes.string,
  movieGenres: PropTypes.arrayOf(PropTypes.number),
  rating: PropTypes.number,
  id: PropTypes.number,
};

const defaultProps = {
  poster: "",
  movieTitle: "",
  movieGenres: [],
  rating: 0.0,
  id: 0,
};

export const MovieCard = ({
  id: movieId,
  poster,
  movieTitle,
  movieGenres,
  rating,
}) => {
  return (
    <Link to={`${MOVIE_PAGE}/${movieId}`} className="movie-card flex flex-col">
      <CardPoster movieImg={poster} movieRating={rating} />
      <CardHeader movieTitle={movieTitle} movieGenre={movieGenres} />
    </Link>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;
