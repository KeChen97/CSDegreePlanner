import React, { useEffect, useState } from "react";
import Plan from "./Plan";
import PropTypes from "prop-types";

// Jerry Asala
export default function Plans({ numOfPlans, dep }) {
  const [arrOfCourses, setArrOfCourses] = useState([]);
  const [plans, setPlans] = useState([]);
  const [changePlans, setChangePlans] = useState([0]);

  function chngPlans() {
    const newPlans = [changePlans[0] + 1];
    setChangePlans(newPlans);
  }

  useEffect(() => {
    const getPlans = async () => {
      const res = await fetch("/getUserPlans");
      const data = await res.json();

      setPlans(data.plans);
      console.log("these are the plans: ", data.plans);
    };
    getPlans();
  }, [dep, changePlans]);

  useEffect(() => {
    numOfPlans(plans.length);
    console.log("initially, plan length is: ", plans.length);
  }, [plans.length, numOfPlans]);

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
    <>
      <div className="row">
        {plans.map((plan, index) => (
          <Plan
            courses={plan.courses.slice(1)}
            key={index}
            index={plan.courses[0].pos}
            pos={plan.courses[0].pos}
            arrOfCourses={getCourseName}
            dep={chngPlans}
          />
        ))}
      </div>
    </>
  );
}

Plans.prototype = {
  numOfPlans: PropTypes.func.isRequired,
  dep: PropTypes.func.isRequired,
};
