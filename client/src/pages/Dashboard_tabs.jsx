// Ke Chen
import React, { useEffect, useState } from "react";
import API from "../API/API";
import CurrentPlansTab from "../components/CurrentPlansTab";
import CreatePlanTab from "../components/CreatePlanTab";
import RecommendationTab from "../components/RecommendationTab";
import Tabs from "../components/Tabs";
import "../css/Dashboard.css";
import PropTypes from "prop-types";

export default function Dashboard({ isLogin, userLogout }) {
  // CODE REVIEW: It's a good practice to leave meaningful comments about the code for people (and the author later on) to understand. Great job!
  /*
   * Ke Chen
   * tab variable decides which component to render
   * Render flag values: 1: Current Plans 2: Create plan 3: Recommendations
   *
   */
  let [tab, setTab] = useState(1);
  let [user, setUser] = useState({});

  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await API.getUser();
        console.log("User get in Profile", res);
        setUser(res.user);
      } catch (e) {
        console.log(e);
      }
    }
    getUserInfo();
  }, []);

  return (
    <div className="dashWrapper">
      <div className="dashPanel row">
        <div className="col-2 leftPanel">
          <Tabs setTab={setTab} user={user} userLogout={userLogout} />
        </div>
        <div className="col-2 rightPanel">
          {user ? (
            tab === 1 ? (
              <CurrentPlansTab />
            ) : tab === 2 ? (
              <CreatePlanTab />
            ) : tab === 3 ? (
              <RecommendationTab />
            ) : (
              ""
            )
          ) : (
            "Please Login"
          )}
        </div>
        <div className="mainPanel"></div>
      </div>
    </div>
  );
}

Dashboard.prototype = {
  isLogin: PropTypes.bool,
  userLogout: PropTypes.func,
};
