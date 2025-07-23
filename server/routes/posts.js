import express from "express";
import { createPost, getMyPosts, getAllPosts, updatePost, deletePost } from "../controllers/postController.js";
import { protect } from "../middleware/auth.js";
import asyncHandler from "../middleware/asyncHandler.js";
const router = express.Router();

router.post("/", protect, asyncHandler(createPost));
router.get("/me", protect, asyncHandler(getMyPosts));
router.get("/all", protect, asyncHandler(getAllPosts));
router.put("/:id", protect, asyncHandler(updatePost));
router.delete("/:id", protect, asyncHandler(deletePost));

export default router;
