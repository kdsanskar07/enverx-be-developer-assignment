const router = require("express").Router();
const blogControllers = require("../controllers/blogController.js");

/**
 * To create new posts
 */
router.post("/posts", blogControllers.addPost);

/**
 * To update post
 */
router.put("/posts/:id", productController.updatePost);

/**
 * To delete post
 */
router.delete("/posts/:id", productController.deletePost);

/**
 * To get post list
 */
router.get("/posts/:id", blogControllers.getPost);

/**
 * To get post list
 */
router.get("/posts", blogControllers.getPostList);

module.exports = router;
