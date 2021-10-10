const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../services/connectSQL");
const userPaymentInfluent = sequelize.define(
  "user_payment_influent",
  {
    ID_USER_PAYMENT_INFLUENT: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    USER_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "ID_USERS",
      },
    },
    INFLUENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "ID_USERS",
      },
    },
    PAYMENT_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "payments",
        key: "ID_PAYMENTS",
      },
    },
  },
  {
    sequelize,
    tableName: "user_payment_influent",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USER_PAYMENT_INFLUENT" }],
      },
      {
        name: "ID_USER_PAYMENT_INFLUENT_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USER_PAYMENT_INFLUENT" }],
      },
      {
        name: "USER_ID_idx",
        using: "BTREE",
        fields: [{ name: "USER_ID" }],
      },
      {
        name: "INFLUENT_ID_idx",
        using: "BTREE",
        fields: [{ name: "INFLUENT_ID" }],
      },
      {
        name: "PAYMENT_ID_idx",
        using: "BTREE",
        fields: [{ name: "PAYMENT_ID" }],
      },
    ],
  }
);

module.exports = userPaymentInfluent;
