import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/pro-regular-svg-icons";

export const BookmarkButton = () => {
  return (
    <button className="bookmark-btn flex align-center gap-4">
      <span className="bounding-24">
        <FontAwesomeIcon icon={faBookmark} />
      </span>
    </button>
  );
};