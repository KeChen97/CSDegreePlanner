//Ke Chen
import React, { useEffect, useState } from "react";
import API from "../API/API";
import { useNavigate } from "react-router-dom";
import Popup from "../components/Popup";
import LogoutIcon from "../components/LogoutIcon";
import "../css/Profile.css";
import avater from "../image/blank-profile-picture-973460_1280.webp";
import PropTypes from "prop-types";

function Profile({ setisLogin, isLogin, userLogout }) {
  let navigate = useNavigate();
  let [user, setUser] = useState({});

  async function getUserInfo() {
    try {
      const res = await API.getUser();
      // console.log("User get in Profile", res);
      setUser(res.user);
      setInput({ ...input, ["email"]: res.user.email });
    } catch (e) {
      console.log(e);
    }
  }

  async function deleteAccount() {
    try {
      const res = await API.deleteUser();
      if (res.success) {
        console.log("Delete successfully!");
        setUser(null);
        sessionStorage.setItem("user", null);
        setisLogin(false);
      }
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  const [input, setInput] = useState({});
  const [edit, setEdit] = useState(false);
  const [profilemsg, setMsg] = useState("");
  const [ifPopup, setifPopup] = useState(false);

  const setupInput = (e) => {
    console.log("here!");
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const updateBtn = <button className="updateBtn">Update</button>;
  const empty = "";
  const passwordInput = (
    <div className="mb-3">
      <label className="profile-label">Password</label>
      <input
        value={input.password || ""}
        onChange={setupInput}
        name="password"
        required={true}
        type="password"
        className="eidtBox"
        placeholder={user ? user.password : ""}
        id="InputPassword"
      />
    </div>
  );

  const programSelect = (
    <select
      name="program"
      value={input.program}
      onChange={setupInput}
      className="form-select eidtBox"
      id="program"
      required={true}
      disabled={edit ? false : true}
      aria-label="program"
    >
      <option value="">Please choose</option>
      <option value="general">MS in Computer Science </option>
      <option value="align">Align MS in Computer Science</option>
    </select>
  );

  const alignInput = (
    <input
      name="program"
      type="text"
      className="eidtBox"
      placeholder="Align MS in Computer Science"
      disabled
    />
  );

  const generalInput = (
    <input
      name="program"
      type="text"
      className="eidtBox"
      placeholder="MS in Computer Science"
      disabled
    />
  );

  const editProfile = (e) => {
    setEdit(true);
  };

  const updateProfileSubmit = async (event) => {
    // console.log("update profile", input);
    event.preventDefault();
    const res = await API.updateProfile(input);
    if (res.success) {
      getUserInfo();
    }
    setMsg(res.msg);
  };

  return (
    <div className="row panel">
      <div className="col-4 leftpanel">
        <img className="avater" alt="avater" src={avater} />
        <h3 className="username">{user ? user.fname : "Please login"}</h3>
        <div className="divider"></div>
        <div className="edit">
          <div className="edit-profile" onClick={editProfile}>
            Edit Profile/Password
            <span className="material-symbols-outlined edit-icon">
              edit_square
            </span>
          </div>

          <div className="delete" onClick={() => setifPopup(true)}>
            Delete Account
            <span className="material-symbols-outlined edit-icon">delete</span>
          </div>

          <div className="profile-logout tab">
            {user ? <LogoutIcon userLogout={userLogout} /> : ""}
          </div>

          <Popup
            trigger={ifPopup}
            setTrigger={setifPopup}
            deleteAccount={deleteAccount}
          ></Popup>
        </div>
      </div>

      <div className="col-8 rightpanel">
        <h1 className="profile-title">Profile</h1>

        <form onSubmit={updateProfileSubmit} className="profileForm">
          <div className="mb-3">
            <label className="profile-label">Email address</label>
            <input
              value={user ? user.email : ""}
              onChange={setupInput}
              name="email"
              placeholder={user ? user.email : ""}
              type="email"
              className="eidtBox"
              id="email"
              disabled
            />
          </div>

          <div className="mb-3">
            <label className="profile-label">First Name</label>
            <input
              value={input.fname || ""}
              onChange={setupInput}
              name="fname"
              required={true}
              placeholder={
                edit ? (user ? user.fname : "") : user ? user.fname : ""
              }
              type="text"
              className="eidtBox"
              id="fName"
              disabled={edit ? false : true}
            />
          </div>

          <div className="mb-3">
            <label className="profile-label">Last Name</label>
            <input
              value={input.lname || ""}
              onChange={setupInput}
              name="lname"
              required={true}
              placeholder={
                edit ? (user ? user.lname : "") : user ? user.lname : ""
              }
              type="text"
              className="eidtBox"
              id="lName"
              disabled={edit ? false : true}
            />
          </div>

          <div className="mb-3">
            <label className="profile-label">Program</label>
            <div>
              {edit
                ? programSelect
                : user
                ? user.program == "align"
                  ? alignInput
                  : generalInput
                : ""}
            </div>
          </div>

          <div> {edit ? passwordInput : empty}</div>

          <div className="profilemsg">{profilemsg}</div>

          <div>{edit ? updateBtn : empty}</div>
        </form>
      </div>
    </div>
  );
}

Profile.prototype = {
  setisLogin: PropTypes.func,
  isLogin: PropTypes.bool,
  userLogout: PropTypes.func,
};
export default Profile;
