var DataTypes = require("sequelize").DataTypes;
var _administration = require("./administration");
var _categories = require("./categories");
var _payments = require("./payments");
var _user_categorie = require("./user_categorie");
var _user_payment_influent = require("./user_payment_influent");
var _users = require("./users");
var _wallet = require("./wallet");
var _wallet_payment = require("./wallet_payment");

function initModels(sequelize) {
  var administration = _administration(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var user_categorie = _user_categorie(sequelize, DataTypes);
  var user_payment_influent = _user_payment_influent(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var wallet = _wallet(sequelize, DataTypes);
  var wallet_payment = _wallet_payment(sequelize, DataTypes);

  user_categorie.belongsTo(categories, {
    as: "CATEGORY",
    foreignKey: "CATEGORY_ID",
  });
  categories.hasMany(user_categorie, {
    as: "user_categories",
    foreignKey: "CATEGORY_ID",
  });
  user_payment_influent.belongsTo(payments, {
    as: "PAYMENT",
    foreignKey: "PAYMENT_ID",
  });
  payments.hasMany(user_payment_influent, {
    as: "user_payment_influents",
    foreignKey: "PAYMENT_ID",
  });
  wallet_payment.belongsTo(user_payment_influent, {
    as: "PAYMENT",
    foreignKey: "PAYMENT_ID",
  });
  user_payment_influent.hasMany(wallet_payment, {
    as: "wallet_payments",
    foreignKey: "PAYMENT_ID",
  });
  user_categorie.belongsTo(users, { as: "USER", foreignKey: "USER_ID" });
  users.hasMany(user_categorie, {
    as: "user_categories",
    foreignKey: "USER_ID",
  });
  user_payment_influent.belongsTo(users, {
    as: "INFLUENT",
    foreignKey: "INFLUENT_ID",
  });
  users.hasMany(user_payment_influent, {
    as: "user_payment_influents",
    foreignKey: "INFLUENT_ID",
  });
  user_payment_influent.belongsTo(users, { as: "USER", foreignKey: "USER_ID" });
  users.hasMany(user_payment_influent, {
    as: "USER_user_payment_influents",
    foreignKey: "USER_ID",
  });
  wallet.belongsTo(users, { as: "USER", foreignKey: "USER_ID" });
  users.hasMany(wallet, { as: "wallets", foreignKey: "USER_ID" });
  wallet_payment.belongsTo(wallet, { as: "WALLET", foreignKey: "WALLET_ID" });
  wallet.hasMany(wallet_payment, {
    as: "wallet_payments",
    foreignKey: "WALLET_ID",
  });

  return {
    administration,
    categories,
    payments,
    user_categorie,
    user_payment_influent,
    users,
    wallet,
    wallet_payment,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
