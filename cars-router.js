const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  res.send("hello from router");
});

router.get("/", (req, res) => {});

module.exports = router;
