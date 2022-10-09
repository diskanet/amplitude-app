import React from "react";
import { faBookmark } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {};

const defaultProps = {};

export const SaveButtonMovie = () => {
  return (
    <button
      type="button"
      className="bookmark-btn inline-flex align-center justify-center gap-8"
    >
      <FontAwesomeIcon icon={faBookmark} />
      <span>Add to favorite</span>
    </button>
  );
};

SaveButtonMovie.propTypes = propTypes;
SaveButtonMovie.defaultProps = defaultProps;
