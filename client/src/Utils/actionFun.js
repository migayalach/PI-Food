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

const orderScores = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let aux = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j].healthScore > array[aux].healthScore) aux = j;
    }
    let temp = array[aux];
    array[aux] = array[i];
    array[i] = temp;
  }
  return array;
};


module.exports = { newObjAddRec, orderScores };
