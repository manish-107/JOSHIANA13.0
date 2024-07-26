import express from "express";
import { userRegister } from "../controllers/registerController.js";

const router = express.Router();

//userRegister routes
router.post("/userRegister", userRegister);

export default router;
