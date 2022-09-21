import React from "react";
import { Link } from "react-router-dom";

import { MOVIE_PAGE } from "../../constants";
import { CardPoster, CardHeader } from "../interface";

export const MovieCard = ({ poster, movieTitle, movieGenre, rating }) => {
  return (
    <Link to={MOVIE_PAGE} className="movie-card flex flex-col">
      <CardPoster movieImg={poster} movieRating={rating} />
      <CardHeader movieTitle={movieTitle} movieGenre={movieGenre}/>
    </Link>
  );
};
