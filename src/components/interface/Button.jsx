import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  className: PropTypes.string,
  buttonLabel: PropTypes.string,
};

const defaultProps = {
  className: "",
  buttonLabel: "Label",
};

export const Button = ({ className, buttonLabel }) => {
  return (
    <button type="button" className={className}>
      {buttonLabel}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
