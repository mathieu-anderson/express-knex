const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.json({ user: "user" });
});

module.exports = router;
