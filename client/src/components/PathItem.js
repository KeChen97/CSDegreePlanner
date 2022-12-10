import React from "react";
import PathDetail from "./PathDetail";
import PropTypes from "prop-types";

// Jerry Asala
export default function PathItem({ courses, courseNames }) {
  if (!courses) {
    return (
      <div>
        <p>failed</p>
      </div>
    );
  }

  return (
    <>
      {courses.map((course, index) => {
        if (course.name) {
          return (
            <div className="card-body text-center" key={index}>
              <PathDetail
                code={course.name}
                names={courseNames()}
                semester={course.semester}
              />
            </div>
          );
        }
        return null;
      })}
    </>
  );
}

PathItem.prototype = {
  courses: PropTypes.array.isRequired,
  courseNames: PropTypes.func,
};
