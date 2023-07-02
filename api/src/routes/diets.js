const { Router } = require("express");
const {getDiets} = require("../Handlers/diets");
const dietsRouter = Router();

dietsRouter.get("/", getDiets);

module.exports = dietsRouter;
