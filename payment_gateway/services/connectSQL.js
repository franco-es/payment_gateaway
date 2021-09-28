var mysql = require("mysql");

var connection = mysql.createPool({
  host: "127.0.0.1",
  port: "3308",
  user: "root",
  password: "admin",
  database: "payment_pasarella",
});

module.exports = connection;
