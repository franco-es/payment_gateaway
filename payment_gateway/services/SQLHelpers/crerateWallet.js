const connection = require("../connectSQL");
const { v4: uuidv4 } = require("uuid");
const check = require("./check");

exports.createWallet = async (id) => {
  return new Promise((resolve, reject) => {
    var querySearch =
      "INSERT INTO wallet(USER_ID, WALLET_AMAUNT, WALLET_UUID) VALUES(?, ?, ?) " +
      ";";
    var uuid = uuidv4();
    var params = [id, 0, uuid];
    connection.getConnection((err, connectionTemp) => {
      connection.query(querySearch, params, async (err, result) => {
        try {
          resolve(result);
        } catch (err) {
          reject(err);
        }
      });
      connectionTemp.release();
    });
  });
};
