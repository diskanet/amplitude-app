import React from "react";
import { useNavigate } from "react-router-dom";

import { HOME_PAGE } from "@constants";

export const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(HOME_PAGE);
  };

  return (
    <div className="content-view">
      <h2>Not Found</h2>
      <button type="button" className="primary-default" onClick={handleClick}>
        Next Page
      </button>
    </div>
  );
};
