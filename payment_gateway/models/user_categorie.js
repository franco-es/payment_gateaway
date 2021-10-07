const { Sequelize, DataTypes } = require("sequelize");
const categories = require("./categories");
const users = require("./users");
const sequelize = require("../services/connectSQL");
const userCategory = sequelize.define(
  "user_categorie",
  {
    ID_USER_CATEGORIE: {
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
    CATEGORY_ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "categories",
        key: "ID_CATEGORIES",
      },
    },
  },
  {
    sequelize,
    tableName: "user_categorie",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USER_CATEGORIE" }],
      },
      {
        name: "ID_USER_CATEGORIE_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USER_CATEGORIE" }],
      },
      {
        name: "U_ID_idx",
        using: "BTREE",
        fields: [{ name: "USER_ID" }],
      },
      {
        name: "C_ID_idx",
        using: "BTREE",
        fields: [{ name: "CATEGORY_ID" }],
      },
    ],
  }
);

userCategory.belongsTo(categories, {
  foreignKey: "CATEGORY_ID",
});
// userCategory.belongsTo(users, { foreignKey: "USER_ID" });

module.exports = userCategory;
