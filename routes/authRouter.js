//Ke Chen
const express = require("express");
const myDB = require("../db/myAuthDB.js");
const router = express.Router();
const myEncrypt = require("../encrypt/myEncrypt.js");
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join("../client/public", "index.html"));
});

router.post("/login", async (req, res) => {
  console.log("login data", req.body);
  const user = req.body;
  try {
    const userInfo = await myDB.findUser(user);
    if (userInfo) {
      const hashedPw = userInfo.password;
      const loginResult = await myEncrypt.compare(user.password, hashedPw);
      if (loginResult) {
        req.session.user = userInfo;
        console.log("User login successfully", req.session.user);
        // CODE REVIEW: It's a good idea for server to return formatted api result. Things are so much easier for frontend!
        res.json({ success: true, msg: "Successful login", user: userInfo });
      } else {
        res.json({ success: false, msg: "Wrong password or email" });
      }
    } else {
      res.json({ success: false, msg: "No user exist, please sign up." });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/getUser", (req, res) => {
  res.json({ user: req.session.user });
});

router.get("/logout", (req, res) => {
  req.session.user = null;
  res.json({ user: req.session.user });
});

router.post("/register", async (req, res) => {
  const user = req.body;
  user.password = await myEncrypt.hashPassword(req.body.password);
  console.log("Register data to be added to DB", user);
  try {
    const userInfo = await myDB.register(user);
    if (userInfo) {
      res.json({ success: true, msg: "Successful register." });
    } else {
      res.json({ success: false, msg: "User existed. Try another Email." });
    }
  } catch (e) {
    console.log(e);
  }
});

router.post("/updateUserInfo", async (req, res) => {
  const userNewInfo = req.body;
  userNewInfo.password = await myEncrypt.hashPassword(req.body.password);
  console.log("Updating user's info to DB", userNewInfo);
  try {
    const ifUpdated = await myDB.updateUserInfo(userNewInfo);
    // console.log("if Updated?", ifUpdated);
    if (ifUpdated.acknowledged) {
      const userNow = await myDB.findUser(userNewInfo);
      console.log("User now", userNow);
      req.session.user = userNow;
      res.json({ success: true, msg: "Updating profile successfully!" });
    } else {
      res.json({ success: false, msg: "Updating profile failed!" });
    }
  } catch (e) {
    console.log(e);
  }
});

router.get("/deleteUser", async (req, res) => {
  try {
    if (req.session.user) {
      console.log("Accessing DB!");
      const deleteRes = await myDB.deleteUser(req.session.user);
      console.log("deleteRes", deleteRes);
      if (deleteRes.acknowledged) {
        req.session.user = null;
        res.json({ success: true, msg: "Deleting user successfully!" });
      } else {
        res.json({ success: false, msg: "Deleting profile failed!" });
      }
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
