const { Router } = require("express");
const dataUpdate = require("../Handlers/updateHandler")
const updateData = Router();

updateData.get("/", dataUpdate)

module.exports = updateData;