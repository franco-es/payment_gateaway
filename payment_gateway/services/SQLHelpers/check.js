const connection = require("../connectSQL");

exports.check = (table, codition, param) => {
  return new Promise((resolve, reject) => {
    var querySearch =
      "SELECT * FROM " +
      table +
      " WHERE " +
      codition +
      " = " +
      "'" +
      param +
      "'" +
      ";";
    var Return;
    connection.getConnection((err, connectionTemp) => {
      connection.query(querySearch, (err, result) => {
        try {
          Return = result;
          resolve(Return);
        } catch (err) {
          reject(err);
        }
      });
      connectionTemp.release();
    });
  });
};
