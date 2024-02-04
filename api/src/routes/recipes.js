const { Router } = require("express");
const {
  validateRecipeName,
  validateCreateRecipe,
} = require("../Middlewares/recipeMiddleware");
const {
  createRecipeHandler,
  getRecipesHandler,
  getRecipeHandler,
  updateRecipeHandler,
} = require("../Handlers/recipes");
const recipesRouter = Router();

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", getRecipeHandler);
recipesRouter.post("/", createRecipeHandler);
recipesRouter.put("/", updateRecipeHandler);

module.exports = recipesRouter;
