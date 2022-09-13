import React from "react";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFilm } from "@fortawesome/pro-regular-svg-icons";

export const Button = ({ className,  buttonLabel }) => {
  return (
    <button className={className}>{buttonLabel}</button>
  );
};
