import express from "express";
import Profile from "../models/Profile.js";
import verifyToken from "../middleware/verifyToken.js";

const router = express.Router();

// Save profile data
router.post("/", verifyToken,async (req, res) => {
  try {
    const userId = await req.user?.id;
    const { currentWeight, squat, bench, deadlift } = req.body;
    const newProfile = new Profile({ userId, currentWeight, squat, bench, deadlift });
    console.log(newProfile)
    await newProfile.save();
    res.status(201).json({ message: "Progress saved!", profile: newProfile });
  } catch (error) {
    res.status(500).json({ message: "Error saving data", error });
  }
});

// Get all progress records
router.get("/", async (req, res) => {
  try {
    const userId = await req.user?.id;
    console.log(req)
    const profiles = await Profile.find({ userId }).sort({ createdAt: -1 });
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error });
  }
});


export default router;
