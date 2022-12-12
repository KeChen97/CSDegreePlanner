import React, { useEffect, useState } from "react";
import Path from "./Path";
import "../css/Paths.css"
import PropTypes from "prop-types";

// Jerry Asala
export default function Paths({ recData, pos, pCourses }) {
  const [path, setPath] = useState([]);
  const [courses, setCourses] = useState([]);
  const [arrOfCourseNames, setArrOfCourseNames] = useState([]);

  //console.log("ar of courses from within paths func..", c)
  useEffect(() => {
    const getPath = async () => {
      const res = await fetch("/getPaths");
      const data = await res.json();
      let allPaths = [];

      if (data) {
        data.paths.forEach((path) => {
          allPaths.push(path.name);
        });
      }

      setPath(allPaths);
    };
    getPath();
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("/getPathRecs");
      const data = await res.json();

      setCourses(data.pathRecs);
    };
    getCourses();
  }, []);

  const pathCourses = function getCourse(path) {
    let arrOfCourses;
    courses.forEach((course) => {
      if (course.courses[0].path === path) {
        arrOfCourses = course.courses.slice(1);
      }
    });
    //console.log("ar of courses from within paths func..", arrOfCourses)
    return arrOfCourses;
  };

  useEffect(() => {
    const getArrOfCourseName = async () => {
      let res;
      try {
        res = await fetch("/getCourseName");
        const data = await res.json();
        if (data) {
          setArrOfCourseNames(data.courses);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getArrOfCourseName();
  }, []);

  function getCourseNameArr() {
    let courseNameArr;
    courseNameArr = arrOfCourseNames;
    return courseNameArr;
  }

  return (
    <>
      <div className="row path-div">
          <Path
            name={recData}
            key={pos}
            pathCourses={pCourses}
            courses={pCourses}
            courseNames={getCourseNameArr}
          />
      </div>
    </>
  );
}

Paths.prototype = {
  recData: PropTypes.string.isRequired,
  pos: PropTypes.number.isRequired,
  pCourses: PropTypes.array.isRequired
};
