const express = require("express");
const config = require("config");
const connectDB = require("./database/dbconnect");
const apiRoute = require("./routes/api")
const redirectRoute = require("./routes/redirect");
const PORT = process.env.PORT || 80
const app = express();
app.use(express.json());
connectDB();
app.use("/api/v1", apiRoute);
app.use("/", redirectRoute);
app.get("/alive", (req, res)=>{
  res.send("<h2>🌱🌱Url Shortner Is ALive🌱🌱</h2> ")
})
app.listen(PORT, () => {
  console.log("++++++++ Server Started on port 3000 ++++++++");
});

