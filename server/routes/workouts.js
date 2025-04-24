import express from 'express'
import { deleteWorkout } from '../controllers/User.js';
import verifyToken from '../middleware/verifyToken.js';

const workoutRoutes = express.Router();

workoutRoutes.delete("/:id", verifyToken, deleteWorkout);

export default workoutRoutes

