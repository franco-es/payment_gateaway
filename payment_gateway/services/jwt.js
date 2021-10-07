const jwt = require("jwt-simple");
const moment = require("moment");

exports.createToken = (user) => {
  console.log(user);
  var payload = {
    sub: user.ID_USERS,
    name: user.USER_NAME,
    lastname: user.USER_LASTNAME,
    email: user.USER_EMAIL,
    phone: user.USER_PHONE,
    iat: moment().unix(),
    exp: moment().add(30, "days").unix,
  };
  return jwt.encode(payload, "coco_nuts_gateway_382910_ioepwq");
};
