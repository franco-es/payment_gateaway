var express = require("express");
var router = express.Router();
const UserController = require("../controllers/user");

/* GET users listing. */
router.post("/new", UserController.save);
router.post("/login", UserController.login);
router.get("/single", UserController.getUser);

module.exports = router;
