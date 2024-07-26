import express from "express";
import { showAllParticipant } from "../controllers/adminController.js";

const router = express.Router();

//userRegister routes
router.get("/showAllParticipant", showAllParticipant);

export default router;
