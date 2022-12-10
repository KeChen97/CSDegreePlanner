import React from "react";
import PopulateCourses from "./PopulateCourses";
import CreatePlan from "./CreatePlan";
import PropTypes from "prop-types";

// Jerry Asala
export default function CreateDegreePlan({ planCount, handlePlanState }) {
  const createPlan = () => {
    let plans = [];
    const selectedCourses = document.querySelectorAll(".form-select");

    plans.push({ pos: planCount() });

    selectedCourses.forEach((course) => {
      plans.push({
        code: course.value,
        semester: course.parentElement.className,
      });
    });

    let res;
    const newPlan = async () => {
      try {
        res = await fetch("./createPlan", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(plans),
        });
        if (res.ok) {
          res = await res.json();
          console.log(res.msg);
        }
      } catch (e) {
        console.log(e);
      }
    };
    newPlan();
    handlePlanState();
  };

  return (
    <>
      <div className="card card-body">
        <div className="sem-one" id="one">
          <p className="fw-bold badge rounded-pill text-bg-secondary m-2">
            Semester I:
          </p>
          <div className="one">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="one">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-two" id="two">
          <p className="fw-bold badge rounded-pill text-bg-secondary m-2">
            Semester II:
          </p>
          <div className="two">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="two">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-three" id="three">
          <p className="fw-bold badge rounded-pill text-bg-secondary m-2">
            Semester III:
          </p>
          <div className="three">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="three">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-four">
          <p className="fw-bold badge rounded-pill text-bg-secondary m-2">
            Semester IV:
          </p>
          <div className="four">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="four">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-five">
          <p className="fw-bold badge rounded-pill text-bg-secondary m-2">
            Semester V:
          </p>
          <div className="five">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="five">
            <select className="form-select create-plan text-center">
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <CreatePlan onClick={createPlan} />
      </div>
      <PopulateCourses />
    </>
  );
}

CreateDegreePlan.prototype = {
  planCount: PropTypes.func,
  handlePlanState: PropTypes.func,
};
