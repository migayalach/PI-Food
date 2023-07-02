const SUCCESS = 200,
  ERROR = 400;

const getRecipe = (request, response) => {
  response.status(SUCCESS).json({ ok: "estamos en recipes" });
};

module.exports = {
  getRecipe,
};
