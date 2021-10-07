const { Sequelize, DataTypes } = require("sequelize");
const user_categorie = require("./user_categorie");
const sequelize = require("../services/connectSQL");
const Users = sequelize.define(
  "users",
  {
    ID_USERS: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    USER_NAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_LASTNAME: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_PHONE: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    USER_DNI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_CREATED_AT: {
      type: DataTypes.DATEONLY,
    },
    USER_UPDATED_AT: {
      type: DataTypes.DATEONLY,
    },
  },
  {
    sequelize,
    tableName: "users",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_USERS" }],
      },
    ],
  }
);

Users.hasMany(user_categorie, {
  as: "user_categories",
  foreignKey: "USER_ID",
});

module.exports = Users;
