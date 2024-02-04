const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");

async function existDiets() {
  return await Diets.findAll();
}

async function dietsPrommise(diets) {
  const diet = await Promise.all(
    diets.map((nameDiet) =>
      Diets.findOne({ where: { nameDiet: { [Op.like]: `${nameDiet}` } } })
    )
  );
  return diet.map(({ idDiet }) => idDiet);
}

async function addRecipeDiets(idRecipe, diets) {
  await Promise.all(
    diets.map(async (idDiet) => {
      return DietsRecipe.create({ idDiet, idRecipe });
    })
  );
  return `Receta creada con exito`;
}

module.exports = {
  existDiets,
  dietsPrommise,
  addRecipeDiets,
};
