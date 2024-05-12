const blog = require("../../controllers/blog/blog.controller");
const router = require("express").Router();

router.get("/", blog.getAllBlog);
router.post("/create-blog", blog.createBlog);
router.delete("/:id", blog.deleteBlog);
router.patch("/:id", blog.updateBlog);

module.exports = router;
