//Ke Chen
import React from "react";
import "../css/Popup.css";
import PropTypes from "prop-types";

function Popup(props) {
  return props.trigger ? (
    <div>
      <div className="popup">
        <div className="popup-content">
          <span
            id="wkt-close1"
            className="close"
            onClick={() => props.setTrigger(false)}
          >
            &times;
          </span>
          <div className="popup-body">Do you want to delete your account?</div>
          <div className="popup-btns">
            <button className="popup-btn" onClick={() => props.deleteAccount()}>
              Yes
            </button>
            <button
              className="popup-btn"
              onClick={() => props.setTrigger(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

Popup.prototype = {
  props: PropTypes.object,
};

export default Popup;
