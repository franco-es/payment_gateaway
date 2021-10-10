const Wallet = require("../models/wallet");
const Payment = require("../models/payments");
const WalletPayment = require("../models/wallet_payment");
const UPI = require("../models/user_payment_influent");

exports.get = async (idUser) => {
  return await Wallet.findByPk(idUser);
};

exports.update = async (idUser, preAmaunt, amaunt) => {
  return await Wallet.update(
    {
      WALLET_AMAUNT: parseInt(preAmaunt) + parseInt(amaunt),
    },
    {
      where: {
        USER_ID: idUser,
      },
    }
  );
};
exports.newPayment = async (amaunt) => {
  return await Payment.create({ PAYMENT_AMAUNT: parseInt(amaunt) });
};
exports.newPaymentInfluent = async (userId, influentId, paymentId) => {
  const obj = {
    USER_ID: userId,
    INFLUENT_ID: influentId,
    PAYMENT_ID: paymentId,
  };

  return await UPI.create(obj);
};
exports.newWalletPayment = async (walletId, paymentId) => {
  const obj = {
    WALLET_ID: walletId,
    PAYMENT_ID: paymentId,
  };

  return await WalletPayment.create(obj);
};
