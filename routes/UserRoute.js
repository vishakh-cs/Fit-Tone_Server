import express from "express";
import { UserLogin, UserRegister, addWorkout, fetchAllWorkouts, getWorkoutsByDate } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.post("/User/signup", UserRegister);
router.post("/User/login", UserLogin);

router.post("/user/workout", verifyToken,addWorkout);
router.get("/user/workout", verifyToken, getWorkoutsByDate);

router.get("/user/allworkouts",verifyToken,fetchAllWorkouts)


export default router;