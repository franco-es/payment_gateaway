const service = require("../services/payments");

const Controller = {
  save: async (req, res) => {
    const { influentId, paymentAmaunt } = req.body;
    const idUser = req.user.sub;
    //pago hacia la cuenta real.

    //pagos ficticios
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
    //retiro de comision
    /**
     * si el usuario tiene bonificado verdad
     * NO cobra comision
     * y si no, se cobra comision.
     */
    let comision = parseInt(paymentAmaunt) - 0.99;
    //agregar a la billetera
    await service.update(influentId, walletJson.WALLET_AMAUNT, comision);
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
