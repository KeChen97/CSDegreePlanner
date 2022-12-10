const MongoClient = require("mongodb").MongoClient;
const dotenv = require("dotenv");
dotenv.config();

function MyMongoDB() {
  const myDB = {};
  const mongourl = process.env.MONGO_URL;

  myDB.getCourses = async function () {
    const DB_NAME = "project3";
    const DB_COLLECTION = "courses";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

    try {
      const data = client.db(DB_NAME).collection(DB_COLLECTION);
      const arrOfCourses = await data.find().toArray();
      client.close();
      return arrOfCourses;
    } catch (e) {
      console.log(e);
    }
  };

  myDB.getPaths = async function () {
    const DB_NAME = "project3";
    const DB_COLLECTION = "paths";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

    try {
      const data = client.db(DB_NAME).collection(DB_COLLECTION);
      const paths = await data.find().toArray();
      client.close();
      if (paths) {
        return paths;
      } else {
        return "no paths found";
      }
    } catch (e) {
      console.log(e);
    }
  };

  myDB.getPathRecs = async function () {
    const DB_NAME = "project3";
    const DB_COLLECTION = "paths";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

    try {
      const data = client.db(DB_NAME).collection(DB_COLLECTION);
      const paths = await data.find().toArray();
      client.close();
      const pathsArray = [];
      if (paths) {
        paths.forEach((path) => {
          pathsArray.push(path.recommendation);
          /* [{courses:[{name:5001}, {name:5002}, ...]},
                        {courses:[{name:5001}, {name:5002}, ...]}] */
        });
        return pathsArray;
        /* {semesterI: {c1: "cs5001, c2: "cs5002},
                   {semesterII: {c1: "cs5001, c2: "cs5002}*/
      }
    } catch (e) {
      console.log(e);
    }
  };

  myDB.getUserPlans = async function (useremail) {
    const DB_NAME = "project3";
    const DB_COLLECTION = "users";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

    try {
      const data = client.db(DB_NAME).collection(DB_COLLECTION);
      const user = await data.findOne({ email: useremail });
      console.log(user);
      client.close();

      const currentUserPlan = user.plan;
      return currentUserPlan;
    } catch (e) {
      console.log(e);
    }
  };

  myDB.createPlan = async function (plan, useremail) {
    const DB_NAME = "project3";
    const DB_COLLECTION = "users";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";
    let count = 0;

    try {
      plan.courses.forEach((plan) => {
        if (plan.code === "none") {
          count = count + 1;
        }
      });
      if (count > 0) {
        return false;
      }
      const userCol = client.db(DB_NAME).collection(DB_COLLECTION);
      await userCol.updateOne({ email: useremail }, { $push: { plan: plan } });
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  myDB.deletePlan = async function (index, useremail) {
    const DB_NAME = "project3";
    const DB_COLLECTION = "users";
    const client = new MongoClient(mongourl) || "mongodb://localhost:27017";

    try {
      const userCol = client.db(DB_NAME).collection(DB_COLLECTION);
      await userCol.updateOne(
        { email: useremail },
        { $pull: { plan: { courses: { pos: index.index } } } }
      );
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return myDB;
}

module.exports = MyMongoDB();
