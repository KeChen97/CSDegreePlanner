//Ke Chen
import React from "react";
import { Link } from "react-router-dom";
import "../css/AccountIcon.css";

function AccountIcon() {
  return (
    <div>
      <Link to="/profile" className="nav-link">
        <span className="material-symbols-outlined icon">account_box</span>
      </Link>
    </div>
  );
}

AccountIcon.prototype = {};

export default AccountIcon;
