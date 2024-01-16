const { Router } = require('express');

const dietsRouter = require("./diets");
const recipesRouter = require("./recipes");
const router = Router();


router.use("/diets", dietsRouter)//ok
router.use("/recipes", recipesRouter);

module.exports = router;