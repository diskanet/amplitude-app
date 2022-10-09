import React from "react";
import PropTypes from "prop-types";

import { SaveButtonCard } from "../interface/SaveButtonCard";

import { RatingBadge } from "./RatingBadge";

// import ukraine from "../../assets/img/ukraine.jpeg";

const propTypes = {
  movieImg: PropTypes.string,
  movieRating: PropTypes.number,
};

const defaultProps = {
  movieImg: "",
  movieRating: 0.0,
};

export const CardPoster = ({ movieImg, movieRating }) => {
  return (
    <div className="card-poster-container flex">
      <img src={movieImg} alt={movieImg} className="poster-img" />
      <div className="hover-row flex justify-between w-full">
        <RatingBadge movieRating={movieRating} />
        <SaveButtonCard />
      </div>
    </div>
  );
};

CardPoster.propTypes = propTypes;
CardPoster.defaultProps = defaultProps;
