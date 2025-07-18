const express = require("express");
const { createPost, getMyPosts, getAllPosts, updatePost, deletePost } = require("../controllers/postController");
const { protect } = require("../middleware/auth");
const asyncHandler = require("../middleware/asyncHandler");
const router = express.Router();

router.post("/", protect, asyncHandler(createPost));
router.get("/me", protect, asyncHandler(getMyPosts));
router.get("/all", protect, asyncHandler(getAllPosts));
router.put("/:id", protect, asyncHandler(updatePost));
router.delete("/:id", protect, asyncHandler(deletePost));

module.exports = router;
