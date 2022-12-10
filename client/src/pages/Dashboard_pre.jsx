// Ke Chen & Jerry Asala
import React, { useEffect, useState } from "react";
import API from "../API/API";
import Paths from "../components/Paths";
import Plans from "../components/Plans";
import CreateDegreePlan from "../components/CreateDegreePlan";
import "../css/dashboard.css";

// Jerry Asala
export default function Dashboard() {
  // Ke Chen
  let [user, setUser] = useState({});

  // Jerry Asala
  const [planState, setPlanState] = useState([0]);
  let planCount = 0;

  // Ke Chen
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

  if (!planState) {
    return <div>Hello, {user?.fname}</div>;
  }

  // Jerry Asala
  function handler() {
    const newState = [planState[0] + 1];
    setPlanState(newState);
  }

  const numOfPlans = (num) => {
    planCount = num;
  };

  function getPlanCount() {
    console.log("just clicked..and plan count is: ", planCount);
    return planCount;
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2>Degree Plan</h2>
              <Plans numOfPlans={numOfPlans} dep={planState} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2>Create Plan</h2>
              <CreateDegreePlan
                planCount={getPlanCount}
                handlePlanState={handler}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <h2>Recommendations:</h2>
              <div className="row">
                <div className="col">
                  <div className="card">
                    <div className="card-body">
                      <Paths />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.prototype = {};
