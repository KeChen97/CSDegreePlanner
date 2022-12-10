import React from "react";
import PathItem from "./PathItem";
import PropTypes from "prop-types";

// Jerry Asala
export default function Path({ name, courses, courseNames }) {
  return (
    <>
      <div className="col">
        <div className="card">
          <div className="badge rounded-pill text-bg-secondary m-2">{name}</div>
          <div className="card-body">
            <PathItem courses={courses(name)} courseNames={courseNames} />
          </div>
        </div>
      </div>
    </>
  );
}

Path.prototype = {
  name: PropTypes.string.isRequired,
  courses: PropTypes.func,
  courseNames: PropTypes.func,
};
