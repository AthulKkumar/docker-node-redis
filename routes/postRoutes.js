const express = require("express");
const router = express.Router();
const postController = require("../controllers/postControllers");
const protect = require("../middlewares/authMiddleware");

router
  .get("/", protect, postController.getAllPosts)
  .post("/", protect, postController.createPost);

router
  .get("/:id", protect, postController.getPost)
  .patch("/:id", protect, postController.updatePost)
  .delete("/:id", protect, postController.deletePost);

module.exports = router;
