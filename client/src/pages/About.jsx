//Ke chen
import React from "react";
import "../css/about.css";

function About() {
  return (
    <div className="about">
      <h1 className="title">CS Degree Planner</h1>
      <p>
        The goal is to create a degree planner for students in the Khoury Align
        MSCS program.
      </p>
      <p>
        The app will allow students to select specializations they may be
        interested in, and see a recommendation of courses to take for the
        entire length of the program and in what semesters to take them. They
        also have the option to modify the recommended degree plan to suit their
        preferences (perhaps after speaking with an academic advisor).
      </p>
    </div>
  );
}
About.prototype = {};
export default About;
