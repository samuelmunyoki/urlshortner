const router = require("express").Router();
const Url = require("../Models/Url");

router.get("/:id", async (req, res) => {
  var code = req.params.id;
  console.log(code);
  let urlExist = await Url.findOne({
    shortCode: code,
  });
  if (urlExist) {
    res.redirect(urlExist.redirectUrl);
  } else {
    res.status(200).send({ message: "❗ Invalid ShareLink ❗" });
  }
});
router.get("/", async (req, res) => {
  res.status(200).send("✅ Api Is Working ✅");
})
module.exports = router;
