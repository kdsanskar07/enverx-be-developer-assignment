const router = require("express").Router();
const blogRoutes = require("./blogRoute.js");

router.use("/", blogRoutes);

module.exports = router;
