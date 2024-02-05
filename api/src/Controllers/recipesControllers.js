const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");
const {
  addRecipeDiets,
  existRecipe,
  deleteDietsRecipe,
  duplicateName,
} = require("./helperController");
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
  if ((await duplicateName(nameRecipe)).length) {
    throw Error`Lo siento no puede haber dos recetas con el mismo nombre`;
  }
  const { idRecipe } = await Recipe.create({
    nameRecipe,
    imageRecipe,
    summary,
    created,
    healthScore,
  });

  if (idRecipe) {
    return await addRecipeDiets(idRecipe, diets);
  }

  throw Error`No se pudo crear la receta`;
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

const putRecipeController = async (
  idRecipe,
  nameRecipe,
  imageRecipe,
  summary,
  healthScore,
  created,
  diets
) => {
  if (!(await existRecipe(idRecipe))) {
    throw Error`La receta que usted desea modificar no existe`;
  }
  if (!created) {
    throw Error`No tiene permisos para modificar esta receta`;
  }
  if ((await duplicateName(nameRecipe)).length) {
    throw Error`Lo siento no puede haber dos recetas con el mismo nombre`;
  }
  // EDITAR RECETAS
  await Recipe.update(
    { nameRecipe, imageRecipe, summary, healthScore },
    { where: { idRecipe } }
  );
  // ELIMINAR LOS DATOS DE LA TABLA INTERMEDIA
  await deleteDietsRecipe(idRecipe);
  // AGREGAR DATOS A LA TABLA INTERMEDIA
  await addRecipeDiets(idRecipe, diets);
  return await getRecipeData(idRecipe);
};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
  putRecipeController,
};
