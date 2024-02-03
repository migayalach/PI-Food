const { Router } = require("express");

const dietsRouter = require("./diets");
const recipesRouter = require("./recipes");
const updateData = require("./updateData");

const router = Router();

router.use("/diets", dietsRouter);
router.use("/recipes", recipesRouter);
router.use("/updateData", updateData);

module.exports = router;
