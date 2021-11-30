//LIBRARY IMPORTS
const bcrypt = require("bcrypt");
const jwt = require("../services/jwt");

//MY IMPORTS
// const wallet = require("../services/SQLHelpers/crerateWallet");
const users = require("../models/users");
const pix = require("../models/pix");
const categories = require("../models/categories");
const userCategory = require("../models/user_categorie");
const wallet = require("../models/wallet");

//services
// const encript = require('../services/crypto')

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
      USER_COUNTER: 0,
      USER_DELETED: 0,
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
    const { id } = req.query;
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
  getAllUsers: async (req, res) => {
    try {
      var data = [];
      let query = await users.findAll({ where: { USER_DELETED: 0 } });
      query.forEach(async (user) => {
        let userData = user.dataValues;
        delete userData.USER_PASSWORD;
        delete userData.USER_DELETED;
        delete userData.USER_CREATED_AT;
        delete userData.USER_UPDATED_AT;
        const pixDB = await pix.findOne({
          where: { ID_USER: userData.ID_USERS },
        });
        let pixJSON = pixDB.toJSON();
        let pixCodeDecoded = jwt.decodePix(pixJSON.PIX_CODE);
        let walletUser = await wallet.findOne({
          where: { USER_ID: userData.ID_USERS },
        });
        let walletJSON = walletUser.toJSON();
        delete walletJSON.ID_WALLET;
        delete walletJSON.WALLET_UUID;
        var userJSON = {
          user: userData,
          wallet: walletJSON,
          pix: pixCodeDecoded,
        };
        data.push(userJSON);
        console.log(data);
      });
      console.log("data" + data);

      res.status(200).send(data);
    } catch (error) {
      console.log(error);
      res.status(400).send({
        error: error,
      });
    }
  },
  getUserComplete: async (req, res) => {
    const { id } = req.query;
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
        delete userJSON.USER_DELETED;
        delete userJSON.USER_CREATED_AT;
        delete userJSON.USER_UPDATED_AT;
        const pixDB = await pix.findOne({ where: { ID_USER: id } });
        let pixJSON = pixDB.toJSON();
        let pixCodeDecoded = jwt.decodePix(pixJSON.PIX_CODE);
        let walletUser = await wallet.findOne({ where: { USER_ID: id } });
        let walletJSON = walletUser.toJSON();
        delete walletJSON.ID_WALLET;
        delete walletJSON.WALLET_UUID;

        res.status(200).send({
          message: "user",
          user: userJSON,
          pix: pixCodeDecoded,
          wallet: walletJSON,
        });
      }
    } catch (error) {
      res.status(400).send({
        message: "Cannot read properties of null, please provide an Id VALID",
        error: error,
      });
    }
  },
  savePix: async (req, res) => {
    const { pixCode } = req.body;
    const { sub } = req.user;

    try {
      const pixHashed = jwt.createPixToken(pixCode);
      console.log(pixHashed);

      const pixParams = {
        PIX_CODE: pixHashed,
        ID_USER: sub,
      };
      let pixCreated = await pix.create(pixParams);
      res.status(200).send({
        message: "success",
        pix: pixCreated,
      });
    } catch (error) {
      res.status(404).send({
        message: "please send valid pix code.",
      });
    }
  },
  getPix: async (req, res) => {
    const { id } = req.query;
    console.log(id);
    try {
      const pixDB = await pix.findOne({ where: { ID_USER: id } });
      let pixJSON = pixDB.toJSON();
      let pixCodeDecoded = jwt.decodePix(pixJSON.PIX_CODE);

      const params = {
        id_pix: pixJSON.ID_PIX,
        id: pixJSON.ID_USER,
        code: pixCodeDecoded,
      };
      res.status(200).send({
        message: "success",
        pix: params,
      });
    } catch (error) {
      res.status(400).send({
        message: "Cannot read properties of null, please provide an Id VALID",
      });
    }
  },
  updatePix: async (req, res) => {
    const { sub } = req.user;
    const { pixCode } = req.body;

    try {
      const pixHashed = jwt.createPixToken(pixCode);
      const pixUpdated = await pix.findOne({
        where: {
          ID_USER: sub,
        },
      });

      if (!pixUpdated) {
        res.status(400).send({
          message: "pix not found",
        });
      }
      pixUpdated.PIX_CODE = pixHashed;
      pixUpdated.save();

      res.status(200).send({
        message: "success",
        pix: pixUpdated,
      });
    } catch (error) {
      res.status(400).send({
        message: "error",
        error: error,
      });
    }
  },
};

module.exports = Controller;
