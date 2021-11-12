//LIBRARY IMPORTS
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");

//MY IMPORTS
// const wallet = require("../services/SQLHelpers/crerateWallet");
const users = require("../models/users");
const categories = require("../models/categories");
const userCategory = require("../models/user_categorie");
const wallet = require("../models/wallet");
const { use } = require("../routes/users");

const saltRouds = 10;

const Controller = {
  save: async (req, res) => {
    const { name, lastName, email, password, dni, phone, category, username } =
      req.body;

    const passwordHashed = bcrypt.hashSync(password, saltRouds);
    var params = {
      USER_NAME: name,
      USER_LASTNAME: lastName,
      USER_EMAIL: email,
      USER_PASSWORD: passwordHashed,
      USER_USERNAME: username,
      USER_PHONE: phone,
      USER_DNI: dni,
    };
    try {
      const userCreated = await users.create(params);
      const user = userCreated.toJSON();
      // console.log(user.ID_USERS);
      const walletParams = {
        USER_ID: user.ID_USERS,
      };
      const walletCreate = await wallet.create(walletParams);
      const walletCreated = walletCreate.toJSON();
      const categoryParams = {
        USER_ID: user.ID_USERS,
        CATEGORY_ID: category,
      };
      let categoryCreated = await userCategory.create(categoryParams);
      res.status(200).send({
        message: "user created",
        user: user,
        wallet: walletCreated,
        categoria: categoryCreated.toJSON(),
      });
    } catch (error) {
      switch (error.errors[0].message) {
        case "users.USER_EMAIL must be unique":
          res.send("el email debe ser unico");
        case "users.USER_USERNAME must be unique":
          res.send("el username debe ser unico");
      }
      res.send(error.errors[0]);
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    var isUser;
    try {
      isUser = await users.findAll({
        where: {
          USER_EMAIL: email,
        },
      });
      var userCombined = JSON.stringify(isUser[0], null, 2);
      console.log("user: " + userCombined);
    } catch (error) {
      console.group(error);
    }
    if (isUser.length > 0) {
      const passwordHashed = bcrypt.compareSync(
        password,
        isUser[0].USER_PASSWORD
      );
      if (passwordHashed) {
        const token = jwt.createToken(isUser[0]);
        const userJSON = JSON.parse(userCombined);
        delete userJSON.USER_PASSWORD;
        res.status(200).send({
          token: token,
          user: userJSON,
        });
      }
    } else {
      res.status(401).send({
        message: "Invalid username or password",
      });
    }
  },

  getUser: async (req, res) => {
    const { id } = req.body;
    console.log(id);
    try {
      if (id === null || "") {
        return res.status(400).send({
          message: "not Id provided",
        });
      } else {
        let user = await users.findByPk(id);
        let userJSON = user.toJSON();
        delete userJSON.USER_PASSWORD;
        delete userJSON.USER_NAME;
        delete userJSON.USER_LASTNAME;
        delete userJSON.USER_EMAIL;
        delete userJSON.USER_PHONE;
        delete userJSON.USER_DNI;
        delete userJSON.USER_DELETED;
        delete userJSON.USER_CREATED_AT;
        delete userJSON.USER_UPDATED_AT;

        res.status(200).send({
          message: "user",
          user: userJSON,
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "Cannot read properties of null, please provide an Id VALID",
      });
    }
  },
};

module.exports = Controller;
