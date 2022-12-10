import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function DeletePlan({ pos, deletePlan }) {
  return (
    <button
      onClick={() => deletePlan(pos)}
      className="btn btn-danger bg-danger bg-gradient"
    >
      Delete Plan
    </button>
  );
}

DeletePlan.prototype = {
  delePlan: PropTypes.func,
};
