const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema({
  redirectUrl: {
    type: String,
    required: true,
  },
  shortCode: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Url", UrlSchema);
