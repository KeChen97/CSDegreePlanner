import React, { useEffect, useState } from "react";
import Plan from "./Plan";
import PropTypes from "prop-types";
import "../css/Plans.css"

// Jerry Asala
export default function Plans({ numOfPlans, dep, data, repage }) {
  console.log("data is ..", data)
  const [arrOfCourses, setArrOfCourses] = useState([]);
  const [plans, setPlans] = useState([]);
  const [changePlans, setChangePlans] = useState([0]);

  const chngPlans = () => {
    const newPlans = [changePlans[0] + 1];
    setChangePlans(newPlans);
    console.log("I just called repage while deleting")
    repage(data[0].courses[0].pos)
  }

  useEffect(() => {
    const getPlans = async () => {
      const res = await fetch("/getUserPlans");
      const data = await res.json();

      setPlans(data.plans);
      console.log("these are the plans: ", data.plans);
    };
    getPlans();
    //repage()
  }, [dep, changePlans]);

  

  useEffect(() => {
    const getArrOfCourseName = async () => {
      let res;
      try {
        res = await fetch("/getCourseName");
        const data = await res.json();
        if (data) {
          setArrOfCourses(data.courses);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getArrOfCourseName();
  }, [dep, changePlans]);

  function getCourseName(code) {
    let courseName;
    arrOfCourses.forEach((course) => {
      if (course.code === code) {
        courseName = course.name;
      }
    });
    return courseName;
  }

  if (plans.length === 0) {
    return (
      <>
        <h4>No plan(s) to show</h4>
      </>
    );
  }

  return (
    
      <div className="row plan-row plan-div">
          {data.length > 0 && <Plan
            courses={data[0].courses.slice(1)}
            key={data[0].courses[0].pos}
            index={data[0].courses[0].pos}
            pos={data[0].courses[0].pos}
            arrOfCourses={getCourseName}
            dep={chngPlans}
          />}
          

      </div>
  );
}

Plans.prototype = {
  numOfPlans: PropTypes.func.isRequired,
  dep: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  repage: PropTypes.func.isRequired
};
