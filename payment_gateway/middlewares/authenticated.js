"use strict";

var jwt = require("jwt-simple");
var moment = require("moment");
var secret = "coco_nuts_gateway_382910_ioepwq";

exports.authenticated = (req, res, next) => {
  const { authorization } = req.headers;

  //check token in headers
  if (!authorization) {
    return res.status(403).send({
      message: "Invalid authorization",
    });
  }
  //clean token
  var token = authorization.replace(/['"]+/g, "");
  try {
    //decode token
    var payload = jwt.decode(token, secret);
    //check expires token
    if (payload.exp <= moment().unix()) {
      return res.status(404).send({
        message: "token expired",
      });
    }
  } catch (err) {
    return res.status(404).send({
      message: "invalid token",
    });
  }
  //add user identidy to request
  req.user = payload;
  // next action
  next();
};
