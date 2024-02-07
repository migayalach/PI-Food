const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");
const {
  addRecipeDiets,
  existRecipe,
  deleteDietsRecipe,
  duplicateName,
  duplicateImage,
  countData,
  resesponseData,
} = require("./helperController");
const { resCreateRecipe } = require("../Utils/dietsUtils");
const { clearDataRecipe } = require("../Utils/recipeUtils");
const {
  newArrRecipe,
  responseBdd,
  searchApi,
  dataClear,
} = require("../Utils/recipeUtils");

// MOSTRAR TODAS LAS RECETAS
const mostrarAllRecipe = async () => {
  const dataRecipe = await Recipe.findAll({
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
  });
  const results = clearDataRecipe(dataRecipe);
  const count = await countData("recipes");
  return await resesponseData(results, count);
};

// CREAR RECETAS
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
  if ((await duplicateImage(imageRecipe)).length) {
    throw Error`Lo siento no puede haber dos imagenes repetidas`;
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

// BUSQUEDA POR ID
const getRecipeData = async (idRecipe) => {
  const recipeId = await Recipe.findOne({
    where: { idRecipe },
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
  });
  return clearDataRecipe([recipeId]);
};

// EDITAR RECETAS
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
  if ((await duplicateImage(imageRecipe)).length) {
    throw Error`Lo siento no puede haber dos imagenes repetidas`;
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

// BUSCAR RECETAS
function buscarRecipe(page) {
  return page;
}

// ELIMINAR RECETAS
const deleteRecipe = () => {};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
  putRecipeController,
};
