import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function DeletePlan({ pos, deletePlan }) {
  return (
    <button
      onClick={() => deletePlan(pos)}
      className="w-100 btn btn-danger bg-danger bg-gradient"
      type="button"
    >
      Delete Plan
    </button>
  );
}

DeletePlan.prototype = {
  pos: PropTypes.number.isRequired,
  delePlan: PropTypes.func,
};
