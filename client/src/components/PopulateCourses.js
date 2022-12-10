import React, { useEffect, useState } from "react";


// Jerry Asala
export default function PopulateCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getCourseNames = async () => {
      const res = await fetch("/getCourseName");
      const data = await res.json();

      setCourses(data.courses);
    };
    getCourseNames();
  }, []);

  const populateOptions = (course) => {
    const createPlanSelects = document.querySelectorAll("select.create-plan");

    createPlanSelects.forEach((div) => {
      for (const child of div.children) {
        if (child.value === course.code) {
          return;
        }
      }
      const opt = document.createElement("option");
      opt.label = `${course.code} - ${course.name}`;
      opt.value = course.code;
      div.appendChild(opt);
    });
  };

  return <>{courses.map((course) => populateOptions(course))}</>;
}
