import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
    },
    height: {
      type: Number, // in meters
    },
    weight: {
      type: Number, // in kilograms
    },
    bmi: {
      type: Number,
    },
  },
  { timestamps: true }
);

// Middleware to calculate BMI before saving
UserSchema.pre('save', function (next) {
  if (this.height && this.weight) {
    this.bmi = parseFloat((this.weight / (this.height ** 2)).toFixed(2));
  }
  next();
});

// Middleware to calculate BMI before updates
UserSchema.pre('findOneAndUpdate', function (next) {
  const update = this.getUpdate();
  if (update.height && update.weight) {
    update.bmi = parseFloat((update.weight / (update.height ** 2)).toFixed(2));
  }
  next();
});

export default mongoose.model("User", UserSchema);
