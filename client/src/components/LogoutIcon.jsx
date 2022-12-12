//Ke Chen
import React from "react";
import { Link } from "react-router-dom";
import "../css/LogoutIcon.css";
import PropTypes from "prop-types";

function LogoutIcon({ userLogout }) {
  return (
    <div>
      <Link to="/" onClick={userLogout} className="nav-link">
        <span className="material-symbols-outlined logoutIcon icon">
          logout
        </span>
        <span className="logoutText" style={{ fontSize: "14px" }}>
          Logout
        </span>
      </Link>
    </div>
  );
}

LogoutIcon.prototype = {
  userLogout: PropTypes.func,
};

export default LogoutIcon;
