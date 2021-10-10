//LIBRARY IMPORTS
const service = require("../services/administration");

const Controller = {
  get: async (req, res) => {
    let paymentWallets = await service.get();
    res.status(200).send(paymentWallets);
  },
};

module.exports = Controller;
