const { filterData } = require("../Controllers/filterController");
const SUCCESS = 200,
  ERROR = 400;

const getFilterData = async (request, response) => {
  const { name, healthScore, order, diets } = request.params;
  try {
    const data = await filterData(name, healthScore, order, diets);
    response.status(SUCCESS).json(data);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { getFilterData };
