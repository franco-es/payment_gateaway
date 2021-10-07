//LIBRARY IMPORTS
const payments = require("../models/payments");
const user_payment_influent = require("../models/user_payment_influent");
const wallet_payment = require("../models/wallet_payment");
const Wallet = require("../models/wallet");

const Controller = {
  save: async (req, res) => {
    const { influentId, paymentAmaunt } = req.body;
    const idUser = req.user.sub;
    // console.log(idUser);
    const preInfluentWallet = await Wallet.findByPk(influentId);
    const influentWalletAmaunt =
      parseInt(preInfluentWallet.WALLET_AMAUNT) + parseInt(paymentAmaunt);
    const wallet = await Wallet.update(
      {
        WALLET_AMAUNT: influentWalletAmaunt,
      },
      {
        where: {
          USER_ID: influentId,
        },
      }
    );
    res.status(200).send({
      wallet: wallet,
    });
  },
  // update: async (req, res) => {
  //   const { idCategory, name } = req.body;
  //   await category
  //     .update({ name: name }, { where: { ID_CATEGORIES: idCategory } })
  //     .then(() => res.status(200).send({ message: "category updated" }));
  // },
};

module.exports = Controller;
