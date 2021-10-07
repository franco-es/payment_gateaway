const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../services/connectSQL");
const administration = sequelize.define(
  "administration",
  {
    ID_ADMINISTRATION: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    ADMINISTRATION_ACCOUNT_NUMBER: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ADMINISTRATION_COUNTER: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "administration",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_ADMINISTRATION" }],
      },
    ],
  }
);
module.exports = administration;
