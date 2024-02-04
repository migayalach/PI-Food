const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");
const { addRecipeDiets } = require("./helperController");
const { resCreateRecipe } = require("../Utils/dietsUtils");
const { clearDataRecipe } = require("../Utils/recipeUtils");
const {
  newArrRecipe,
  responseBdd,
  searchApi,
  dataClear,
} = require("../Utils/recipeUtils");
const axios = require("axios");
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`;

const createRecipes = async (
  nameRecipe,
  imageRecipe,
  summary,
  healthScore,
  created,
  diets
) => {
  const { idRecipe } = await Recipe.create({
    nameRecipe,
    imageRecipe,
    summary,
    created,
    healthScore,
  });
  return await addRecipeDiets(idRecipe, diets);
};

const buscarRecipe = async (name) => {
  const apiRecipes = (await axios.get(`${URL}`)).data.results;
  const apiRecipe = newArrRecipe(apiRecipes);
  const resultApi = searchApi(name, apiRecipe);

  const dataBaseRecipe = await Recipe.findAll({
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    include: {
      model: Diets,
      attributes: ["name"],
    },
  });

  if (dataBaseRecipe.length === 0 && resultApi.length === 0)
    throw Error(`No se ha encontrado la receta con esste nombre: ${name}`);
  const dataBaseClear = responseBdd(dataBaseRecipe);
  return [...dataBaseClear, ...resultApi];
};

const mostrarAllRecipe = async () => {
  const dataRecipe = await Recipe.findAll({
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
  });
  return clearDataRecipe(dataRecipe);
};

const getRecipeData = async (idRecipe) => {
  const recipeId = await Recipe.findOne({
    where: { idRecipe },
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
  });
  return clearDataRecipe([recipeId]);
};

const putRecipeController = () => {
  const {
    idRecipe,
    nameRecipe,
    imageRecipe,
    summary,
    healthScore,
    created,
    diets,
  } = {
    
  };
};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
  putRecipeController,
};
