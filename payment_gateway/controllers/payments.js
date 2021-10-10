const service = require("../services/payments");

const Controller = {
  save: async (req, res) => {
    const { influentId, paymentAmaunt } = req.body;
    const idUser = req.user.sub;
    const wallet = await service.get(influentId);
    let walletJson = wallet.toJSON();
    let payment = await service.newPayment(paymentAmaunt);
    let paymentJson = payment.toJSON();
    let upi = await service.newPaymentInfluent(
      idUser,
      influentId,
      paymentJson.ID_PAYMENTS
    );
    let upiJson = upi.toJSON();
    let walletPayment = await service.newWalletPayment(
      walletJson.ID_WALLET,
      upiJson.ID_USER_PAYMENT_INFLUENT
    );
    let walletPaymentJson = walletPayment.toJSON();
    console.log(walletPaymentJson);
    await service.update(influentId, walletJson.WALLET_AMAUNT, paymentAmaunt);
    res.status(200).send("success");
  },
  // update: async (req, res) => {
  //   const { idCategory, name } = req.body;
  //   await category
  //     .update({ name: name }, { where: { ID_CATEGORIES: idCategory } })
  //     .then(() => res.status(200).send({ message: "category updated" }));
  // },
};

module.exports = Controller;
