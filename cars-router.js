const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from router");
});

router.get("/", (req, res) => {});

module.exports = router;
