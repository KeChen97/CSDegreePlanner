//Ke Chen
import React from "react";
import "../css/Tabs.css";
import LogoutIcon from "./LogoutIcon";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Tabs({ setTab, user, userLogout }) {
  return (
    <div class="tabs">
      <div className="tab">
        <Link id="tab-currentPlan" className="navtab" onClick={() => setTab(1)}>
          <span class="material-symbols-outlined tabIcon">wysiwyg</span>
          Current Degree Plan
        </Link>
      </div>

      <div className="tab">
        <Link id="tab-createPlan" className="navtab" onClick={() => setTab(2)}>
          <span class="material-symbols-outlined tabIcon">library_add</span>
          Create Plan
        </Link>
      </div>

      <div class="tab">
        <Link
          id="tab-recommendation"
          className="navtab"
          onClick={() => setTab(3)}
        >
          <span class="material-symbols-outlined tabIcon">wysiwyg</span>
          Recommendations
        </Link>
      </div>

      <div className="tab">
        <div id="tab-logout">
          {user ? <LogoutIcon userLogout={userLogout} /> : ""}
        </div>
      </div>
    </div>
  );
}

Tabs.prototype = {
  setTab: PropTypes.func,
  user: PropTypes.object,
  userLogout: PropTypes.func,
};
export default Tabs;
