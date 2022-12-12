import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function ClearFields({ onClick }) {
  return (
    <button
      className="w-100 btn cancelBtn bg-gradient"
      onClick={() => onClick()}
    >
      Clear Fields
    </button>
  );
}

ClearFields.prototype = {
  onClick: PropTypes.func,
};
