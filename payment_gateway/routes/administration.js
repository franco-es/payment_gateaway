var express = require("express");
var router = express.Router();
const AdminController = require("../controllers/administration");
const middleware = require("../middlewares/authenticated");

/* GET users listing. */
router.get("/getAll", middleware.authenticated, AdminController.get);

module.exports = router;
