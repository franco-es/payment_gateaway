const jwt = require("jwt-simple");
const moment = require("moment");

exports.createToken = (user) => {
  var payload = {
    sub: user.ID_USERS,
    name: user.USER_NAME,
    lastname: user.USER_LASTNAME,
    email: user.USER_EMAIL,
    phone: user.USER_PHONE,
    iat: moment().unix(),
    exp: moment().add(30, "days").unix,
  };
  return jwt.encode(payload, "esta_es_la_clave_secreta_1234_0987");
};
