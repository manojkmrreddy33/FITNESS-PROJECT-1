import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
  currentWeight: Number,
  squat: Number,
  bench: Number,
  deadlift: Number,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Profile", ProfileSchema);
