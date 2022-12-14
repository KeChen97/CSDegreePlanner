// Ke Chen & Jerry Asala
import React, { useEffect, useState } from "react";
import API from "../API/API";
import Paths from "../components/Paths";
import Plans from "../components/Plans";
import CreateDegreePlan from "../components/CreateDegreePlan";
import DegreePlanPagination from "../components/DegreePlanPagination";
import "../css/Dashboard.css";
import RecommendationPagination from "../components/RecommendationPagination";

// Jerry Asala
export default function Dashboard() {
  // Ke Chen
  let [user, setUser] = useState({});

  // Jerry Asala
  const [currentPage, setCurrentPage] = useState(1);
  const [plansPerPage] = useState(1);

  const [cPage, setCPage] = useState(1);
  const [recsPerPage] = useState(1);

  const [data, setData] = useState([]);
  const [recData, setRecData] = useState([]);

  const [courses, setCourses] = useState([]);
  const [objPathCourses, setObjPathCourses] = useState({});

  const [page, setPage] = useState([0]);

  const [planState, setPlanState] = useState([0]);
  let planCount = data.length;

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

  // Jerry Asala
  useEffect(() => {
    const getPlans = async () => {
      const res = await fetch("/getUserPlans");
      const data = await res.json();

      setData(data.plans);
    };
    getPlans();
  }, [planState, page]);

  useEffect(() => {
    const getPath = async () => {
      const res = await fetch("/getPaths");
      const data = await res.json();
      let allPaths = [];

      if (data) {
        data.paths.forEach((path) => {
          allPaths.push(path.name);
        });
      }

      setRecData(allPaths);
    };
    getPath();
  }, []);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("/getPathRecs");
      const data = await res.json();

      console.log("done getting courses");

      let allCourses = {};
      data.pathRecs.forEach((course) => {
        allCourses[course.courses[0].path] = course.courses.slice(1);
      });

      setObjPathCourses(allCourses);

      setCourses(data.pathRecs);
    };
    getCourses();
  }, []);

  const pathCourses = function getCourse(path) {
    let arrOfCourses;
    courses.forEach((course) => {
      if (course.courses[0].path === path) {
        arrOfCourses = course.courses.slice(1);
      }
    });
    console.log("called from use plan", arrOfCourses);
    return arrOfCourses;
  };

  if (!planState) {
    return <div>Hello, {user?.fname}</div>;
  }

  // Jerry Asala
  const handler = () => {
    const newState = [planState[0] + 1];
    setPlanState(newState);
    console.log("this is cpage", currentPage);
    console.log("this is npage", nPages);
    if (currentPage - 1 === 0) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(nPages);
    }
  };

  const repage = (pos) => {
    if (currentPage == 1) {
      setCurrentPage(currentPage + 1);
    } else if (currentPage == nPages) {
      setCurrentPage(currentPage - 1);
    }

    const newPage = [page[0] + 1];
    setPage(newPage);
  };

  const numOfPlans = (num) => {
    planCount = num;
  };

  const getPlanCount = () => {
    console.log("just clicked..and plan count is: ", planCount);
    return planCount;
  };

  const indexOfLastRecord = currentPage * plansPerPage;
  const indexOfFirstRecord = indexOfLastRecord - plansPerPage;
  const currentPlan = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / plansPerPage);

  const indexOfLastRec = cPage * recsPerPage;
  const indexOfFirstRec = indexOfLastRec - recsPerPage;
  const currentRec = recData.slice(indexOfFirstRec, indexOfLastRec);

  const rPages = Math.ceil(recData.length / recsPerPage);
  let pos = recData.indexOf(currentRec);

  return (
    <div className="dashWrapper">
      <div className="row main-row">
        <h1 className="bigtitle">Welcome to create your degree plans!</h1>
        <div className="col child-col mycard border-secondary">
          <div className="degree-div">
            <div className="dashTitle">
              <strong>Degree Plan</strong>
            </div>
            <Plans
              numOfPlans={numOfPlans}
              dep={planState}
              data={currentPlan}
              repage={repage}
            />
            <DegreePlanPagination
              nPages={nPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        <div className="col child-col mycard border-secondary">
          <div className="create-div">
            <div className="dashTitle">
              <strong>Create Plan</strong>
            </div>
            <CreateDegreePlan
              planCount={getPlanCount}
              handlePlanState={handler}
            />
          </div>
        </div>
        <div className="col child-col mycard border-secondary">
          <div className="rec-div">
            <div className="dashTitle">
              <strong>Recommendations</strong>
            </div>
            <Paths
              recData={currentRec}
              pos={pos}
              pCourses={objPathCourses ? objPathCourses[currentRec] : []}
              c={courses}
              key={courses}
            />
            <RecommendationPagination
              rPages={rPages}
              cPage={cPage}
              setCPage={setCPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.prototype = {};
