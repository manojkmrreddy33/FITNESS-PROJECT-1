import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
  currentWeight: Number,
  squat: Number,
  bench: Number,
  deadlift: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Profile", ProfileSchema);
