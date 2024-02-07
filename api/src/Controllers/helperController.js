const { Recipe, Diets, DietsRecipe } = require("../db");
const { pagination, responseInfo, responseResult } = require("./pagination");
const { Op } = require("sequelize");

// CONSULTAS SQL
async function existDiets() {
  return await Diets.findAll();
}

async function existRecipe(idRecipe) {
  return await Recipe.findOne({ where: { idRecipe } });
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

async function deleteDietsRecipe(idRecipe) {
  return await DietsRecipe.destroy({ where: { idRecipe } });
}

async function duplicateName(nameRecipe) {
  return await Recipe.findAll({
    where: { nameRecipe: { [Op.iLike]: `%${nameRecipe}%` } },
  });
}

async function duplicateImage(imageRecipe) {
  return await Recipe.findAll({
    where: { imageRecipe: { [Op.like]: `${imageRecipe}` } },
  });
}

async function countData(option) {
  switch (option) {
    case "recipes":
      return await Recipe.count();
    case "diets":
      return await Diets.count();
    default:
      break;
  }
}

function resesponseData(data, count, page) {
  const info = responseInfo(count, page);
  const result = responseResult(data);
  return { info, result: result[page] };
}

module.exports = {
  existDiets,
  existRecipe,
  dietsPrommise,
  addRecipeDiets,
  deleteDietsRecipe,
  duplicateName,
  duplicateImage,
  countData,
  resesponseData,
};
