var express = require("express");
var router = express.Router();
const CategoryController = require("../controllers/categories");
const middleware = require("../middlewares/authenticated");
/* GET users listing. */
router.post("/new", CategoryController.save);
router.post("/update", middleware.authenticated, CategoryController.update);
router.get(
  "/getCategory",
  middleware.authenticated,
  CategoryController.getCategory
);

module.exports = router;
