//Ke Chen
import React, { useEffect, useState } from "react";
import API from "../API/API";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import AccountIcon from "./AccountIcon";
import LogoutIcon from "./LogoutIcon";
import PropTypes from "prop-types";

function Navbar({ isLogin, userLogout }) {
  let [user, setUser] = useState({});

  // const getUserInfo = async function () {
  //   try {
  //     const res = await API.getUser();
  //     console.log("User get in Profile", res);
  //     setUser(res.user);
  //     console.log(res.user);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // }

  useEffect(() => {
    async function getUserInfo() {
      try {
        const res = await API.getUser();
        console.log("User get in Profile", res);
        setUser(res.user);
        console.log(user);
      } catch (e) {
        console.log(e);
      }
    }
    getUserInfo();
  }, []);

  return (
    <div>
      <nav id="mainNavbar" className="navbar navbar-expand-md fixed-top">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" className="brand nav-link">
              Degree Planner{" "}
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/dashboard" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-link">
              MyProfile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" id="about">
              About
            </Link>
          </li>
        </ul>
        <div className="navbar-nav icons">
          <div className="">{isLogin ? <AccountIcon /> : ""}</div>
          <div className="">
            {isLogin ? <LogoutIcon userLogout={userLogout} /> : ""}
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.prototype = {
  isLogin: PropTypes.bool,
  userLogout: PropTypes.func,
};

export default Navbar;
