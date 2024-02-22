const { Router } = require("express");
const { getFilterData } = require("../Handlers/filter");
const filterRouter = Router();

filterRouter.get("/:name?/:order?/:healthScore?/:diets", getFilterData);

module.exports = filterRouter;