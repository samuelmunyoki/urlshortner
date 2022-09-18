const express = require("express");
const config = require("config");
const connectDB = require("./database/dbconnect");
const apiRoute = require("./routes/api")
const redirectRoute = require("./routes/redirect");
const app = express();
app.use(express.json());
connectDB();
app.use("/api/v1", apiRoute);
app.use("/", redirectRoute);
app.listen(3000, () => {
  console.log("++++++++ Server Started on port 3000 ++++++++");
});

