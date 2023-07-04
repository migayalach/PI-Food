const { Router } = require("express");
const { createRecipeHandler, getRecipesHandler, getRecipeHandler } = require("../Handlers/recipes");
const recipesRouter = Router();

// CREAR RECIPE
recipesRouter.post("/", createRecipeHandler);

//TRAE TODAS LAS RECETAS SI NO SE MANDA UN QUERY, PERO SI SE MANDA TRAE LO QUE SE BUSCA
recipesRouter.get("/", getRecipesHandler);

// BUSCA POR ID RECIBIDO POR PARAMS
recipesRouter.get("/:idRecipe", getRecipeHandler);

// recipesRouter.post("/", createRecipe);
module.exports = recipesRouter;
