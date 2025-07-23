import express from "express";
import { createCategory, getAllCategories } from "../controllers/categoryController.js";
import { protect } from "../middleware/auth.js";
const router = express.Router();

// POST /api/categories
router.post("/", protect, createCategory);
// GET /api/categories
router.get("/", protect, getAllCategories);

export default router;