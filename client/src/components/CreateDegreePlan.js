import React from "react";
import PopulateCourses from "./PopulateCourses";
import CreatePlan from "./CreatePlan";
import PropTypes from "prop-types";
import ClearFields from "./ClearFields";
import "../css/CreateDegreePlan.css";

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

  const clearFields = () => {
    const selectedCourses = document.querySelectorAll(".form-select");
    for (let i = 0; i < selectedCourses.length; i++) {
      let select = selectedCourses[i];
      select.value = "none";
    }
  };

  return (
    <>
      <div className="plan-div">
        <div className="sem-one" id="one">
          <div className="one">
            <label
              for="semester1"
              className="fw-bold semester-badge badge rounded-pill text-bg-secondary"
            >
              Semester I:
            </label>
            <select
              id="semester1"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="one">
            <select
              id="semester12"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-two" id="two">
          <label
            for="semester2"
            className="fw-bold semester-badge badge rounded-pill text-bg-secondary"
          >
            Semester II:
          </label>
          <div className="two">
            <select
              id="semester2"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="two">
            <select
              id="semester22"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-three" id="three">
          <label
            for="semester3"
            className="fw-bold semester-badge badge rounded-pill text-bg-secondary"
          >
            Semester III:
          </label>
          <div className="three">
            <select
              id="semester3"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="three">
            <select
              id="semester32"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-four">
          <label
            for="semester4"
            className="fw-bold semester-badge badge rounded-pill text-bg-secondary"
          >
            Semester IV:
          </label>
          <div className="four">
            <select
              id="semester4"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="four">
            <select
              id="semester42"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <div className="sem-five">
          <label
            for="semester5"
            className="fw-bold semester-badge badge rounded-pill text-bg-secondary"
          >
            Semester V:
          </label>
          <div className="five">
            <select
              id="semester5"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
          <div className="five">
            <select
              id="semester52"
              className="form-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                -select a course-
              </option>
            </select>
          </div>
        </div>
        <CreatePlan onClick={createPlan} />
        <ClearFields onClick={clearFields} />
      </div>
      <PopulateCourses />
    </>
  );
}

CreateDegreePlan.prototype = {
  planCount: PropTypes.func,
  handlePlanState: PropTypes.func,
};
