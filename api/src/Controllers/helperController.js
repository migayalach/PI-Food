const { Recipe, Diets } = require("../db");

async function existDiets() {
  return await Diets.findAll();
}

module.exports = {
  existDiets,
};
