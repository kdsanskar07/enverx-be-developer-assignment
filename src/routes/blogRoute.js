const router = require("express").Router();
const blogControllers = require("../controllers/blogController.js");

/**
 * To create new posts
 */
router.post("/posts", blogControllers.addPost);

/**
 * To update post by id
 */
router.put("/posts/:id", blogControllers.updatePost);

/**
 * To delete post by id
 */
router.delete("/posts/:id", blogControllers.deletePost);

/**
 * To get post by id
 */
router.get("/posts/:id", blogControllers.getPost);

/**
 * To get post list
 */
router.get("/posts", blogControllers.getPostList);

module.exports = router;
