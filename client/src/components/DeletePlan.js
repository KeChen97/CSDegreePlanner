import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function DeletePlan({ pos, deletePlan }) {
  return (
    <button onClick={() => deletePlan(pos)} className="w-100 btn cancelBtn">
      Delete Plan
    </button>
  );
}

DeletePlan.prototype = {
  delePlan: PropTypes.func,
};
