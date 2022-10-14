var express = require("express");
var router = express.Router();
const fns = require("date-fns");

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: fns.format(new Date(), "PPpp"),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: fns.format(new Date(), "PPpp"),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: "Mini Messageboard" });
});

router.post("/new", function (req, res, next) {
  console.log(req.body.name);
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: fns.format(new Date(), "PPpp"),
  });
  res.redirect("/");
});
module.exports = router;
