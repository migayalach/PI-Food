const { Recipe, Diets } = require("../db");
const {
  addRecipeDiets,
  existRecipe,
  deleteDietsRecipe,
  duplicateName,
  duplicateImage,
  countData,
  resesponseData,
  recipesData,
  recipeSearchName,
  responseDataName,
} = require("./helperController");
const { clearDataRecipe, clearDataRecipeId } = require("../Utils/recipeUtils");

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
  const [data] = clearDataRecipeId([recipeId]);
  return data;
};

// EDITAR RECETAS
const putRecipeController = async (
  idRecipe,
  nameRecipe,
  imageRecipe,
  summary,
  healthScore,
  created,
  diets,
  favorite,
  flag
) => {
  if (flag === "favorite") {
    await Recipe.update({ favorite }, { where: { idRecipe } });
    return await mostrarAllRecipe();
  }

  if (!(await existRecipe(idRecipe))) {
    throw Error`La receta que usted desea modificar no existe`;
  }
  if (!created) {
    throw Error`No tiene permisos para modificar esta receta`;
  }
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

const searchName = async (name, page) => {
  const dataRecipe = await recipeSearchName(name);
  const results = clearDataRecipe(dataRecipe);
  const count = results.length;
  if (name && !page) {
    return await responseDataName(results, count, (page = 1), name);
  }
  return await responseDataName(results, count, page, name);
};

// ELIMINAR RECETAS
const deleteRecipe = () => {};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
  putRecipeController,
  searchName,
};
