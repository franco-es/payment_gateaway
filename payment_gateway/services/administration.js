const WalletPayment = require("../models/wallet_payment");

exports.get = async () => {
  return await WalletPayment.findAll(
    { raw: true },
    { include: { all: true, nested: true } }
  );
};
