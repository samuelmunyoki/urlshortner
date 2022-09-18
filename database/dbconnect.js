const mongoose = require("mongoose");
const config = require("config");
const DBURL = config.get("MongoBD_URL");
const connectDB = async () => {
  await mongoose
    .connect(DBURL, {
      useNewUrlParser: true,
    })
    .then(
      () => {
        console.log("+++++++ Database connected +++++++");
      }
    )
    .catch((er) => {
      console.log(":::::::: Database Coonection Error ::::::::\nError: "+er);
      process.exit(1);
    });
};
module.exports = connectDB;
