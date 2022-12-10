//Ke Chen
import React from "react";
import PropTypes from "prop-types";

function InputProfile({ inputValue, setupInput, name, placeHolder }) {
  return (
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input
        value={inputValue}
        onChange={setupInput}
        name={name}
        required={true}
        type={name}
        className="eidtBox"
        placeholder={placeHolder}
        id={name}
      />
    </div>
  );
}

InputProfile.prototype = {
  inputValue: PropTypes.string,
  setupInput: PropTypes.func,
  name: PropTypes.string,
  placeHolder: PropTypes.string,
  program: PropTypes.string,
};

export default InputProfile;
