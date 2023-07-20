const newArrRecipe = (arr) =>
  arr.map((data) => {
    return {
      id: data.id,
      title: data.title,
      image: data.image,
      summary: data.summary,
      instructions: data.instructions,
      healthScore: data.healthScore,
      diets: data.diets,
    };
  });

const responseBdd = (arr) => {
  console.log(arr);
  const aux = arr.map(
    ({ id, name, image, resumenPlato, nivel, pasoApaso, created, diets }) => {
      const diet = diets.map(({ name }) => name);
      return {
        id,
        name,
        image,
        "summary":resumenPlato,
        "healthScore":nivel,
        "instructions":pasoApaso,
        created,
        diets: diet,
      };
    }
  );
  return aux;
};

const searchApi = (nombre, arr) => {
  return arr.filter(({ title }) => title == nombre);
};

const dataClear = (data) => {
  const aux = data.map((index) => {
    return {
      id: index.id,
      title: index.name,
      image: index.image,
      summary: index.resumenPlato,
      healthScore: index.nivel,
      instructions: index.resumenPlato,
      diets: index.diets.map((element) => element.name),
    };
  });
  return aux;
};

module.exports = {
  newArrRecipe,
  responseBdd,
  searchApi,
  dataClear,
};
