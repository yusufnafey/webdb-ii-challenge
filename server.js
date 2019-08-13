const express = require("express");

const server = express();
const carsRouter = require("./cars-router");

server.use(express.json());
server.use("/api/cars", carsRouter);

server.get("/", (req, res) => {
  res.send("hello");
});

module.exports = server;
