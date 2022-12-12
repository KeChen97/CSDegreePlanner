import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function UsePlan({ onClick }) {
  return (
    <button
      className="w-100 btn btn-success bg-success btn-block"
      type="button"
      onClick={() => onClick()}
    >
      Use Recommendation
    </button>
  );
}

UsePlan.prototype = {
  onClick: PropTypes.func.isRequired,
};
