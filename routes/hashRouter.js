import express from "express";
import { hashValue, compareHash } from "../controllers/index.js";

var router = express.Router();

router.post("/", hashValue)
// Get matching hashed password (true/false)
router.get("/", compareHash)

export default router;