import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/pro-regular-svg-icons";

export const RatingBadge = () => {
  return (
    <div className="rating-badge flex align-center">
      <span className="bounding-24">
        <FontAwesomeIcon icon={faStar} />
      </span>
      <p className="rating">8.0</p>
    </div>
  );
};
