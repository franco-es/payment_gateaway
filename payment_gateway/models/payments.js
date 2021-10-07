const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../services/connectSQL");
const payments = sequelize.define(
  "payments",
  {
    ID_PAYMENTS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    PAYMENT_AMAUNT: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    PAYMENT_DATE: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Date.now,
    },
  },
  {
    sequelize,
    tableName: "payments",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_PAYMENTS" }],
      },
      {
        name: "ID_PAYMENTS_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_PAYMENTS" }],
      },
    ],
  }
);

module.exports = payments;
