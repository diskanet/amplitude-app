import React from "react";
import { faBookmark } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const propTypes = {};

const defaultProps = {};

export const SaveButtonCard = () => {
  return (
    <button
      type="button"
      className="bookmark-btn-small flex align-center gap-4"
    >
      <span className="bounding-24">
        <FontAwesomeIcon icon={faBookmark} />
      </span>
    </button>
  );
};

SaveButtonCard.propTypes = propTypes;
SaveButtonCard.defaultProps = defaultProps;
