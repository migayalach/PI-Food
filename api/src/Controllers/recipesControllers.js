const { Recipe, Diets } = require("../db");
const { Op } = require("sequelize");
const { resCreateRecipe } = require("../Utils/dietsUtils");
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
  nombre,
  imagen,
  resumen,
  nivel,
  pasoApaso,
  diet
  ) => {
  const recipe = await Recipe.create({
    name: nombre,
    image: imagen,
    resumenPlato: resumen,
    nivel,
    pasoApaso,
  });
  if (diet && diet.length > 0) {
    const dietRecord = await Diets.findAll({
      where: {
        name: diet,
      },
    });
    await recipe.addDiets(dietRecord);
  }
  return resCreateRecipe(recipe, diet);
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
  const apiRecipes = (await axios.get(`${URL}`)).data.results;
  const data = await Recipe.findAll({
    include: [{ model: Diets }],
  });
  const dataRes = dataClear(data);

  const apiRecipe = newArrRecipe(apiRecipes);
  return [...dataRes, ...apiRecipe];
};

const getRecipeData = async (typeData, data) => {
  const response =
    typeData === "api"
      ? (
          await axios.get(
            `https://api.spoonacular.com/recipes/${data}/information?apiKey=${API_KEY}`
          )
        ).data
      : await Recipe.findByPk(data, {
          include: {
            model: Diets,
            attributes: ["name"],
          },
        });

  if (typeData === "bdd") return responseBdd([response]);
  return newArrRecipe([response]);
};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
};
