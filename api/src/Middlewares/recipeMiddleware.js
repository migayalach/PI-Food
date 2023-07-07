const ERROR = 400;

const validateRecipeName = (request, response, next) => {
  const {name} = request.query;
  if(!name) return response.status(ERROR).send("Introduce el nombre de la receta que quieras buscar");
  next();
};

const validateCreateRecipe = (request, response, next) => {
  const { nombre, imagen, resumen, nivel, pasoApaso, dieta } = request.body;
  if(!nombre) return response.status(ERROR).send("Falta nombre");
  if(!imagen) return response.status(ERROR).send("Falta un URL de la imagen de la receta");
  if(!resumen) return response.status(ERROR).send("Por favor agrega un resumen para esta receta");
  if(!nivel) return response.status(ERROR).send("Agrega un nivel de dificultad para la preparacion de la receta");
  if(!pasoApaso) return response.status(ERROR).send("Por favor agrega los pasos que seguiste para esta receta");
  if(dieta.length<1) return response.status(ERROR).send("Introduce por lo menos una dieta");
  next();
}

module.exports = {
  validateRecipeName,
  validateCreateRecipe
}