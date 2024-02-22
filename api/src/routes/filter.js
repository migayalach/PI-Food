const { Router } = require("express");
const { getFilterData } = require("../Handlers/filter");
const filterRouter = Router();

filterRouter.get("/", getFilterData);

module.exports = filterRouter;