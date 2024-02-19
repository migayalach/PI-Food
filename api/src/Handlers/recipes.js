const {
  createRecipes,
  buscarRecipe,
  mostrarAllRecipe,
  getRecipeData,
  putRecipeController,
  searchName,
} = require("../Controllers/recipesControllers");
const SUCCESS = 200,
  ERROR = 400;

//CREAR RECIPE
const createRecipeHandler = async (request, response) => {
  const { nameRecipe, imageRecipe, summary, healthScore, created, diets } =
    request.body;
  try {
    const newRecipe = await createRecipes(
      nameRecipe,
      imageRecipe,
      summary,
      healthScore,
      created,
      diets
    );
    response.status(SUCCESS).json({ success: newRecipe });
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// MUESTRA DATOS POR QUERY
const getRecipesHandler = async (request, response) => {
  const { page, name } = request.query;
  try {
    // PARA TODO
    if (!name && !page) {
      const result = await mostrarAllRecipe();
      response.status(SUCCESS).json(result);
    } else if (page && !name) {
      const result = await buscarRecipe(page);
      response.status(SUCCESS).json(result);
    } else {
      const result = await searchName(name, page);
      response.status(SUCCESS).json(result);
    }
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

// MUESTRA DATOS POR ID -> PARAMS
const getRecipeHandler = async (request, response) => {
  const { idRecipe } = request.params;
  try {
    const reciper = await getRecipeData(idRecipe);
    response.status(SUCCESS).json(reciper);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const updateRecipeHandler = async (request, response) => {
  const {
    idRecipe,
    nameRecipe,
    imageRecipe,
    summary,
    healthScore,
    created,
    diets,
    favorite,
    flag,
  } = request.body;
  try {
    const data = await putRecipeController(
      idRecipe,
      nameRecipe,
      imageRecipe,
      summary,
      healthScore,
      created,
      diets,
      favorite,
      flag
    );
    response.status(200).json(data);
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

module.exports = {
  createRecipeHandler,
  getRecipesHandler,
  getRecipeHandler,
  updateRecipeHandler,
};
