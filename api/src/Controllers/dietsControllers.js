const { Diets } = require("../db");

const recivedDiet = async () => {
  return await Diets.findAll();
};

module.exports = {
  recivedDiet,
};
