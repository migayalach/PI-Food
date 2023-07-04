const { Recipe, Diets } = require("../db");

const createRecipes = async (nombre, imagen, resumen, nivel, pasoApaso) =>
  await Recipe.create({
    name: nombre,
    image: imagen,
    resumenPlato: resumen,
    nivel,
    pasoApaso,
  });

const buscarRecipe = async (name) => {
  console.log(name);
  const dataBaseRecipe = await Recipe.findAll({
    where: {
      name,
    },
  });
  if (dataBaseRecipe.length === 0)
    throw Error(`No se ha encontrado la receta con este nombre: ${name}`);
  return dataBaseRecipe;
};

const mostrarAllRecipe = async () => {
  const data = await Recipe.findAll({
    include: [{ model: Diets }],
  });
  return data;
};

const getRecipeData = () => {

};

module.exports = {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
};
