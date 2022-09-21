import React from "react";
import PropTypes from "prop-types";

import { RatingBadge } from "./RatingBadge";
import { SaveButtonCard } from "../interface/SaveButtonCard";

// import ukraine from "../../assets/img/ukraine.jpeg";

const propTypes = {
  movieImg: PropTypes.string,
};

const defaultProps = {
  movieImg: "",
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
