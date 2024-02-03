const { Diets } = require("../db");
const localBdd = require("../Utils/dataBaseLocal");
const { clearDiets, reviewDiets } = require("../helpers/clearDataBdd");
const { existDiets } = require("./helperController");

const updateDataBdd = async () => {
  const dataDietsBdd = (await existDiets()).map(({ nameDiet }) => nameDiet);
  const dataDiets = (await localBdd.map(({ diets }) => diets)).flat();
  const dietsResult = clearDiets(dataDiets);
  const dietsData = reviewDiets(dietsResult, dataDietsBdd);
  if (!dietsData.length) {
    throw Error`No hay nuevas dietas para poder agregar a la base de datos`;
  }
  await Promise.all(
    dietsData.map(async (nameDiet) => await Diets.create({ nameDiet }))
  );
  return `Datos introducidos con exito`;
};

module.exports = updateDataBdd;
