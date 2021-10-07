const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../services/connectSQL");
const categories = sequelize.define(
  "categories",
  {
    ID_CATEGORIES: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    CATEGORY_NAME: {
      type: DataTypes.STRING(45),
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: "categories",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_CATEGORIES" }],
      },
      {
        name: "ID_CATEGORIES_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_CATEGORIES" }],
      },
    ],
  }
);
module.exports = categories;
