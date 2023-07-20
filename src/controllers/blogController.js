const Blog = require("../models/blogModel");

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * This controller is for adding a new post
 */
const addPost = async (req, res) => {
  try {
    console.log("Inside blogController.addPost", { params: req.body });

    const { content, title, categoryIds, authorId } = req.body;
    if (!content) {
      const errorMessage = "Invalid content value";
      console.log("Inside blogController.addPost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    if (!title) {
      const errorMessage = "Invalid title value";
      console.log("Inside blogController.addPost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    if (!Array.isArray(categoryIds) || !categoryIds.length) {
      const errorMessage = "Invalid categoryIds value";
      console.log("Inside blogController.addPost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }
    if (!authorId) {
      const errorMessage = "Invalid authorId value";
      console.log("Inside blogController.addPost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    const blogObj = {
      createdAt: new Date(),
      content,
      title,
      categoryIds,
      authorId,
    };

    const blogRes = await Blog(blogObj).save();
    console.log("Created a new blog: ", blogRes);

    return res.status(201).json({ success: true, msg: "Created new blog" });
  } catch (error) {
    console.log("Inside blogController.addPost, error", error);
    return res.status(500).json({
      success: false,
      message: "Failed to create new blog",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * This controller is for updating a post by id
 */
const updatePost = async (req, res) => {
  try {
    const blogId = req.params.id;
    const { content, title, categoryIds, authorId } = req.body;
    console.log("Inside blogController.updatePost", {
      params: req.body,
      blogId,
    });

    // find blog to be updated
    let blogObj = await Blog.findOne({ id: blogId });
    if (!blogObj) {
      const errorMessage = "Blog not found";
      console.log("Inside blogController.updatePost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    // check for author
    if (!authorId || blogObj.authorId !== authorId) {
      const errorMessage = "User is not allowed to update blog";
      console.log("Inside blogController.updatePost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    let updatedObj = {};
    if (content) {
      updatedObj = { content };
    }
    if (title) {
      updatedObj = { ...updatedObj, title };
    }
    if (Array.isArray(categoryIds) && categoryIds.length) {
      updatedObj = { ...updatedObj, categoryIds };
    }

    updatedObj = await Blog.updateOne(updatedObj);
    console.log("Updated blog: ", updatedObj);

    return res.status(200).json({ success: true, msg: "Updated blog" });
  } catch (error) {
    console.log("Inside blogController.updatePost", error);
    return res.status(500).json({
      success: false,
      message: "Failed to update blog",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * This controller is for deleting a post by id
 */
const deletePost = async (req, res) => {
  try {
    const blogId = req.params.id;
    console.log("Inside blogController.deletePost", { blogId });

    const blogObj = await Blog.deleteOne({ id: blogId });

    console.log(`Deleted blog with id: ${blogId}`);

    return res.status(200).json({ success: true, msg: "Updated blog" });
  } catch (error) {
    console.log("Inside blogController.deletePost", error);
    return res.status(500).json({
      success: false,
      message: "Failed to delete blog",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * This controller is for getting a post by id
 */
const getPost = async (req, res) => {
  try {
    const { blogId } = req.body;
    console.log("Inside blogController.getPost", { blogId });

    const blogObj = Blog.findById(blogId);
    if (!blogObj) {
      const errorMessage = "Blog not found";
      console.log("Inside blogController.getPost, error", errorMessage);
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.status(200).json({
      success: true,
      msg: "Successfully fetched all blogs",
      data: blogObj,
    });
  } catch (error) {
    console.log("Inside blogController.getPost", error);
    return res.status(500).json({
      success: false,
      message: "Failed to get blog",
    });
  }
};

/**
 *
 * @param {*} req
 * @param {*} res
 *
 * This controller is for getting a all post
 */
const getAllPosts = async (req, res) => {
  try {
    console.log("Inside blogController.getAllPosts");

    const blogs = await Blog.find({});

    return res
      .status(200)
      .json({
        success: true,
        msg: "Successfully fetched all blogs",
        data: blogs,
      });
  } catch (error) {
    console.log("Inside blogController.getAllPosts", error);
    return res.status(400).json({
      success: false,
      message: "Failed to get all blog",
    });
  }
};

module.exports = {
  addPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
};
