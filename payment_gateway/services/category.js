const userCategory = require("../models/user_categorie");

exports.get = async (userId) => {
  return await userCategory.findAll(
    { where: { USER_ID: userId } },
    { raw: true },
    { include: { all: true, nested: true } }
  );
};
