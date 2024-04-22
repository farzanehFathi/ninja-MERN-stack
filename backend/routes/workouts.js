const express = require("express");
const Workout = require("../models/workoutModel");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.send({ message: "Post a new workout" });
});

// Post a new workout
router.post("/:id", async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

// Delete a  workout
router.delete("/:id", (req, res) => {
  res.send({ message: "Delete a workout" });
});

// Update a workout
router.patch("/:id", (req, res) => {
  res.send({ message: "Update a workout" });
});

module.exports = router;
