var express = require("express");
var router = express.Router();
const UserController = require("../controllers/user");
const middleware = require("../middlewares/authenticated");

/* GET users listing. */
router.post("/new", UserController.save);
router.post("/login", UserController.login);
router.post("/savePix", middleware.authenticated, UserController.savePix);
router.put("/updatePix", middleware.authenticated, UserController.updatePix);
router.get("/getPix", UserController.getPix);
router.get("/single", UserController.getUser);
router.get("/singleByUsername", UserController.getUserByUsername);
router.get("/all", UserController.getAllUsers);
router.get("/singleComplete", UserController.getUserComplete);
router.get("/hi", UserController.hi);

module.exports = router;
