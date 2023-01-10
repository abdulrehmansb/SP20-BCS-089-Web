var express = require("express");
var router = express.Router();
var Book = require("../../../models/Book");

router.get("/", async function (req, res, next) {
  console.log("inside");
  setTimeout(async () => {
    let products = await Book.find();

    res.send(products);
  }, 5000);
});
module.exports = router;
