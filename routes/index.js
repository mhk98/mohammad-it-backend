const router = require("express").Router();
const contact = require("./contact");
const user = require("./users");
const blog = require("./blog");
const blogDetails = require("./blogDetails");

router.use("/user", user);
router.use("/contact", contact);
router.use("/blog", blog);
router.use("/blogDetails", blogDetails);

module.exports = router;
