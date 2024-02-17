const { Diets, Recipe } = require("../db");
const localBdd = require("../Utils/dataBaseLocal");
const { removeHTMLtext } = require("../Utils/recipeUtils");
const { clearDiets, reviewDiets } = require("../helpers/clearDataBdd");
const {
  existDiets,
  dietsPrommise,
  addRecipeDiets,
} = require("./helperController");

const updateDataBdd = async () => {
  // PRIMERO AGREGAR DIETAS
  const dataDietsBdd = (await existDiets()).map(({ nameDiet }) => nameDiet);
  const dataDiets = (await localBdd.map(({ diets }) => diets)).flat();
  const dietsResult = clearDiets(dataDiets);
  const dietsData = reviewDiets(dietsResult, dataDietsBdd);
  if (!dietsData.length) {
    throw Error`No hay nuevas dietas para poder agregar a la base de datos`;
  }
  await Promise.all(
    dietsData.map(async (nameDiet) => await Diets.create({ nameDiet }))
  );

  if (localBdd.length === (await Recipe.count())) {
    throw Error`No hay recetas nuevas para poder agregar a la base de datos`;
  }

  // SEGUNDO AGREGAR RECETAS
  const dataRecipe = localBdd.map(
    async ({ healthScore, title, image, summary, diets }) => ({
      healthScore,
      title,
      image,
      summary: removeHTMLtext(summary),
      diets: await dietsPrommise(diets),
    })
  );
  const resPromisseRecipe = await Promise.all(dataRecipe);
  // AGREGAR A LA TABLA RECETAS
  await Promise.all(
    resPromisseRecipe.map(
      async ({ healthScore, title, image, summary, diets }) => {
        const { idRecipe } = await Recipe.create({
          nameRecipe: title,
          imageRecipe: image,
          summary,
          healthScore,
        });
        // AGREGAR A LA TABLA INTERMEDIA
        return await addRecipeDiets(idRecipe, diets);
      }
    )
  );
  return `Datos introducidos con exito`;
};

module.exports = updateDataBdd;
