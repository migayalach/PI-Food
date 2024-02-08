const { Router } = require("express");
const {
  validateCreateRecipe,
  validateRecipeId,
  validateRecipeIdParams,
} = require("../Middlewares/recipeMiddleware");
const {
  createRecipeHandler,
  getRecipesHandler,
  getRecipeHandler,
  updateRecipeHandler,
} = require("../Handlers/recipes");
const recipesRouter = Router();

recipesRouter.get("/", getRecipesHandler);
recipesRouter.get("/:idRecipe", validateRecipeIdParams, getRecipeHandler);
recipesRouter.post("/", validateCreateRecipe, createRecipeHandler);
recipesRouter.put(
  "/",
  validateRecipeId,
  validateCreateRecipe,
  updateRecipeHandler
);

module.exports = recipesRouter;
