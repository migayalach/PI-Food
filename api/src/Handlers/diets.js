const { recivedDiet } = require("../Controllers/dietsControllers");
const SUCCESS = 200,
  ERROR = 400;

const getDiets = async (request, response) => {
  try {
    const responseDiet = await recivedDiet();
    response.status(SUCCESS).json(responseDiet);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getDiets };
