import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function CreatePlan({ onClick }) {
  return (
    <>
      <div className="d-grid">
        <button
          className="w-100 btn createBtn btn-success bg-success"
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
