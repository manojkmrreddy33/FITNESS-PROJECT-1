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
      type: Number ,
    },
    weight: {
      type: Number, 
    },
    bmi: {
      type: Number ,
    },
    achievements: {
      type: String, // could be a file URL, or JSON string if it's complex
    }
    
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
