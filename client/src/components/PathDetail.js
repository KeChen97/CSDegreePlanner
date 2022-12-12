import React from "react";
import PropTypes from "prop-types";

// Jerry Asala
export default function PathDetail({ code, names, semester }) {
  return (
    <div>
      {names.map((name, index) => {
        if (name.code === code) {
          return (
            <div key={index}>
              <div>
                <strong>
                  <em>{`Semester ${semester}:`}</em>
                </strong>
              </div>
              <div className="courseName">{`${code} : ${name.name}`}</div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

PathDetail.prototype = {
  code: PropTypes.string.isRequired,
  names: PropTypes.array.isRequired,
  semester: PropTypes.string.isRequired,
};
