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
        message: "There was an error retrieving the cars."
      });
    });
});

router.get("/:id", (req, res) => {
  db("cars")
    .where({ id: req.params.id })
    .first()
    .then(car => {
      res.status(200).json(car);
    })
    .catch(error => {
      res.status(500).json({
        message: "There was an error retrieving the car with the specified ID."
      });
    });
});

router.post("/", (req, res) => {
  const newCar = req.body;

  if (!newCar.VIN || !newCar.Make || !newCar.Model || !newCar.Mileage) {
    res
      .status(400)
      .json({ message: "Please provide car VIN, make, model, and mileage. " });
  }
  db("cars")
    .insert(newCar)
    .then(newCar => {
      res.status(200).json(newCar);
    })
    .catch(error => {
      res.status(500).json({ message: "There was an error adding the car." });
    });
});

module.exports = router;
