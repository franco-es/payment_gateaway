const Sequelize = require("sequelize");

const sequelize = new Sequelize("payment_pasarella", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  logging: false,
});
sequelize.sync({ alter: true });

module.exports = sequelize;
