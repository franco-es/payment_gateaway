const connection = require("../services/connectSQL");
const bcrypt = require("bcrypt");

const jwt = require("../services/jwt");

const saltRouds = 10;

const Controller = {
  save: (req, res, next) => {
    const { name, lastName, email, password, dni, phone } = req.body;
    var querySearch =
      "SELECT * FROM users WHERE USER_EMAIL = " + "'" + email + "'" + ";";
    connection.getConnection((err, connectionTemp) => {
      connection.query(querySearch, (err, result) => {
        if (result.length > 0) {
          res.status(400).send({
            message: "there is a user with that email already",
            user: result[0].USER_EMAIL,
          });
        } else {
          const passwordHashed = bcrypt.hashSync(password, saltRouds);

          var params = [name, lastName, email, passwordHashed, dni, phone];
          var query =
            "INSERT INTO users(USER_NAME, USER_LASTNAME, USER_EMAIL, USER_PASSWORD, USER_PHONE, USER_DNI, USER_BANNED) VALUES(?, ?,?,?,?,?,0)";
          connection.query(query, params, (err, result) => {
            if (!err) {
              res.status(200).send({
                message: "user inserted successfully",
                user: result.USER_EMAIL,
              });
            } else {
              res
                .status(500)
                .send({ message: "error inserting user", err: err });
            }
          });
        }
      });
      connectionTemp.release();
    });
  },

  login: (req, res) => {
    const { email, password } = req.body;
    var querySearch =
      "SELECT * FROM users WHERE USER_EMAIL = " + "'" + email + "'" + ";";
    connection.getConnection((err, connectionTemp) => {
      connection.query(querySearch, (err, result) => {
        console.log(result);
        if (result.length > 0) {
          const passwordHashed = bcrypt.compareSync(
            password,
            result[0].USER_PASSWORD
          );
          console.log(passwordHashed);
          if (passwordHashed) {
            const token = jwt.createToken(result[0]);
            const user = result[0];
            delete user.USER_PASSWORD;
            res.status(200).send({
              token: token,
              user: user,
            });
          }
        } else {
          res.status(401).send({
            message: "Invalid username or password",
          });
        }
      });
      connectionTemp.release();
    });
  },
};

module.exports = Controller;
