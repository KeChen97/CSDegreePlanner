import React from "react";
import PathDetail from "./PathDetail";
import PropTypes from "prop-types";

// Jerry Asala
export default function PathItem({ courses, courseNames }) {

  console.log("arrcourses..", courses)
  if (!courses) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {courses.map((course, index) => {
        if (course.name) {
          return (
            <div className="" key={index}>
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
  courseNames: PropTypes.func.isRequired,
};
