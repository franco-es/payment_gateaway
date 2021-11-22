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
    USER_COUNTER: {
      type: DataTypes.INTEGER,
      default: 0,
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
      unique: true,
    },
    USER_PASSWORD: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_USERNAME: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    USER_PHONE: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    USER_DNI: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    USER_DELETED: {
      type: DataTypes.BOOLEAN,
      default: 'false',
    },
    USER_CREATED_AT: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
    },
    USER_UPDATED_AT: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
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

module.exports = Users;
