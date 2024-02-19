const ERROR = 400;

const validateRecipeName = (request, response, next) => {
  const { name } = request.query;
  if (!name)
    return response
      .status(ERROR)
      .send("Introduce el nombre de la receta que quieras buscar");
  next();
};

const validateRecipeId = (request, response, next) => {
  const { idRecipe } = request.body;
  if (isNaN(idRecipe))
    return response
      .status(ERROR)
      .json({ error: `Lo siento el identificador enviado no es valido` });
  const number = parseInt(idRecipe);
  if (number < 1)
    return response
      .status(ERROR)
      .json({ error: "Por favor introduzca un identificador mayor a 0" });
  next();
};

const validateRecipeIdParams = (request, response, next) => {
  const { idRecipe } = request.params;
  if (isNaN(idRecipe))
    return response
      .status(ERROR)
      .json({ error: `Lo siento el identificador enviado no es valido` });
  const number = parseInt(idRecipe);
  if (number < 1)
    return response
      .status(ERROR)
      .json({ error: "Por favor introduzca un identificador mayor a 0" });
  next();
};

const validateCreateRecipe = (request, response, next) => {
  const {
    nameRecipe,
    imageRecipe,
    summary,
    healthScore,
    created,
    diets,
    flag,
  } = request.body;
  if (!flag) {
    if (!nameRecipe)
      return response.status(ERROR).json({ error: "Falta nombre" });

    if (!imageRecipe)
      return response
        .status(ERROR)
        .json({ error: "Falta una URL para la imagen" });

    if (!summary)
      return response
        .status(ERROR)
        .json({ error: "Por favor agrega un resumen para esta receta" });

    if (summary.length < 100) {
      return response
        .status(ERROR)
        .json({ error: "Por favor agrega un resumen mas largo" });
    }

    if (!parseFloat(healthScore))
      return response.status(ERROR).json({
        error: "Por favor introduzca una calificacion",
      });

    if (created !== true)
      return response
        .status(ERROR)
        .json({ error: "Usted no tiene permiso para alterar este campo" });

    if (!diets.length)
      return response
        .status(ERROR)
        .json({ error: "Introduce por lo menos una dieta" });
  }
  next();
};

module.exports = {
  validateRecipeName,
  validateCreateRecipe,
  validateRecipeId,
  validateRecipeIdParams,
};
