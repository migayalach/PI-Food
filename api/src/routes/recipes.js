const { Router } = require("express");
const { getRecipe } = require("../Handlers/recipes");
const recipesRouter = Router();

recipesRouter.get("/", getRecipe);

module.exports = recipesRouter;
