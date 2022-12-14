import React from "react";
import { faStar } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

const propTypes = {
  movieRating: PropTypes.number,
};

const defaultProps = {
  movieRating: 0.0,
};

export const RatingBadge = ({ movieRating }) => {
  return (
    <div className="rating-badge flex align-center">
      <span className="bounding-24">
        <FontAwesomeIcon icon={faStar} />
      </span>
      <p className="rating">{movieRating}</p>
    </div>
  );
};

RatingBadge.propTypes = propTypes;
RatingBadge.defaultProps = defaultProps;
