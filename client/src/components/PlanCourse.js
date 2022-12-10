import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function PlanCourse({ code, getName, semester }) {
  return <div className="card-body">{`${code} - ${getName}`}</div>;
}

PlanCourse.prototype = {
  code: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
};
