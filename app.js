//Ke
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const authRouter = require("./routes/authRouter");
const pathRouter = require("./routes/pathRouter");

const port = process.env.PORT || 3001;
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

app.use(
  session({
    secret: "cs webdev",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client/build")));

app.use("/", authRouter);
app.use("/", pathRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
