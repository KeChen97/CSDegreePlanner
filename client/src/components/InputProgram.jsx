//Ke Chen
import React from "react";
import PropTypes from "prop-types";

function InputProgram({ program }) {
  const programType =
    program === "align"
      ? "Align MS in Computer Science"
      : "MS in Computer Science";

  return (
    <input
      name="program"
      type="text"
      className="eidtBox"
      placeholder={programType}
      disabled
    />
  );
}

InputProgram.prototype = {
  program: PropTypes.string,
};
export default InputProgram;
