import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getUserDetails,
  getWorkoutsByDate,
  updateUserProfile,
} from "../controllers/User.js";
import { verifyToken } from "../middleware/verifyToken.js";
import fileUpload from "express-fileupload";

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);
router.get("/details", verifyToken, getUserDetails); 
router.post("/updateProfile", verifyToken, updateUserProfile);

export default router;