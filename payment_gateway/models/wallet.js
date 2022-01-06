const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../services/connectSQL");
const wallet = sequelize.define(
  "wallet",
  {
    ID_WALLET: {
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
    WALLET_AMAUNT: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
    },
    WALLET_UUID: {
      type: DataTypes.UUID,
      allowNull: true,
      defaultValue: Sequelize.UUIDV4,
    },
  },
  {
    sequelize,
    tableName: "wallet",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_WALLET" }],
      },
      {
        name: "ID_WALLET_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_WALLET" }],
      },
      {
        name: "W_USER_ID_idx",
        using: "BTREE",
        fields: [{ name: "USER_ID" }],
      },
    ],
  }
);

module.exports = wallet;
