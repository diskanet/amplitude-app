import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/pro-regular-svg-icons";

export const Header = ({ onClick }) => {
  return (
    <header className="header w-full">
      <div className="wrapper h-full flex justify-between">
        <button onClick="/" className="logo flex align-center gap-8 h-full">
          <span className="logo__icon bounding-24">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <span className="logo__text">Amplitude</span>
        </button>
        <button
          onClick={onClick}
          className="bookmarks flex align-center h-full"
        >
          Bookmarks
        </button>
      </div>
    </header>
  );
};
