const express = require("express");

const router = express.Router();

// Get all workouts
router.get("/", (req, res) => {
  res.json({ message: "Get all workouts" });
});

// Get a single workout
router.get("/:id", (req, res) => {
  res.json({ message: "Get a single workout" });
});

// Post a new workout
router.post("/:id", (req, res) => {
  res.send({ message: "Post a new workout" });
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
