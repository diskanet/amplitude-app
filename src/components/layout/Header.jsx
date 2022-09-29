import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/pro-regular-svg-icons";

import { HOME_PAGE, BOOKMARKS_PAGE } from "../../constants";

const propTypes = {};

const defaultProps = {};

export const Header = () => {
  return (
    <header className="header w-full">
      <div className="wrapper h-full flex justify-between">
        <Link to={HOME_PAGE} className="logo flex align-center gap-8 h-full">
          <span className="logo__icon bounding-24">
            <FontAwesomeIcon icon={faFilm} />
          </span>
          <span className="logo__text">Amplitude</span>
        </Link>
        <Link
          to={BOOKMARKS_PAGE}
          className="bookmarks flex align-center h-full"
        >
          Bookmarks
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
