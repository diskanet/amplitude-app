import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { MOVIE_PAGE } from "../../constants";
import { CardPoster, CardHeader } from "../interface";

const propTypes = {
  poster: PropTypes.string,
  movieTitle: PropTypes.string,
  movieGenre: PropTypes.string,
  rating: PropTypes.number,
};

const defaultProps = {
  poster: "",
  movieTitle: "",
  movieGenre: "",
  rating: 0.0,
};

export const MovieCard = ({
  id: movieId,
  poster,
  movieTitle,
  movieGenre,
  rating,
}) => {
  return (
    <Link to={`${MOVIE_PAGE}/${movieId}`} className="movie-card flex flex-col">
      <CardPoster movieImg={poster} movieRating={rating} />
      <CardHeader movieTitle={movieTitle} movieGenre={movieGenre} />
    </Link>
  );
};

MovieCard.propTypes = propTypes;
MovieCard.defaultProps = defaultProps;
