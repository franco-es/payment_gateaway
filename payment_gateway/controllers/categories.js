//LIBRARY IMPORTS
const category = require("../models/categories");
const userCategory = require("../models/user_categorie");

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
  getCategory: async (req, res) => {
    const { sub } = req.user;
    console.log(sub);

    await userCategory
      .findOne({ where: { USER_ID: sub } })
      .then(async (response) => {
        await category
          .findByPk(response.CATEGORY_ID)
          .then((categorySuccess) => {
            res.send({
              category: categorySuccess.CATEGORY_NAME,
            });
          });
      })
      .catch((err) => {
        res.send({
          err,
        });
      });
  },
};

module.exports = Controller;
