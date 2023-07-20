const router = require("express").Router();
const blogControllers = require("../controllers/blogController.js");

/**
 * To create new posts
 */
router.post("/posts", blogControllers.addPost);

/**
 * To update post by id
 */
router.put('/posts/:id', blogControllers.updatePost);

/**
 * To delete post by id
 */
router.delete("/posts/:id", blogControllers.deletePost);

/**
 * To get post by id
 */
router.get("/posts/:id", blogControllers.getPost);

/**
 * To get all posts
 */
router.get("/posts/:categoryId/:sortOrder", blogControllers.getAllPosts);

module.exports = router;
