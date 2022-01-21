const express = require("express");
const crewModel = require("./crew_model");
const router = express.Router();

router.get("/", (req, res, next) => {
  crewModel
    .find()
    .then((crew) => {
      res.status(200).json(crew);
    })
    .catch(next);
  //res.status(500).json({ message: "our server, it's broken" })
});

router.get("/:id", async (req, res, next) => {
  try {
    const crew_id = req.params;
    const crew = await crewModel.findById(crew_id);
    // console.log(crew);
    if (!crew) {
      res
        .status(404)
        .json({ message: "No crew member with that id, try again" });
    } else {
      res.status(200).json(crew);
    }
  } catch (err) {
    next(err);
    //res.status(500).json({ message: "our server, it's broken" })
  }
});

router.post("/addition", async (req, res, next) => {
  try {
    const body = req.body;
    if (!body.name || !body.position || !body.job_description) {
      console.log("something is missing");
      res.status(422).json({
        message: "Name, position and job description are required fields",
      });
    } else {
      const newCrew = await crewModel.add({
        name: body.name,
        position: body.position,
        job_description: body.job_description,
      });
      res.status(201).json(newCrew);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
