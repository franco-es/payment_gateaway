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
    username: user.USER_USERNAME,
    iat: moment().unix(),
    exp: moment().add(30, "days").unix,
  };
  return jwt.encode(payload, process.env.SECRET_KEY);
};

exports.createPixToken = (pix) => {
  return jwt.encode(pix, process.env.SECRET_KEY)
}

exports.decodePix = (pix) => {
  if (pix != null || !+ "") {
    return jwt.decode(pix, process.env.SECRET_KEY)
  } else {
    return null;
  }
}
