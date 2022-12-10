import PlanCourse from "./PlanCourse";
import DeletePlan from "./DeletePlan";
import PropTypes from "prop-types";

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

    dep();
  };

  const indx = index + 1;
  return (
    <div className="col">
      <div className="card card-body text-center">
        <p className="badge rounded-pill text-bg-secondary m-2">Plan {indx}</p>
        {courses.map((course, index) => (
          <PlanCourse
            code={course.code}
            getName={arrOfCourses(course.code)}
            semester={course.semester}
            key={index}
          />
        ))}
        <DeletePlan pos={pos} deletePlan={deletePlan} />
      </div>
    </div>
  );
}

Plan.prototype = {
  courses: PropTypes.array.isRequired,
  arrOfCourses: PropTypes.func.isRequired,
  dep: PropTypes.func.isRequired,
};
