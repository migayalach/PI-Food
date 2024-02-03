const { Router } = require("express");
const { validateRecipeName, validateCreateRecipe } = require("../Middlewares/recipeMiddleware");
const {
  createRecipeHandler,
  getRecipesHandler,
  getRecipeHandler,
} = require("../Handlers/recipes");
const recipesRouter = Router();

recipesRouter.get("/", getRecipesHandler);
recipesRouter.post("/", validateCreateRecipe, createRecipeHandler);
recipesRouter.get("/:idRecipe", getRecipeHandler);

module.exports = recipesRouter;
