const router = require("express").Router();
const shortID = require("short-id");
const validator = require("valid-url");
const config = require("config");
const Url = require("../Models/Url");

router.post("/", async (req, res) => {
  var posturl = req.body.url;
  if (posturl == null) {
    res.status(200).send("No URL provided.");
  }
  let urlExist = await Url.findOne({
    redirectUrl: posturl,
  });
  if (urlExist) {
    let BaseURL = config.get("BaseURL");
    var code = urlExist.shortCode;
    var shortUrl = `${BaseURL}/${code}`;
    return res.status(200).send({ message: "Got yah *_*", sharelink: { shortUrl } });
  } else {
    try {
      let isUrlValid = validator.isUri(posturl);
      console.log(posturl);
      console.log(isUrlValid);
      if (isUrlValid != undefined) {
        var ShortUrlCode = shortID.generate();
        let newUrl = new Url({
          redirectUrl: posturl,
          shortCode: ShortUrlCode,
        });
        newUrl.save();
        let BaseURL = config.get("BaseURL");
        var shortUrl = `${BaseURL}/${ShortUrlCode}`;
        res
          .status(200)
          .send({ message: "Generated URL", sharelink: { shortUrl } });
      } else {
        res.status(200).send({ message: "Invalid URL" });
      }
    } catch (error) {
      res.status(200).send({ message: "Could not generate Shortened URL" });
    }
  }
});

module.exports = router;
