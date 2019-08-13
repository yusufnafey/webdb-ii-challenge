const express = require("express");
const router = express.Router();
const knex = require("knex");

const knexConfig = require("./knexfile");
const db = knex(knexConfig.development);

router.get("/", (req, res) => {
  db("cars")
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving the cars information."
      });
    });
});

module.exports = router;
