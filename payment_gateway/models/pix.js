const { Sequelize, DataTypes } = require("sequelize");
const user_categorie = require("./user_categorie");
const sequelize = require("../services/connectSQL");
const Users = require("./users");

const Pix = sequelize.define(
  "pix",
  {
    ID_PIX: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    PIX_CODE: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ID_USER: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "pix",
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [{ name: "ID_PIX" }],
      },
    ],
  }
);

// Pix.belongsTo(Users, {
//   foreignKey: "ID_USER",
// });

module.exports = Pix;
