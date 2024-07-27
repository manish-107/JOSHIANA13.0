import express from "express";
import {
  adminLogin,
  adminSignup,
  showAllParticipant,
} from "../controllers/adminController.js";
import { verifyToken } from "../middlewares/verifyAdmin.js";

const router = express.Router();

//userRegister routes
router.post("/adminLogin", adminLogin);
router.post("/adminSignup", adminSignup);
router.get("/showAllParticipant", verifyToken, showAllParticipant);

export default router;
