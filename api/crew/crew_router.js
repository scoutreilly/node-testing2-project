const express = require("express");
// const crewModel = require("./crew_model");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({ message: "hi you're running" });
});

module.exports = router;
