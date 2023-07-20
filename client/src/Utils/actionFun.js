const newObjAddRec = (recipe) => {
  let obj = {};
  for (let i in recipe) {
    obj = {
      nombre: recipe.nombre,
      imagen: recipe.imagen,
      resumen: recipe.resumen,
      nivel: recipe.nivelComida,
      pasoApaso: recipe.pasoApaso,
      dieta: recipe.dietas,
    };
  }
  return obj;
};

module.exports = { newObjAddRec };
