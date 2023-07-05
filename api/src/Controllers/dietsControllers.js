const axios = require("axios");
const { Diets, Recipe } = require("../db");
const { API_KEY } = process.env;
const URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true`;
const { clearArray } = require("../Utils/dietsUtils");

const addBdd = async (arr) => await Diets.bulkCreate(arr);

const recivedDiet = async () => {
  const data = await Diets.count();
  if (data) return `Ya se cuentan las dietas registradas desde la API`;
  return await loadingApi();
};

const loadingApi = async () => {
  const apiDiets = (await axios.get(`${URL}`)).data.results;
  const apiResult = clearArray(apiDiets);
  return await addBdd(apiResult);
};

module.exports = {
  recivedDiet,
};
