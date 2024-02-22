const { clearDataRecipe } = require("../Utils/recipeUtils");
const { Recipe, Diets } = require("../db");
const { resesponseData } = require("./helperController");
const { Op } = require("sequelize");

function arrayFun(diet, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].idDiet === diet) {
      return array;
    }
  }
  return false;
}

function responseDataInfo(healthScore, order, diet, data) {
  return data
    .map(
      ({
        idRecipe,
        nameRecipe,
        imageRecipe,
        summary,
        healthScore,
        created,
        favorite,
        diets,
      }) => ({
        idRecipe,
        nameRecipe,
        imageRecipe,
        summary,
        healthScore,
        created,
        favorite,
        diets: diet ? arrayFun(+diet, diets) : diets,
      })
    )
    .filter(({ diets }) => diets !== false);
}

const filterData = async (name, healthScore, order, diets) => {
  if (name && healthScore && order && diets) {
    const dataFilfer = await Recipe.findAll({
      where: { nameRecipe: { [Op.iLike]: `%${name}%` } },
      include: {
        model: Diets,
        where: { idDiet: diets },
        attributes: ["idDiet", "nameDiet"],
      },
      order: [["healthScore", order]],
    });
    const results = clearDataRecipe(dataFilfer);
    const count = results.length;
    return await resesponseData(results, count, (page = 1));
  }

  let orderData = order;
  if (!orderData) {
    orderData = "ASC";
  }
  const data = await Recipe.findAll({
    where: { nameRecipe: { [Op.iLike]: `%${name}%` } },
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
    order: [["nameRecipe", orderData]],
  });

  return responseDataInfo(healthScore, order, diets, data);
};

module.exports = { filterData };
