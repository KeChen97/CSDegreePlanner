//Jerry and Ke
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
    const selectedCourses = document.querySelectorAll(".myform-select");

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
    const selectedCourses = document.querySelectorAll(".myform-select");
    for (let i = 0; i < selectedCourses.length; i++) {
      let select = selectedCourses[i];
      select.value = "none";
    }
  };

  return (
    <>
      <div className="plan-div">
        <div className="sem-one" id="one">
          <label className="fw-bold semester-badge badge rounded-pill text-bg-secondary">
            Semester I:
          </label>
          <div className="one">
            <label className="courseLabel" for="semester11">
              Course 1
            </label>
            <select
              id="semester11"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
          <div className="one">
            <label className="courseLabel" for="semester12">
              Course 2
            </label>
            <select
              id="semester12"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
        </div>
        <div className="sem-two" id="two">
          <label className="fw-bold semester-badge badge rounded-pill text-bg-secondary">
            Semester II:
          </label>
          <div className="two">
            <label className="courseLabel" for="semester21">
              Course 1
            </label>
            <select
              id="semester21"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
          <div className="two">
            <label className="courseLabel" for="semester22">
              Course 2
            </label>
            <select
              id="semester22"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
        </div>
        <div className="sem-three" id="three">
          <label className="fw-bold semester-badge badge rounded-pill text-bg-secondary">
            Semester III:
          </label>
          <div className="three">
            <label className="courseLabel" for="semester31">
              Course 1
            </label>
            <select
              id="semester31"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
          <div className="three">
            <label className="courseLabel" for="semester32">
              Course 2
            </label>
            <select
              id="semester32"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
        </div>
        <div className="sem-four">
          <label className="fw-bold semester-badge badge rounded-pill text-bg-secondary">
            Semester IV:
          </label>
          <div className="four">
            <label className="courseLabel" for="semester41">
              Course 1
            </label>
            <select
              id="semester41"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
          <div className="four">
            <label className="courseLabel" for="semester42">
              Course 2
            </label>
            <select
              id="semester42"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
        </div>
        <div className="sem-five">
          <label className="fw-bold semester-badge badge rounded-pill text-bg-secondary">
            Semester V:
          </label>
          <div className="five">
            <label className="courseLabel" for="semester51">
              Course 1
            </label>
            <select
              id="semester51"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
              </option>
            </select>
          </div>
          <div className="five">
            <label className="courseLabel" for="semester52">
              Course 2
            </label>
            <select
              id="semester52"
              className="myform-select create-plan text-center"
            >
              <option value="none" selected disabled hidden>
                Click to select a course
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
