const {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
} = require("../Controllers/recipesControllers");
const SUCCESS = 200,
  ERROR = 400;

//CREAR RECIPE
const createRecipeHandler = async (request, response) => {
  const { nombre, imagen, resumen, nivel, pasoApaso, dieta } = request.body;
  try {
    const newRecipe = await createRecipes(
      nombre,
      imagen,
      resumen,
      nivel,
      pasoApaso,
      dieta
    );
    response.status(SUCCESS).json({ success: newRecipe });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// MUESTRA DATOS POR QUERY
const getRecipesHandler = async (request, response) => {
  const { name } = request.query;
  try {
    const result = name ? await buscarRecipe(name) : await mostrarAllRecipe();
    response.status(SUCCESS).json(result);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// MUESTRA DATOS POR ID -> PARAMS
const getRecipeHandler = async (request, response) => {
  const { idRecipe } = request.params;
  const typeData = isNaN(idRecipe) ? "bdd" : "api";
  try {
    const reciper = await getRecipeData(typeData, idRecipe);
    console.log(reciper);
    response.status(SUCCESS).json(reciper);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = {
  createRecipeHandler,
  getRecipesHandler,
  getRecipeHandler,
};
