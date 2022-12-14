import React from "react";
import PathItem from "./PathItem";
import PropTypes from "prop-types";
import UsePlan from "./UsePlan";
import "../css/Path.css";

// Jerry Asala
export default function Path({ name, pathCourses, courses, courseNames }) {
  const pasteCourses = () => {
    const arrOfCourses = courses;
    const selectedCourses = document.querySelectorAll(".myform-select");
    console.log(selectedCourses);
    for (let i = 0; i < selectedCourses.length; i++) {
      let select = selectedCourses[i];
      select.value = arrOfCourses[i].name;
    }
  };

  return (
    <>
      <div className="col">
        <div className="plan-div">
          <div className="badge rounded-pill text-bg-secondary m-2">{name}</div>
          <div className="card-body">
            <PathItem courses={pathCourses} courseNames={courseNames} />
          </div>
          <div className="d-grip">
            <UsePlan
              pathName={name}
              getCourses={courses}
              onClick={pasteCourses}
            />
          </div>
        </div>
      </div>
    </>
  );
}

Path.prototype = {
  name: PropTypes.string.isRequired,
  pathCourses: PropTypes.array.isRequired,
  courses: PropTypes.func.isRequired,
  courseNames: PropTypes.func.isRequired,
};
