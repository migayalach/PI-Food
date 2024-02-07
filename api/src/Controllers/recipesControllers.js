const { Recipe, Diets } = require("../db");
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
const { clearDataRecipe } = require("../Utils/recipeUtils");

async function recipesData() {
  return await Recipe.findAll({
    include: { model: Diets, attributes: ["idDiet", "nameDiet"] },
    order: [["idRecipe", "ASC"]],
  });
}

// MOSTRAR TODAS LAS RECETAS
const mostrarAllRecipe = async () => {
  const dataRecipe = await recipesData();
  const results = clearDataRecipe(dataRecipe);
  const count = await countData("recipes");
  return await resesponseData(results, count, (page = 1));
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
async function buscarRecipe(page) {
  if (page < 0) page = 1;
  const dataRecipe = await recipesData();
  const results = clearDataRecipe(dataRecipe);
  const count = await countData("recipes");
  return await resesponseData(results, count, page);
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
