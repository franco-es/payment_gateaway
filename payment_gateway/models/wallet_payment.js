const { Sequelize, DataTypes } = require("sequelize");
const Wallet = require("./wallet");
const user_payment_influent = require("./user_payment_influent");
const sequelize = require("../services/connectSQL");
const walletPayment = sequelize.define(
  "wallet_payment",
  {
    ID_WALLET_PAYMENT: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
    },
    WALLET_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "wallet",
        key: "ID_WALLET",
      },
    },
    PAYMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user_payment_influent",
        key: "ID_USER_PAYMENT_INFLUENT",
      },
    },
  },
  {
    sequelize,
    tableName: "wallet_payment",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_WALLET_PAYMENT" }],
      },
      {
        name: "PAYMENT_ID_idx",
        using: "BTREE",
        fields: [{ name: "PAYMENT_ID" }],
      },
      {
        name: "WW_ID_idx",
        using: "BTREE",
        fields: [{ name: "WALLET_ID" }],
      },
    ],
  }
);
walletPayment.belongsTo(Wallet, { as: "WALLET", foreignKey: "WALLET_ID" });
walletPayment.belongsTo(user_payment_influent, {
  as: "PAYMENT",
  foreignKey: "PAYMENT_ID",
});
module.exports = walletPayment;
