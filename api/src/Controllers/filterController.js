const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");

function arrayFun(diet, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].idDiet === diet) {
      return array;
    }
  }
  return false;
}

function responseData(healthScore, order, diet, data) {
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
    return await Recipe.findAll({
      where: { nameRecipe: { [Op.iLike]: `%${name}%` } },
      include: {
        model: Diets,
        where: { idDiet: diets },
        attributes: ["idDiet", "nameDiet"],
      },
      order: [["healthScore", order]],
    });
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

  return responseData(healthScore, order, diets, data);
};

module.exports = { filterData };
