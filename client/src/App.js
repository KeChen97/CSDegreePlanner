//Ke Chen
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPanel from "./pages/LoginPanel";
import HomePage from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import API from "./API/API";

function App() {
  const [isLogin, setisLogin] = useState(
    sessionStorage.getItem("user") !== null &&
      sessionStorage.getItem("user") !== "null"
  );

  const userLogout = async () => {
    sessionStorage.setItem("user", null);
    setisLogin(false);
    await API.logout();
  };

  return (
    <div>
      <main>
        <BrowserRouter>
          <Navbar isLogin={isLogin} userLogout={userLogout} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/login"
              element={<LoginPanel isLogin={isLogin} setisLogin={setisLogin} />}
            />
            <Route
              path="/dashboard"
              element={
                isLogin ? (
                  <Dashboard isLogin={isLogin} userLogout={userLogout} />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route
              path="/profile"
              element={
                isLogin ? (
                  <Profile
                    setisLogin={setisLogin}
                    isLogin={isLogin}
                    userLogout={userLogout}
                  />
                ) : (
                  <HomePage />
                )
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}
App.prototype = {};
export default App;
