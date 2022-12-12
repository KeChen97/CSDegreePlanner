import PlanCourse from "./PlanCourse";
import DeletePlan from "./DeletePlan";
import PropTypes from "prop-types";
import "../css/Plan.css"

// Jerry Asala
export default function Plan({ courses, index, pos, arrOfCourses, dep }) {
  const deletePlan = async (pos) => {
    let res;
    let ind = { index: pos };

    try {
      res = await fetch("/deletePlan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ind),
      });
      if (res.ok) {
        res = await res.json();
      }
    } catch (e) {
      console.log(e);
    }    
  };

  const del = async (pos) => {
    await deletePlan(pos)
    dep()
  }

  const indx = index + 1;
  return (
    <div className="col">
      <div className="plan-div">
        <p className="badge rounded-pill text-bg-secondary m-2">Plan {indx}</p>
        <div className="plan-wrapper">
        {courses.map((course, index) => (
          <PlanCourse
            code={course.code}
            getName={arrOfCourses(course.code)}
            semester={course.semester}
            key={index}
          />
        ))}
        </div>
        
        
        <div className="d-grip">
        <DeletePlan pos={pos} deletePlan={del} />
      </div>
      </div>
      
    </div>
  );
}

Plan.prototype = {
  courses: PropTypes.array.isRequired,
  index: PropTypes.number.isRequired,
  pos: PropTypes.number.isRequired,
  arrOfCourses: PropTypes.func.isRequired,
  dep: PropTypes.func.isRequired,
};
