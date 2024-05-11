const router = require("express").Router();
const contact = require("./contact");
const user = require("./users");

router.use("/user", user);
router.use("/contact", contact);

module.exports = router;
