//LIBRARY IMPORTS
const category = require("../models/categories");

const Controller = {
  save: async (req, res) => {
    const { name } = req.body;
    await category
      .create({ CATEGORY_NAME: name })
      .then(() => res.status(200).send({ message: "success" }));
  },
  update: async (req, res) => {
    const { idCategory, name } = req.body;
    await category
      .update({ name: name }, { where: { ID_CATEGORIES: idCategory } })
      .then(() => res.status(200).send({ message: "category updated" }));
  },
};

module.exports = Controller;
