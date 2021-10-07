var express = require("express");
var router = express.Router();
const PaymentController = require("../controllers/payments");
const middleware = require("../middlewares/authenticated");

/* GET users listing. */
router.post("/new", middleware.authenticated, PaymentController.save);

module.exports = router;
