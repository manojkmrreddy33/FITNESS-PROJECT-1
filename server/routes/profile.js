import express from "express";
import Profile from "../models/Profile.js";

const router = express.Router();

// Save profile data
router.post("/", async (req, res) => {
  try {
    const { currentWeight, squat, bench, deadlift } = req.body;
    const newProfile = new Profile({ currentWeight, squat, bench, deadlift });
    await newProfile.save();
    res.status(201).json({ message: "Progress saved!", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

// Get all progress records
router.get("/", async (req, res) => {
  try {
    const profiles = await Profile.find().sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});

export default router;
