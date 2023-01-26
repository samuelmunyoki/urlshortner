const express = require("express");
var cors = require('cors')
const config = require("config");
const connectDB = require("./database/dbconnect");
const apiRoute = require("./routes/api")
const redirectRoute = require("./routes/redirect");
const PORT = process.env.PORT || 80
const app = express();
app.use(cors())
app.use(express.json());
connectDB();
app.get("/alive", (req, res)=>{
  res.send("<h2>🌱🌱Url Shortner Is ALive🌱🌱</h2> ")
})
app.use("/api/v1", apiRoute);
app.use("/", redirectRoute);
app.listen(PORT, () => {
  console.log("++++++++ Server Started on port 3000 ++++++++");
});

