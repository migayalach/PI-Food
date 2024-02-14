import { imageRegex } from "../../../Utils/regex";

export const validationRecipe = (recipe) => {
  const errorRecipe = {};
  const maxLengthName = 20;
  const minLengthName = 12;
  const minLengthSummary = 255;
  const maxLengthSummary = 10012;
  const minHealthScore = 1;
  const maxHealthScore = 100;

  if (recipe.nameRecipe.length < 1) {
    errorRecipe.nameRecipe = `Por favor ingrese un nombre`;
  }

  if (
    recipe.nameRecipe.length > 1 &&
    recipe.nameRecipe.length < minLengthName
  ) {
    errorRecipe.nameRecipe = `Por favor ingrese un nombre mas descriptivo`;
  }

  if (recipe.nameRecipe.length > maxLengthName) {
    errorRecipe.nameRecipe = `El maximo de caracteres permitidos es de ${maxLengthName}`;
  }

  if (recipe.imageRecipe.length < 1) {
    errorRecipe.imageRecipe = `Por favor ingrese un enlace valido`;
  }

  // if (recipe.imageRecipe.length > 1) {
  //   if (!imageRegex.test(recipe.imageRecipe)) {
  //     errorRecipe.imageRecipe = `Este formato no esta permitido`;
  //   }
  // }

  if (recipe.summary.length < 1) {
    errorRecipe.summary = `Por favor ingrese una descripcion`;
  }

  if (recipe.summary.length > maxLengthSummary) {
    errorRecipe.summary = `El maximo de caracteres permitidos es de ${maxLengthSummary}`;
  }

  if (recipe.summary.length > 1 && recipe.summary.length < minLengthSummary) {
    errorRecipe.summary = `Por favor introduzca una descripcion de la receta`;
  }

  if (recipe.healthScore < 0) {
    errorRecipe.healthScore = `Lo lamento no puede existir calificaciones negativas`;
  }

  if (recipe.healthScore < minHealthScore) {
    errorRecipe.healthScore = `Por favor introduzca una calificacion`;
  }

  if (recipe.healthScore > maxHealthScore) {
    errorRecipe.healthScore = `Los rangos de calificacion del ${minHealthScore} al hasta el ${maxHealthScore}`;
  }

  if (!recipe.diets.length) {
    errorRecipe.diets = `Por favor introduzca dietas`;
  }

  return errorRecipe;
};
