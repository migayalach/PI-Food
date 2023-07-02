const SUCCESS = 200, ERROR = 400;

const getDiets = (request, response) => {
  response.status(SUCCESS).json({ ok: "estamos en diets" });
};

module.exports = { getDiets };
