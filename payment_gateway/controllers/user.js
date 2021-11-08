//LIBRARY IMPORTS
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");

//MY IMPORTS
// const wallet = require("../services/SQLHelpers/crerateWallet");
const users = require("../models/users");
const categories = require("../models/categories");
const userCategory = require("../models/user_categorie");
const wallet = require("../models/wallet");

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
      switch(error.errors[0].message){
        case "users.USER_EMAIL must be unique":
          res.send("el email debe ser unico");
        case "users.USER_USERNAME must be unique":
          res.send("el username debe ser unico");
      }
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
};

module.exports = Controller;
