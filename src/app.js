const express = require("express");
const cors = require("cors");
const app = express();
const userRouter = require("../src/app/modules/users/user.route.js");
const adminRouter = require("../src/app/modules/admin/admin.route.js");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.get("/", (req, res) => {
  res.send("server is running");
});

module.exports = app;
