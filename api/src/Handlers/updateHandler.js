const updateDataBdd = require("../Controllers/updateDataController");

const dataUpdate = async (request, response) => {
  try {
    const dataResponse = await updateDataBdd();
    response.status(200).json({ message: dataResponse });
  } catch (error) {
    response.status(400).json({ message: error.message });
  }
};

module.exports = dataUpdate;
