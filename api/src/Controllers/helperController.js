const { Recipe, Diets, DietsRecipe } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const { URL } = process.env;

async function existDiets() {
  return await Diets.findAll();
}

async function existRecipe(idRecipe) {
  return await Recipe.findOne({ where: { idRecipe } });
}

async function dietsPrommise(diets) {
  const diet = await Promise.all(
    diets.map((nameDiet) =>
      Diets.findOne({ where: { nameDiet: { [Op.like]: `${nameDiet}` } } })
    )
  );
  return diet.map(({ idDiet }) => idDiet);
}

async function addRecipeDiets(idRecipe, diets) {
  await Promise.all(
    diets.map(async (idDiet) => {
      return DietsRecipe.create({ idDiet, idRecipe });
    })
  );
  return `Receta creada con exito`;
}

async function deleteDietsRecipe(idRecipe) {
  return await DietsRecipe.destroy({ where: { idRecipe } });
}

async function duplicateName(nameRecipe) {
  return await Recipe.findAll({
    where: { nameRecipe: { [Op.iLike]: `%${nameRecipe}%` } },
  });
}

async function duplicateImage(imageRecipe) {
  return await Recipe.findAll({
    where: { imageRecipe: { [Op.like]: `${imageRecipe}` } },
  });
}

async function countData(option) {
  switch (option) {
    case "recipes":
      const count = await Recipe.count();
      // const info = {
      //   count,
      //   pages: Math.floor(count / 20),
      //   pag: await pagination(),
      // };
      // return info;
      return count;

    case "diets":
      return await Diets.count();

    default:
      break;
  }
}

async function pagination() {
  const page = await axios.get(`${URL}/recipes?page=2`);
  return {
    next: page.data,
    prev: "ACA VA EL FILTRO",
  };
}

function resesponseData(data, count) {
  const info = infoData(count);
  const results = pagination(data);
  const obj = {
    info,
    results,
  };
  return obj;
}

function infoData(count) {
  return { count, pages: Math.floor(count / 20) };
}

// function pagination(data, inicio, fin) {
//   const aux = [];
//   // for (let i = inicio; i <= fin; i++) {
//   //   aux.push(data[i]);
//   // }
//   return aux;
// }

module.exports = {
  existDiets,
  existRecipe,
  dietsPrommise,
  addRecipeDiets,
  deleteDietsRecipe,
  duplicateName,
  duplicateImage,
  countData,
  resesponseData,
};
