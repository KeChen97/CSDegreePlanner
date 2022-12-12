import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function PlanCourse({ code, getName, semester }) {
  return <div className="">
            <div><strong><em>{`Semester ${semester}:`}</em></strong></div>
            <div className="text-center">{`${code} : ${getName}`}</div>
          </div>;
}

PlanCourse.prototype = {
  code: PropTypes.string.isRequired,
  getName: PropTypes.string.isRequired,
  semester: PropTypes.string.isRequired,
};
