import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function CreatePlan({ onClick }) {
  return (
    <>
      <div className="d-grid">
        <button
          className="w-100 btn btn-success bg-success bg-gradient"
          type="button"
          onClick={() => onClick()}
        >
          Create Plan
        </button>
      </div>
    </>
  );
}

CreatePlan.prototype = {
  onClick: PropTypes.func,
};
