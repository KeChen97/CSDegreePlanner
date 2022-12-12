import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function UsePlan({ onClick }) {
  return (
    <button
      className="w-100 btn btn-success bg-success bg-gradient btn-block"
      type="button"
      onClick={() => onClick()}
    >
      Use Plan
    </button>
  );
}

UsePlan.prototype = {
    onClick: PropTypes.func.isRequired,
};
