import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/pro-regular-svg-icons";

export const SaveButtonMovie = () => {
  return (
    <button className="bookmark-btn inline-flex align-center justify-center gap-8">
      <FontAwesomeIcon icon={faBookmark} />
      <span>Add to favorite</span>
    </button>
  );
};
